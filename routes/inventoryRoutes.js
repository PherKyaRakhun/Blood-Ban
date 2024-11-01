const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const {
  createInventoryController,
  getInventoryController,
  getDonarsController,
  // getDonarsController,
  getHospitalController,
  getOrgnaizationController,
  getOrgnaizationForHospitalController,
  getInventoryHospitalController,
  //   // getInventoryHospitalController,
  //   // getRecentInventoryController,
} = require("../controller/inventoryController");

const router = express.Router();

//routes
// ADD INVENTORY || POST
router.post("/create-inventory", authMiddleware, createInventoryController);

//GET ALL BLOOD RECORDS
router.get("/get-inventory", authMiddleware, getInventoryController);
// //GET RECENT BLOOD RECORDS
// router.get(
//   "/get-recent-inventory",
//   authMiddleware,
//   getRecentInventoryController
// );

// //GET HOSPITAL BLOOD RECORDS
router.post(
  "/get-inventory-hospital",
  authMiddleware,
  getInventoryHospitalController
);

// //GET DONAR RECORDS
router.get("/get-donars", authMiddleware, getDonarsController);

// //GET HOSPITAL RECORDS
router.get("/get-hospitals", authMiddleware, getHospitalController);

// //GET orgnaisation RECORDS
router.get("/get-orgnaization", authMiddleware, getOrgnaizationController);

// //GET orgnaisation RECORDS
router.get(
  "/get-orgnaization-for-hospital",
  authMiddleware,
  getOrgnaizationForHospitalController
);

module.exports = router;
