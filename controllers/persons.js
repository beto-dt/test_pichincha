const { personsModel } = require('../models');
const { handleHttpError } = require('../utils/handleError');
const { matchedData } = require('express-validator');

/**
 * Get list of the database
 * @param {*} req 
 * @param {*} res 
 */

const getItems = async (req, res) => {
    try{
        const data = await personsModel.findAll();
        res.send({data})
    }catch(e){
        handleHttpError(res,'ERROR_GET_ITEMS')
    }
};

/**
 * Get a Detail
 * @param {*} req 
 * @param {*} res 
 */
const getItem = async (req, res) => {

    try{
        const id = req.params.id;
        const data = await personsModel.findById(id);
        res.send({ data });
    }catch(e){
        handleHttpError(res,"ERROR_GET_ITEM")
    }
};

/**
 * Insert a register
 * @param {*} req 
 * @param {*} res 
 */

const createItem = async (req, res) => {
    try{
        const body = matchedData(req);
        const data = await personsModel.create(body);
        res.send({data})
    }catch(e){
        handleHttpError(res,'ERROR_CREATE_ITEMS')
    }
};

/**
 * Update a register
 * @param {*} req 
 * @param {*} res 
 */
const updateItem = async (req, res) => {};

/**
 * Delete a register
 * @param {*} req 
 * @param {*} res 
 */
const deleteItem = async (req, res) => {};


module.exports = { getItems,getItem,createItem,updateItem,deleteItem };