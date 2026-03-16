const mongoose = require('mongoose');

const leadSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String },
  phone: { type: String, required: true },
  companyName: { type: String },
  teamSize: { type: String },
  source: { type: String, default: 'Website' },
  status: { type: String, default: 'New', enum: ['New', 'Contacted', 'Qualified', 'Lost', 'Won'] },
  notes: { type: String }
}, {
  timestamps: true // Auto adds createdAt and updatedAt
});

module.exports = mongoose.model('Lead', leadSchema);
