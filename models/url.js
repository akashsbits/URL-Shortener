const mongoose = require("mongoose");
const { nanoid } = require("nanoid");

const urlSchema = new mongoose.Schema({
  url: { type: String, required: true },
  shortUrl: { type: String, default: nanoid(7), required: true },
});

module.exports = mongoose.model("URL", urlSchema);
