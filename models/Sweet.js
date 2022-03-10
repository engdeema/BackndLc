const { model, Schema } = require("mongoose");
const SweetSchema = Schema({
  name: { type: String },
  image: { type: String },
  description: { type: String },
});

module.exports = model("Sweet", SweetSchema);
