const express = require("express");
const router = express.Router();

const { fetchOrder, createOrder, loadAddress } = require("./order.controller");

router.get("/", fetchOrder);
router.post("/", createOrder);
router.get("/addresses", loadAddress);

module.exports = router;
