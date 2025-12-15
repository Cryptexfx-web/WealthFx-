const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const cron = require("node-cron");
const profitEngine = require("./profitEngine");

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

// Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/invest", require("./routes/invest"));
app.use("/api/deposit", require("./routes/deposit"));
app.use("/api/withdraw", require("./routes/withdraw"));
app.use("/api/admin", require("./routes/admin"));

// Daily profit cron job (runs at midnight)
cron.schedule("0 0 * * *", () => profitEngine());

app.listen(process.env.PORT || 5000, () => console.log("Server running"));
