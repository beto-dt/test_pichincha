const express = require("express");
const { getTransactions, getTransaction, createTransactions, updateTransactions, deleteTransactions, createTransactionWithdrawalOrDeposit } = require("../controllers/transactions");
const { authMiddleware } = require("../middleware/session");
const router = express.Router();

router.get("/", authMiddleware, getTransactions);
router.get("/account", authMiddleware,  getTransaction);
router.post("/transaction", authMiddleware, createTransactionWithdrawalOrDeposit);
router.post("/", authMiddleware, createTransactions);
router.put("/:id", authMiddleware, updateTransactions);
router.delete("/:id", authMiddleware, deleteTransactions);

module.exports = router;