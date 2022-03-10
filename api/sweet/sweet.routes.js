const express = require("express");
const router = express.Router();
const upload = require("../../middleware/multer");

const { fetchSweet, createSweet } = require("./sweet.controller");

router.get("/", fetchSweet);
router.post("/", upload.single("image"), createSweet);

module.exports = router;
