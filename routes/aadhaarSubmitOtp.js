const express = require("express");
const AadhaarSubmitOtp = require("../models/AadhaarSubmitOtp");
const { check, validationResult } = require("express-validator");
const router = express.Router();

router.post("/", (req, res) => {
  const aadhaarSubmitOtp = new AadhaarSubmitOtp({
    otp: req.body.otp,
    include_xml: req.body.include_xml,
    share_code: req.body.share_code,
  });

  aadhaarSubmitOtp
    .save()
    .then((result) => {
      res.send({
        request_id: "ad8229aa-4f70-4bc3-a3ea-c3e1ed2d5ad3",
        data: {
          code: "1002",
          state: "XML_DOWNLOADED",
          transaction_id: "822d9cfc-c3aa-4ac4-bc15-c34754e52f88",
          message: "XML parsed and read",
          share_code: "1234",
          aadhaar_data: {
            document_type: "AADHAAR",
            name: "KARAN XXXX",
            date_of_birth: "01-01-1990",
            gender: "Male",
            care_of: "S/O XXXXXXXXXX",
            house: "3-184/A/1/",
            street: "XXXXXXXXXX",
            district: "XXXXXXXXXX",
            sub_district: "",
            landmark: "XXXXXXXXXX",
            locality: "XXXXXXXXXX",
            post_office_name: "",
            state: "Andhra Pradesh",
            pincode: "500001",
            country: "India",
            vtc_name: "Hyderabad",
            mobile: "96XXXXXXXX",
            email: "abc@xyz.com",
            photo_base64:
              "/9j/4AAQSkZJRyMjIyMjIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmAg/QiiihoHuSk5ozRRUDR/9k=",
            xml_base64:
              "UEsDBBQACQAIAIKxplIAAAAAAAAAAAAAAAAjAAAAb2ZmbGluZWFhZGhhYXIyMDIxMDUwNjEwMTIwNDQ3Ny54bWwkfeGLtRmhGRCIDCH7enqsQcxPT",
          },
        },
        timestamp: 1612351951720,
        path: "/boson/submit-otp",
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
