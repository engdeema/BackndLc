const { model, Schema } = require("mongoose");
const OrderSchema = Schema(
  {
    sweet: { type: Schema.Types.ObjectId, ref: "Sweet" },
    quantity: {
      type: Number,
      max: 5,
    },
    processed: { type: Boolean, default: false },
    // if some one has purchase 4 sweets and another person wants 3 more
    // and your max is 5 orders, so this one will check timing of the purchase
  },
  { timeStamps: true }
);

module.exports = model("Order", OrderSchema);
