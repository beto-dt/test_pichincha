const express = require("express");
const { getAccounts, getAccount, createAccount, updateAccount, deleteAccount } = require("../controllers/accounts");
const { authMiddleware } = require("../middleware/session");
const router = express.Router();
/**Get Accounts */
router.get("/", getAccounts);
/**Get Account */
router.get("/user",authMiddleware, getAccount);
/**Create Account */
router.post("/",authMiddleware, createAccount);
/**Update Account */
router.put("/:id",authMiddleware, updateAccount);
/**Delete Account */
router.delete("/:id",authMiddleware, deleteAccount);

module.exports = router;