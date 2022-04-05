const Order = require("../../models/Order");

exports.fetchOrder = async (req, res, next) => {
  //   try {
  //     const sweets = await Sweet.find();
  //     return res.json(sweets);
  //   } catch (error) {
  //     next(error);
  //   }
};

exports.createOrder = async (req, res, next) => {
  try {
    const newOrder = await Order.create({ ...req.body, quantity: 1 });
    return res.status(201).json(newOrder);
  } catch (error) {
    next(error);
  }
};
