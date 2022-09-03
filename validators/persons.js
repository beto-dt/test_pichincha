const { check } = require('express-validator');
const validateResults = require('../utils/handleValidator');

const validatorCreateItem = [
    check("name").exists().notEmpty(),
    check("gender").exists().notEmpty(),
    check("age").exists().notEmpty(),
    check("ci").exists().notEmpty(),
    check("address").exists().notEmpty(),
    check("phone").exists().notEmpty(),
    (req, res, next) => {
        return validateResults(req, res, next)
    }
];


module.exports = { validatorCreateItem }