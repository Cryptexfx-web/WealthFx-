const express = require("express");
const auth = require("../middleware/auth");
const Plan = require("../models/Plan");
const Investment = require("../models/Investment");
const User = require("../models/User");
const router = express.Router();

router.post("/", auth(), async (req,res)=>{
  const plan = await Plan.findById(req.body.planId);
  const user = await User.findById(req.user.id);

  if(req.body.amount < plan.min || req.body.amount > plan.max)
    return res.status(400).json({error:"Invalid amount"});
  if(user.balance < req.body.amount)
    return res.status(400).json({error:"Insufficient balance"});

  const dailyProfit = (req.body.amount * plan.dailyROI)/100;
  user.balance -= req.body.amount;
  await user.save();

  await new Investment({
    userId:user._id,
    planId:plan._id,
    amount:req.body.amount,
    dailyProfit
  }).save();

  res.json({message:"Investment started"});
});

module.exports = router;
