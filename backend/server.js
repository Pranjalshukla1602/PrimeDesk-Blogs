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
    
    if (!phone) {
      return res.status(400).json({ success: false, message: 'Phone is required.' });
    }

    const newLead = new Lead({ name, email, phone, companyName, teamSize, source });
    const savedLead = await newLead.save();

    res.status(201).json({ success: true, message: 'Lead saved successfully.', leadId: savedLead._id });
  } catch (err) {
    console.error('Lead Save Error:', err);
    res.status(500).json({ success: false, message: 'Internal server error.' });
  }
});

app.put('/api/leads/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, companyName, teamSize } = req.body;
    
    const updatedLead = await Lead.findByIdAndUpdate(
      id,
      { name, email, companyName, teamSize },
      { new: true }
    );
    
    if (!updatedLead) {
      return res.status(404).json({ success: false, message: 'Lead not found.' });
    }
    
    res.status(200).json({ success: true, message: 'Lead updated successfully.', lead: updatedLead });
  } catch (err) {
    console.error('Lead Update Error:', err);
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
