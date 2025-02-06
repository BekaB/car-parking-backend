const mongoose = require("mongoose");

const ParkingSchema = new mongoose.Schema({
  plateSource: { type: String, required: true }, // e.g., ABC
  plateNumber: { type: String, required: true }, // e.g., 1234
  hours: { type: Number, required: true }, // Parking duration
  amountPaid: { type: Number, required: true }, // 10 Birr per hour
  startTime: { type: Date, default: Date.now }, // When parking starts
  expiryTime: { type: Date } // Auto-calculate later
});

module.exports = mongoose.model("Parking", ParkingSchema);
