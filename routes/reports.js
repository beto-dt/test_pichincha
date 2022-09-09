const express = require("express");
const { getReportsPorUserAndDate } = require("../controllers/reports");
const { authMiddleware } = require("../middleware/session");
const router = express.Router();

/** Get Reports por Date */
router.get("/", authMiddleware, getReportsPorUserAndDate);

module.exports = router;