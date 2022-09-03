const express = require("express");
const { validatorCreateItem } = require("../validators/persons");
const { getItems, getItem, createItem } = require("../controllers/persons");
const customHeader = require("../middleware/CustomHeader");
const router = express.Router();

//TODO https://localhost/persons GET, POST, DELETE, PUT

router.get("/",getItems);

router.post("/",validatorCreateItem, customHeader, createItem);


module.exports = router;