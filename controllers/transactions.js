const { transactionsModel } = require('../models');
const { handleHttpError } = require('../utils/handleError');
/**
 * Get list of the database
 * @param {*} req
 * @param {*} res
 */

const getTransactions = async (req, res) => {
    try{
        const data = await transactionsModel.findAll();
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
const getTransaction = async (req, res) => {
    try{
        const id = req.params.id;
        const data = await transactionsModel.findById(id);
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

const createTransactions = async (req, res) => {
    try{
        const body = req.body;
        const data = await transactionsModel.create(body);
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
const updateTransactions = async (req, res) => {
    try{
        const body = req.body;
        const id = req.params.id;
        const data = await transactionsModel.update(body,{where:{ id : id}})
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
const deleteTransactions = async (req, res) => {
    try{
        const id = req.params.id;
        const data = await transactionsModel.destroy({where:{ id : id}})
        res.send({data})
    }catch(e){
        handleHttpError(res,'ERROR_DELETE_ITEMS',e)

    }
};

module.exports = { getTransactions,getTransaction, createTransactions ,updateTransactions, deleteTransactions };