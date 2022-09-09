const { transactionsModel, accountsModel } = require('../models');
const { handleHttpError } = require('../utils/handleError');
const { QueryTypes } = require('sequelize');

/**
 * Get list of the database
 * @param {*} req
 * @param {*} res
 */

const getTransactions = async (req, res) => {
    try{
        const id = req.user.id;
        const data = await transactionsModel.sequelize.query(`SELECT transactions.* from transactions INNER JOIN accounts ON transactions.account_id = accounts.id INNER JOIN users ON accounts.user_id = users.id INNER JOIN persons ON users.person_id = persons.id WHERE users.id = ${id}`,{ type: QueryTypes.SELECT });
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
const getTransaction = async (req, res) => {
    try{
        const id = req.user.id;
        const data = await transactionsModel.sequelize.query(`SELECT * FROM transactions INNER JOIN accounts on transactions.account_id = accounts.id WHERE accounts.user_id = ${id}`, { type: QueryTypes.SELECT });
        res.send({ data });
    }catch(e){
        handleHttpError(res,'ERROR_GET_ITEM');
    }
};

const createTransactionWithdrawalOrDeposit = async (req, res) => {
    const id = req.user.id;
    const transaction_type = req.body.transaction_type;
    const value = req.body.value;
    const account_id = await accountsModel.sequelize.query(`SELECT accounts.id FROM accounts WHERE accounts.user_id = ${id}`,{ type: QueryTypes.SELECT });
    const initial_balance  = await transactionsModel.sequelize.query(`SELECT accounts.initial_balance FROM transactions INNER JOIN accounts on transactions.account_id = accounts.id WHERE accounts.user_id = ${id}`, { type: QueryTypes.SELECT });
    if(transaction_type == 'Retiro'){
        if(initial_balance[0].initial_balance > value ) {
            await transactionsModel.sequelize.query(`INSERT INTO transactions (transaction_type, value, available_balance, account_id) SELECT '${transaction_type}',${value}, ( accounts.initial_balance - ${value}) , ${account_id[0].id} FROM accounts WHERE accounts.id =${account_id[0].id}`, { type: QueryTypes.INSERT });
            handleHttpError(res,"WITHDRAWA_SUCCESSES",200);
            await accountsModel.sequelize.query(`UPDATE accounts SET accounts.initial_balance = ${initial_balance[0].initial_balance} - ${value} WHERE accounts.id = ${account_id[0].id}`, { type: QueryTypes.UPDATE });
        } else if(initial_balance[0].initial_balance < value ) {
            handleHttpError(res,"UNAVAILABLE_BALANCE");
        }
    }else if(transaction_type == 'Deposito'){
        await transactionsModel.sequelize.query(`INSERT INTO transactions (transaction_type, value, available_balance, account_id) SELECT '${transaction_type}',${value}, ( accounts.initial_balance + ${value}) , ${account_id[0].id} FROM accounts WHERE accounts.id = ${account_id[0].id}`,{ type: QueryTypes.INSERT });
        handleHttpError(res,"DEPOSIT_SUCCESSES",200);
        await accountsModel.sequelize.query(`UPDATE accounts SET accounts.initial_balance = ${initial_balance[0].initial_balance} + ${value} WHERE accounts.id = ${account_id[0].id}`, { type: QueryTypes.UPDATE });
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
        handleHttpError(res,'ERROR_CREATE_ITEMS')
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
        handleHttpError(res,'ERROR_UPDATE_ITEMS')
    }
};

/**
 * Delete a register
 * @param {*} req
 * @param {*} res
 */
const deleteTransactions = async (req, res) => {
    try{
        const body = req.body;
        const id = req.params.id;
        const data = await transactionsModel.update(body, {where:{ id : id}})
        res.send({data})
    }catch(e){
        handleHttpError(res,'ERROR_DELETE_ITEMS')

    }
};

module.exports = { getTransactions,getTransaction, createTransactions ,updateTransactions, deleteTransactions,createTransactionWithdrawalOrDeposit };