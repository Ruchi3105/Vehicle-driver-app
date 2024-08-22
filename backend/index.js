const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

// Initialize the app
const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/vehicle-driver', { useNewUrlParser: true, useUnifiedTopology: true });

const driverSchema = new mongoose.Schema({
  name: String,
  phone: String
});

const Driver = mongoose.model('Driver', driverSchema);

// Routes
app.get('/drivers', async (req, res) => {
  const drivers = await Driver.find();
  res.json(drivers);
});

app.post('/drivers', async (req, res) => {
  const newDriver = new Driver(req.body);
  await newDriver.save();
  res.status(201).json(newDriver);
});

app.get('/drivers/:id', async (req, res) => {
  const driver = await Driver.findById(req.params.id);
  res.json(driver);
});

app.put('/drivers/:id', async (req, res) => {
  const updatedDriver = await Driver.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updatedDriver);
});

app.delete('/drivers/:id', async (req, res) => {
  await Driver.findByIdAndDelete(req.params.id);
  res.status(204).end();
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
