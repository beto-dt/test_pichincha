const { accountsModel } = require('../models');
const { handleHttpError } = require('../utils/handleError');

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
        handleHttpError(res,'ERROR_GET_ITEMS')
    }
};

/**
 * Get a Detail
 * @param {*} req
 * @param {*} res
 */
const getAccount = async (req, res) => {
    try{
        const id = req.user.id;
        const data = await accountsModel.find({where:{user_id:id}});
        if(data == null ){
            handleHttpError(res,"ERROR_NO_EXIST_ACCOUNT");
        }
        else {
        res.send({ data });
        }
    }catch(e){
        handleHttpError(res,"ERROR_GET_ITEM")
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
        handleHttpError(res,'ERROR_CREATE_ITEMS')
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
        handleHttpError(res,'ERROR_UPDATE_ITEMS')
    }
};

/**
 * Delete a register
 * @param {*} req
 * @param {*} res
 */
const deleteAccount = async (req, res) => {
    try{
        const body = req.body;
        const id = req.params.id;
        const data = await accountsModel.update(body,{where:{ id : id}})
        res.send({data})
    }catch(e){
        handleHttpError(res,'ERROR_DELETE_ITEMS')
    }
};

module.exports = { getAccounts,getAccount, createAccount ,updateAccount,deleteAccount };