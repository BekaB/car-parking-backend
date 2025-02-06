const mongoose = require("mongoose");

const TrafficPoliceSchema = new mongoose.Schema({
  name: { type: String, required: true },
  badgeNumber: { type: String, unique: true, required: true }, // Unique ID
});

module.exports = mongoose.model("TrafficPolice", TrafficPoliceSchema);
