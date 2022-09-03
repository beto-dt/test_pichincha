const { check } = require('express-validator');
const validateResults = require('../utils/handleValidator');

const validatorRegisterItem = [
    check("id").exists().notEmpty(),
    check("person_id").exists().notEmpty(),
    check("email").exists().notEmpty().isEmail(),
    check("password").exists().notEmpty(),
    check("status").exists().notEmpty().isBoolean(),
    (req, res, next) => {
        return validateResults(req, res, next);
    }
];

const validatorLogin = [
    check("email").exists().notEmpty().isEmail(),
    check("password").exists().notEmpty().isLength({ min: 3, max: 15}),
    (req, res, next) => {
        return validateResults(req, res, next);
    }
];


module.exports = { validatorRegisterItem ,validatorLogin}