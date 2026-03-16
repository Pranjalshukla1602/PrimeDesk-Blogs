const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/primedesk_crm')
  .then(() => console.log('✅ Connected to MongoDB (PrimeDesk CRM)'))
  .catch((err) => console.error('❌ MongoDB Connection Error:', err));

const Lead = require('./models/Lead');

app.post('/api/leads', async (req, res) => {
  try {
    const { name, email, phone, companyName, teamSize, source } = req.body;
    
    if (!name || !phone) {
      return res.status(400).json({ success: false, message: 'Name and Phone are required.' });
    }

    const newLead = new Lead({ name, email, phone, companyName, teamSize, source });
    const savedLead = await newLead.save();

    res.status(201).json({ success: true, message: 'Lead saved successfully.', leadId: savedLead._id });
  } catch (err) {
    console.error('Lead Save Error:', err);
    res.status(500).json({ success: false, message: 'Internal server error.' });
  }
});

app.get('/api/leads', async (req, res) => {
  try {
    const leads = await Lead.find().sort({ createdAt: -1 });
    res.status(200).json(leads);
  } catch (err) {
    res.status(500).json({ success: false, message: 'Failed to fetch leads.' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 PrimeDesk CRM Backend is running on http://localhost:${PORT}`);
});
