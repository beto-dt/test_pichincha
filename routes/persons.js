const express = require("express");
const { validatorCreateItem } = require("../validators/persons");
const { getItems, getItem, createItem, updateItem, deleteItem } = require("../controllers/persons");
const router = express.Router();
const { authMiddleware } = require('../middleware/session')

/**
 * List to Items
 */
router.get("/", authMiddleware, getItems);

/**
 * Get detail of item
 */

router.get("/:id",authMiddleware, getItem);

/**
 * Create a item
 */

router.post("/",validatorCreateItem, authMiddleware, createItem);

/**
 * Update a item
 */

router.put("/:id", authMiddleware,  updateItem);

/**
 * Delete a item
 */

router.delete("/:id", authMiddleware, deleteItem);



module.exports = router;