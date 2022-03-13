const { model, Schema } = require("mongoose");
const OrderSchema = Schema({
  name: { type: String },
  image: { type: String },
  description: { type: String },
  quantity: {
    type: Number,
    default: 5,
  },
});

module.exports = model("Order", OrderSchema);
