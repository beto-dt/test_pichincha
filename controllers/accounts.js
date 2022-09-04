const { accountsModel } = require('../models');
const { handleHttpError } = require('../utils/handleError');
const { matchedData } = require('express-validator');
/**
 * Get list of the database
 * @param {*} req
 * @param {*} res
 */

const getAccounts = async (req, res) => {
    try{
        const data = await accountsModel.findAll();
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
const getAccount = async (req, res) => {
    try{
        const id = req.params.id;
        const data = await accountsModel.findById(id);
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

const createAccount = async (req, res) => {
    try{
        const body = req.body;
        const data = await accountsModel.create(body);
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
const updateAccount = async (req, res) => {
    try{
        const body = req.body;
        const id = req.params.id;
        const data = await accountsModel.update(body,{where:{ id : id}})
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
const deleteAccount = async (req, res) => {
    try{
        const id = req.params.id;
        const data = await accountsModel.destroy({where:{ id : id}})
        res.send({data})
    }catch(e){
        handleHttpError(res,'ERROR_DELETE_ITEMS',e)

    }
};

module.exports = { getAccounts,getAccount, createAccount ,updateAccount,deleteAccount };