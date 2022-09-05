const express = require("express");
const { getReportsPorUserAndDate } = require("../controllers/reports");
const { authMiddleware } = require("../middleware/session");
const router = express.Router();

router.post("/", authMiddleware, getReportsPorUserAndDate);

module.exports = router;