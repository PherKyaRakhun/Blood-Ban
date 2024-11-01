const express = require("express");
const {
  registerController,
  loginController,
  currentUserController,
} = require("../controller/authController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

// Routes
// User Register || Post
router.post("/register", registerController);

// Login || Post
router.post("/login", loginController);

// Current User || Get

router.get("/current-user", authMiddleware, currentUserController);
module.exports = router;
