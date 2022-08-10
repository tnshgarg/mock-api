const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const AadhaarSubmitOtpSchema = new mongoose.Schema({
  otp: {
    type: Schema.Types.String,
  },
  include_xml: {
    type: Schema.Types.String,
  },
  share_code: {
    type: Schema.Types.String,
  },
});

module.exports = mongoose.model("AadhaarSubmitOtp", AadhaarSubmitOtpSchema);
