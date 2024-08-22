// const express = require('express');
// const router = express.Router();
// const Driver = require('../models/Driver');

// // Create a new driver
// router.post('/drivers', async (req, res) => {
//   try {
//     const driver = new Driver(req.body);
//     await driver.save();
//     res.status(201).send(driver);
//   } catch (error) {
//     res.status(400).send(error);
//   }
// });

// // Get all drivers
// router.get('/drivers', async (req, res) => {
//   try {
//     const drivers = await Driver.find();
//     res.status(200).send(drivers);
//   } catch (error) {
//     res.status(500).send(error);
//   }
// });

// // Get a single driver by ID
// router.get('/drivers/:id', async (req, res) => {
//   try {
//     const driver = await Driver.findById(req.params.id);
//     if (!driver) return res.status(404).send();
//     res.status(200).send(driver);
//   } catch (error) {
//     res.status(500).send(error);
//   }
// });

// // Update a driver by ID
// router.put('/drivers/:id', async (req, res) => {
//   try {
//     const driver = await Driver.findByIdAndUpdate(req.params.id, req.body, { new: true });
//     if (!driver) return res.status(404).send();
//     res.status(200).send(driver);
//   } catch (error) {
//     res.status(400).send(error);
//   }
// });

// // Delete a driver by ID
// router.delete('/drivers/:id', async (req, res) => {
//   try {
//     const driver = await Driver.findByIdAndDelete(req.params.id);
//     if (!driver) return res.status(404).send();
//     res.status(200).send({ message: 'Driver deleted' });
//   } catch (error) {
//     res.status(500).send(error);
//   }
// });

// module.exports = router;
