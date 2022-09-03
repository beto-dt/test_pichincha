const express = require("express");
const { validatorCreateItem } = require("../validators/persons");
const { getItems, getItem, createItem } = require("../controllers/persons");
const customHeader = require("../middleware/CustomHeader");
const router = express.Router();

/**
 * List to Items
 */
router.get("/",getItems);

/**
 * Get detail of item
 */

router.get("/:id", getItem);


/**
 * Create a item
 */

router.post("/",validatorCreateItem, createItem);


module.exports = router;