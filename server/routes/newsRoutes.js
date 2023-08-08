const router = require("express").Router();
const { storeNews } = require("../controllers/newsControllers");

router.post("/storeNews", storeNews);

module.exports = router;