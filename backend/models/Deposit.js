const mongoose = require("mongoose");
const DepositSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  amount: Number,
  crypto: String,
  status: { type: String, default: "pending" }
});
module.exports = mongoose.model("Deposit", DepositSchema);
