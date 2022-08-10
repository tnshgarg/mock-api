const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BankSchema = new mongoose.Schema({
  account_number: {
    type: Schema.Types.String,
  },
  ifsc: {
    type: Schema.Types.String,
  },
  consent: {
    type: Schema.Types.String,
  },
});

module.exports = mongoose.model("Bank", BankSchema);
