const express = require("express");
const { testController } = require("../controller/testController");

//Router Object
const router = express.Router();

//Routes
router.get("/", testController);

module.exports = router;
