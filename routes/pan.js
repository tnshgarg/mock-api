const express = require("express");
const Pan = require("../models/Pan");
const { check, validationResult } = require("express-validator");
const router = express.Router();

router.post("/", (req, res) => {
  const pan = new Pan({
    pan_number: req.body.pan_number,
    consent: req.body.consent,
  });

  pan
    .save()
    .then((result) => {
      res.send({
        request_id: "0a00bf65-b173-4509-9a6a-3e4ff49136a0",
        status: 200,
        data: {
          code: "1000",
          message: "Valid PAN.",
          pan_data: {
            document_type: "PAN",
            document_id: "DWGPG2856F",
            first_name: "JOHN",
            last_name: "DOE",
            category: "P",
            date_of_birth: "1994-XX-XX",
            masked_aadhaar_number: "XXXXXXXX0617",
            address_data: {
              line_1: "21 LEHNA SINGH MARKET",
              line_2: "NAYANAGAR GANJ",
              city: "HYDERABAD",
              pincode: "500001",
            },
            email: "JOHNDOE229@GMAIL.COM",
            gender: "MALE",
            aadhaar_linked: true,
          },
        },
        timestamp: 1648015223272,
        path: "/fetch-detailed",
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
