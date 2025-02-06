const express = require("express");
const Parking = require("../models/Parking");

const router = express.Router();

// 📌 Simulate Parking Request (User sends an SMS)
router.post("/", async (req, res) => {
  try {
    const { plateSource, plateNumber, hours } = req.body;
    const amountPaid = hours * 10; // 10 Birr per hour
    const expiryTime = new Date(Date.now() + hours * 60 * 60 * 1000);

    const newParking = new Parking({
      plateSource,
      plateNumber,
      hours,
      amountPaid,
      expiryTime,
    });

    await newParking.save();
    res.status(201).json({ message: "Parking registered successfully", newParking });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 📌 Check Parking Status (Traffic Police)
router.get("/:plateNumber", async (req, res) => {
  try {
    const { plateNumber } = req.params;
    const parking = await Parking.findOne({ plateNumber });

    if (!parking) {
      return res.status(404).json({ message: "No active parking found" });
    }

    const isExpired = new Date() > parking.expiryTime;
    res.json({ parking, status: isExpired ? "EXPIRED" : "ACTIVE" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
