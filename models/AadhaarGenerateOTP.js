const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const AadhaarGenerateOtpSchema = new mongoose.Schema({
  aadhaar_number: {
    type: Schema.Types.String,
  },
  consent: {
    type: Schema.Types.String,
  },
});

module.exports = mongoose.model("AadhaarGenerateOtp", AadhaarGenerateOtpSchema);
