//* Imports

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const pan = require("./routes/pan");
const aadhaar = require("./routes/aadhaar");
const aadhaarGenerateOtp = require("./routes/aadhaarGenerateOtp");
const aadhaarSubmitOtp = require("./routes/aadhaarSubmitOtp");
const bank = require("./routes/bank");
require("dotenv").config();

//* Middlewares

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use("/pan-api/fetch-detailed", pan);
app.use("/aadhaar-api/verify", aadhaar);
app.use("/aadhaar-api/boson/generate-otp", aadhaarGenerateOtp);
app.use("/aadhaar-api/boson/submit-otp", aadhaarSubmitOtp);
app.use("/bank-api/verify", bank);

//* Env Variables

const PORT = process.env.PORT;

//* Mongoose Connection

mongoose.connect(
  `mongodb+srv://tnshgarg:${process.env.MONGOOSE_PASSWORD}@cluster0.bxgp0wj.mongodb.net/?retryWrites=true&w=majority`
);

//* App routes

app.get("/", (req, res) => {
  res.send("Mock Api for Unipe.");
});

//* App Listening PORTS

app.listen(3000, () => {
  console.log(`Server is listening on PORT ${PORT}`);
});
