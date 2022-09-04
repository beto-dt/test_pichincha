const express = require("express");
const { getTransactions, getTransaction, createTransactions, updateTransactions, deleteTransactions } = require("../controllers/transactions");
const router = express.Router();

router.get("/", getTransactions);
router.get("/:id", getTransaction);
router.post("/", createTransactions);
router.put("/:id", updateTransactions);
router.delete("/:id", deleteTransactions);

module.exports = router;