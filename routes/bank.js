const express = require("express");
const Bank = require("../models/Bank");
const { check, validationResult } = require("express-validator");
const router = express.Router();

router.post("/", (req, res) => {
  const bank = new Bank({
    account_number: req.body.account_number,
    ifsc: req.body.ifsc,
    consent: req.body.consent,
  });

  bank
    .save()
    .then((result) => {
      res.send({
        request_id: "711c97ec-446e-49fc-9ef6-81d823636913",
        status: 200,
        data: {
          code: "1000",
          message: "Bank Account details verified successfully.",
          bank_account_data: {
            reference_id: "498799",
            name: "JOHN DOE",
            bank_name: "YES BANK",
            utr: "1387XXXXXXXXXXXXXXXXXXXX",
            city: "GREATER BOMBAY",
            branch: "SANTACRUZ, MUMBAI",
            micr: "4005XXXXX",
          },
        },
        timestamp: 1623743669011,
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
