const Order = require("../../models/Order");
const fs = require("fs");
const path = require("path");

exports.fetchOrder = async (req, res, next) => {
  try {
    const sweets = await Sweet.find();
    return res.json(sweets);
  } catch (error) {
    next(error);
  }
};

exports.createOrder = async (req, res, next) => {
  try {
    const {
      customerName,
      phoneNumber,
      customerEmail,
      sweet,
      quantity,
      address,
      extraDriverNote,
      note,
    } = req.body;

    const newOrder = await Order.create({
      customerName,
      phoneNumber,
      customerEmail,
      sweet,
      quantity: quantity >= 1 ? quantity : 1,
      address,
      extraDriverNote,
      note,
    });
    return res.status(201).json(newOrder);
  } catch (error) {
    next(error);
  }
};

exports.loadAddress = async (req, res, next) => {
  try {
    let data = fs.readFileSync(path.resolve(__dirname, "addressName.json"));
    return res.send(data);
  } catch (error) {
    next(error);
  }
};
