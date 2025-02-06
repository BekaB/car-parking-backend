const express = require("express");
const TrafficPolice = require("../models/TrafficPolice");

const router = express.Router();

// 📌 Add a Traffic Police Officer
router.post("/add", async (req, res) => {
  try {
    const { name, badgeNumber } = req.body;
    const newOfficer = new TrafficPolice({ name, badgeNumber });

    await newOfficer.save();
    res.status(201).json({ message: "Traffic police added", newOfficer });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 📌 Delete a Traffic Police Officer
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await TrafficPolice.findByIdAndDelete(id);
    res.json({ message: "Traffic police removed" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
