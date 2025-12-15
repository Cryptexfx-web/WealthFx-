const express = require("express");
const Deposit = require("../models/Deposit");
const auth = require("../middleware/auth");
const router = express.Router();

router.post("/", auth(), async (req,res)=>{
  await new Deposit({
    userId:req.user.id,
    amount:req.body.amount,
    crypto:req.body.crypto
  }).save();
  res.json({message:"Deposit pending approval"});
});

module.exports = router;
