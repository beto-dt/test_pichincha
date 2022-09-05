const {  transactionsModel, accountsModel } = require('../models');
const { handleHttpError } = require('../utils/handleError');
const { QueryTypes } = require('sequelize');

/**
 * Get list of the Reports
 * @param {*} req 
 * @param {*} res 
 */

const getReportsPorUserAndDate = async (req, res) => {
    const id = req.user.id;
    const date1 = req.body.date1;
    const date2 = req.body.date2;
    const account_id = await accountsModel.sequelize.query(`SELECT accounts.id FROM accounts WHERE accounts.user_id = ${id}`,{ type: QueryTypes.SELECT });
    try{
        const reportPorDate = await transactionsModel.sequelize.query(`SELECT transactions.date , persons.name, accounts.n_account, accounts.type, CASE WHEN 'Deposito' = transactions.transaction_type THEN (transactions.available_balance - transactions.value) WHEN 'Retiro' = transactions.transaction_type THEN (transactions.available_balance + transactions.value) END as 'Saldo Inical' , accounts.status, transactions.value, transactions.available_balance FROM transactions inner join accounts on transactions.account_id = accounts.id inner join users on accounts.user_id = users.id inner join persons on users.person_id = persons.id WHERE transactions.date BETWEEN '${date1}' AND '${date2}' AND transactions.account_id = ${account_id[0].id}`,{ type: QueryTypes.SELECT });
        res.send({reportPorDate})
    }catch(e){
        handleHttpError(res,"ERROR_REPORT");
    }
};

module.exports = { getReportsPorUserAndDate };