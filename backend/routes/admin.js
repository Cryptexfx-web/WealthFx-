const express = require("express");
const auth = require("../middleware/auth");
const Deposit = require("../models/Deposit");
const Withdrawal = require("../models/Withdrawal");
const User = require("../models/User");
const router = express.Router();

router.post("/approve-deposit/:id", auth("admin"), async(req,res)=>{
  const d = await Deposit.findById(req.params.id);
  d.status="approved"; await d.save();
  await User.findByIdAndUpdate(d.userId,{$inc:{balance:d.amount}});
  res.json({message:"Deposit approved"});
});

router.post("/approve-withdraw/:id", auth("admin"), async(req,res)=>{
  const w = await Withdrawal.findById(req.params.id);
  w.status="approved"; await w.save();
  res.json({message:"Withdrawal approved"});
});

module.exports = router;
