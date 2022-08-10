const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PanSchema = new mongoose.Schema({
  pan_number: {
    type: Schema.Types.String,
  },
  consent: {
    type: Schema.Types.String,
  },
});

module.exports = mongoose.model("Pan", PanSchema);
