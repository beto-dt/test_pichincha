const express = require("express");
const { getTransactions, getTransaction, createTransactions, updateTransactions, deleteTransactions, createTransactionWithdrawalOrDeposit } = require("../controllers/transactions");
const { authMiddleware } = require("../middleware/session");
const router = express.Router();
/**Get Transactions */
router.get("/", authMiddleware, getTransactions);
/**Get Transaction */
router.get("/account", authMiddleware,  getTransaction);
/**Get Transaction (Withdrawal/Deposit) */
router.post("/transaction", authMiddleware, createTransactionWithdrawalOrDeposit);
/**Get Transaction Manual */
router.post("/", authMiddleware, createTransactions);
/**Update Transaction Manual */
router.put("/:id", authMiddleware, updateTransactions);
/**Delete Transaction Manual */
router.delete("/:id", authMiddleware, deleteTransactions);

module.exports = router;