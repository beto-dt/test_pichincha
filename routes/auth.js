const express = require('express');
const { registerUser, loginUser, updateLogin, deleteLogin } = require('../controllers/auth');
const { authMiddleware } = require('../middleware/session');
const router = express.Router();

router.post("/register", registerUser )
router.post("/login", loginUser )
router.put("/:id", authMiddleware, updateLogin )
router.delete("/:id", authMiddleware, deleteLogin )

module.exports = router;