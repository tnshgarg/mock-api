const express = require("express");
const AadhaarGenerateOtp = require("../models/AadhaarGenerateOTP");
const { check, validationResult } = require("express-validator");
const router = express.Router();

router.post("/", (req, res) => {
  const aadhaarGenerateOtp = new AadhaarGenerateOtp({
    aadhaar_number: req.body.aadhaar_number,
    consent: req.body.consent,
  });

  aadhaarGenerateOtp
    .save()
    .then((result) => {
      res.send({
        request_id: "a94e2515-6b90-44c4-990a-dfc8c5630740",
        status: 200,
        data: {
          code: "1001",
          message:
            "OTP sent to your Registered Mobile number. Check your mobile.",
          transaction_id: "20abb4d3-b20b-4892-a924-5b36cf4d9893",
        },
        timestamp: 1643612990568,
        path: "/boson/generate-otp",
      });
    })
    .catch((e) => {
      console.log(e);
      res.send({
        status: "ERROR",
        data: e,
      });
    });
});

module.exports = router;
