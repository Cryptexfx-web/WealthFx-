const mongoose = require("mongoose");
const WithdrawalSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  amount: Number,
  wallet: String,
  crypto: String,
  status: { type: String, default: "pending" }
});
module.exports = mongoose.model("Withdrawal", WithdrawalSchema);
