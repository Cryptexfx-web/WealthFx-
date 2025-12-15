const Investment = require("./models/Investment");
const User = require("./models/User");

module.exports = async ()=>{
  const investments = await Investment.find({status:"running"});
  for(let inv of investments){
    const user = await User.findById(inv.userId);
    user.balance += inv.dailyProfit;
    inv.daysCompleted += 1;
    if(inv.daysCompleted >= inv.duration) inv.status="completed";
    await user.save();
    await inv.save();
  }
};
