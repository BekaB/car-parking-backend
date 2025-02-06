const express = require("express");
const TrafficPolice = require("../models/TrafficPolice");

const router = express.Router();

// 📌 Get All Traffic Police Officers
router.get("/", async (req, res) => {
  try {
    const officers = await TrafficPolice.find();
    res.json(officers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
