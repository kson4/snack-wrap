const express = require("express");
const router = express.Router();
const mainController = require("../controllers/main");

router.get("/", mainController.home);
router.post("/signed-petition", mainController.signed);

module.exports = router;
