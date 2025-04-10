const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema({
  position: { type: String, required: true },
  company: { type: String, required: true },
  location: { type: String },
  status: {
    type: String,
    enum: ['pending', 'interview', 'declined'],
    default: 'pending'
  },
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Job', JobSchema);
