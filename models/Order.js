const { model, Schema } = require("mongoose");
const OrderSchema = Schema(
  {
    customerName: { type: String, require: true },
    phoneNumber: { type: String, require: true },
    customerEmail: {
      type: String,
      lowercase: true,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please fill a valid email address",
      ],
    },
    address: { type: String },
    extraDriverNote: { type: String },

    sweet: { type: Schema.Types.ObjectId, ref: "Sweet" },
    quantity: {
      type: Number,
      max: 5,
    },
    note: { type: String, maxLength: 100 },
    processed: { type: Boolean, default: false },
    // if some one has purchase 4 sweets and another person wants 3 more
    // and your max is 5 orders, so this one will check timing of the purchase
  },
  { timeStamps: true }
);

module.exports = model("Order", OrderSchema);
