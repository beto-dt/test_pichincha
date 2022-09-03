const express = require("express");
const { validatorCreateItem } = require("../validators/persons");
const { getItems, getItem, createItem, updateItem, deleteItem } = require("../controllers/persons");
const customHeader = require("../middleware/CustomHeader");
const router = express.Router();
const { authMiddleware } = require('../middleware/session')

/**
 * List to Items
 */
router.get("/", getItems);

/**
 * Get detail of item
 */

router.get("/:id", getItem);

/**
 * Create a item
 */

router.post("/",validatorCreateItem, createItem);

/**
 * Update a item
 */

router.put("/:id", updateItem);

/**
 * Delete a item
 */

router.delete("/:id", deleteItem);



module.exports = router;