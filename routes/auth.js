const express = require('express');
const { registerUser, loginUser, updateLogin, deleteLogin } = require('../controllers/auth');
const { authMiddleware } = require('../middleware/session');
const router = express.Router();

/**Create User */
router.post("/register", registerUser );
/**Login User */
router.post("/login", loginUser );
/**Update User */
router.put("/:id", authMiddleware, updateLogin );
/**Delete User */
router.delete("/:id", authMiddleware, deleteLogin );

module.exports = router;