const express = require('express');
const { registerUser, loginUser } = require('../controllers/auth');
const router = express.Router();
const { validatorRegisterItem, validatorLogin} = require('../validators/auth');


//TODO http://localhost:3001/api/v1/auth/login
//TODO http://localhost:3001/api/v1/auth/register
router.post("/register", registerUser )
router.post("/login", loginUser )


module.exports = router;