const express = require("express");
const Withdrawal = require("../models/Withdrawal");
const User = require("../models/User");
const auth = require("../middleware/auth");
const router = express.Router();

router.post("/", auth(), async (req,res)=>{
  if(req.body.amount < 50)
    return res.status(400).json({error:"Minimum withdrawal is $50"});
  const user = await User.findById(req.user.id);
  if(user.balance < req.body.amount)
    return res.status(400).json({error:"Insufficient balance"});

  user.balance -= req.body.amount;
  await user.save();

  await new Withdrawal({
    userId:user._id,
    amount:req.body.amount,
    wallet:req.body.wallet,
    crypto:req.body.crypto
  }).save();

  res.json({message:"Withdrawal request sent"});
});

module.exports = router;
