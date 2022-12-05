const express = require("express");
const { infoView, getInfo } = require("../controllers/infoController");
const router = express.Router();
router.get("/infoEjs", infoView);
router.post("/infoEjs", getInfo);
module.exports = router;
