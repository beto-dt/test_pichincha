const express = require('express');
const { registerUser, loginUser, updateLogin, deleteLogin } = require('../controllers/auth');
const router = express.Router();

//TODO http://localhost:3001/api/v1/auth/login
//TODO http://localhost:3001/api/v1/auth/register
router.post("/register", registerUser )
router.post("/login", loginUser )
router.put("/:id", updateLogin )
router.delete("/:id", deleteLogin )

module.exports = router;