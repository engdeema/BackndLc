const express = require("express");
const router = express.Router();
const upload = require("../../middleware/multer");

const { fetchOrder, createOrder } = require("./order.controller");

router.get("/", fetchOrder);
router.post("/", createOrder);

module.exports = router;
