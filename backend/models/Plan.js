const mongoose = require("mongoose");
const PlanSchema = new mongoose.Schema({
  name: String,
  min: Number,
  max: Number,
  dailyROI: Number,
  duration: Number
});
module.exports = mongoose.model("Plan", PlanSchema);
