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
        handleHttpError(res,'ERROR_GET_ITEMS',e)
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
        handleHttpError(res,"ERROR_GET_ITEM",e)
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
        handleHttpError(res,'ERROR_CREATE_ITEMS',e)
    }
};

/**
 * Update a register
 * @param {*} req 
 * @param {*} res 
 */
const updateItem = async (req, res) => {
    try{
        const body = req.body;
        const id = req.params.id;
        const data = await personsModel.update(body,{where:{ id : id}})
        res.send({data})
    }catch(e){
        handleHttpError(res,'ERROR_UPDATE_ITEMS',e)
    }
};

/**
 * Delete a register
 * @param {*} req 
 * @param {*} res 
 */
const deleteItem = async (req, res) => {
    try{
        const id = req.params.id;
        const data = await personsModel.destroy({where:{ id : id}})
        res.send({data})
    }catch(e){
        handleHttpError(res,'ERROR_DELETE_ITEMS',e)

    }
};


module.exports = { getItems,getItem,createItem,updateItem,deleteItem };