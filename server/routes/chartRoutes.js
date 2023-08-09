const router = require("express").Router();

const { mainfrt } = require("../controllers/chartController.js");
const { lbyrt } = require("../controllers/chartController.js");
router.get("/mainfrt", mainfrt);
router.get("/lbyrt", lbyrt);
module.exports = router;
