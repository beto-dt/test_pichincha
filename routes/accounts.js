const express = require("express");
const { getAccounts, getAccount, createAccount, updateAccount, deleteAccount } = require("../controllers/accounts");
const { authMiddleware } = require("../middleware/session");
const router = express.Router();

router.get("/", authMiddleware, getAccounts);
router.get("/user",authMiddleware, getAccount);
router.post("/",authMiddleware, createAccount);
router.put("/:id",authMiddleware, updateAccount);
router.delete("/:id",authMiddleware, deleteAccount);

module.exports = router;