const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const Job = require('./models/Job');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error(err));

app.get('/jobs', async (req, res) => {
  const jobs = await Job.find();
  res.json(jobs);
});

// app.post('/jobs', async (req, res) => {
//   const job = new Job(req.body);
//   await job.save();
//   res.json(job);
// });



app.post('/jobs', async (req, res) => {
    try {
      const job = new Job(req.body);
      await job.save();
      res.json(job);
    } catch (err) {
      console.error("Error saving job:", err);
      res.status(400).json({ error: err.message });
    }
  });




app.put('/jobs/:id', async (req, res) => {
  const job = await Job.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(job);
});

app.delete('/jobs/:id', async (req, res) => {
  await Job.findByIdAndDelete(req.params.id);
  res.json({ success: true });
});



app.get('/jobs/:id', async (req, res) => {
    try {
      const job = await Job.findById(req.params.id);
      if (!job) return res.status(404).json({ message: 'Job not found' });
      res.json(job);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
