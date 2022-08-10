const express = require("express");
const Aadhaar = require("../models/Aadhaar");
const { check, validationResult } = require("express-validator");
const router = express.Router();

router.post("/", (req, res) => {
  const aadhaar = new Aadhaar({
    aadhaar_number: req.body.aadhaar_number,
    consent: req.body.consent,
  });

  aadhaar
    .save()
    .then((result) => {
      res.send({
        request_id: "c18e0e07-bb49-4b1b-bd24-193f0a8a11dd",
        status: 200,
        data: {
          code: "1018",
          message: "Aadhaar number exists",
          aadhaar_data: {
            document_type: "AADHAAR",
            gender: "MALE",
            age_band: "20-30",
            mobile: "9XXXXXX779",
            state: "Madhya Pradesh",
          },
        },
        timestamp: 1642998560455,
        path: "/verify",
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
