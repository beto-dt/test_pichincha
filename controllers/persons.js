const { personsModel } = require('../models')

/**
 * Get list of the database
 * @param {*} req 
 * @param {*} res 
 */

const getItems = async (req, res) => {
    const data = await personsModel.findAll();
    res.send({data})
};

/**
 * Get a Detail
 * @param {*} req 
 * @param {*} res 
 */
const getItem = (req, res) => {};

/**
 * Insert a register
 * @param {*} req 
 * @param {*} res 
 */

const createItem = async (req, res) => {
    const { body } = req;
    const data = await personsModel.create(body);
    res.send({data})
};

/**
 * Update a register
 * @param {*} req 
 * @param {*} res 
 */
const updateItem = (req, res) => {};

/**
 * Delete a register
 * @param {*} req 
 * @param {*} res 
 */
const deleteItem = (req, res) => {};


module.exports = { getItems,getItem,createItem,updateItem,deleteItem };