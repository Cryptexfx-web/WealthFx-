const mongoose = require("mongoose");
const InvestmentSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  planId: mongoose.Schema.Types.ObjectId,
  amount: Number,
  dailyProfit: Number,
  daysCompleted: { type: Number, default: 0 },
  status: { type: String, default: "running" }
});
module.exports = mongoose.model("Investment", InvestmentSchema);
