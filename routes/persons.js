const express = require("express");
const { getItems, getItem, createItem } = require("../controllers/persons");
const router = express.Router();

//TODO https://localhost/persons GET, POST, DELETE, PUT

router.get("/",getItems);

router.post("/",createItem);


module.exports = router;