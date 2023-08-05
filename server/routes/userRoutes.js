const express = require("express");
const {
  registerUser,
  authUser,
  getStudents,
  getCoordinates,
} = require("../controllers/userControllers");
const { protect } = require("../middleware/authMiddleware");
const router = express.Router();

router.route("/").post(registerUser);
router.post("/login", authUser);

module.exports = router;
