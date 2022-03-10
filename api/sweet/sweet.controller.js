const Sweet = require("../../models/Sweet");

exports.fetchSweet = async (req, res, next) => {
  try {
    const sweets = await Sweet.find();
    return res.json(sweets);
  } catch (error) {
    next(error);
  }
};

exports.createSweet = async (req, res, next) => {
  try {
    if (req.file) {
      req.body.image = `${req.protocol}://${req.get("host")}/${req.file.path}`;
    }
    const newSweet = await Sweet.create(req.body);
    return res.status(201).json(newSweet);
  } catch (error) {
    next(error);
  }
};
