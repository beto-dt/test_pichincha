const { sequelize } = require("../config/mysql");
const { DataTypes } = require('sequelize');

const Transaction = sequelize.define(
    "transactions",
    {
        date:{
            type: DataTypes.TIME,
        },
        transaction_type:{
            type: DataTypes.STRING,
        },
        value:{
            type: DataTypes.STRING,
        },
        available_balance:{
            type: DataTypes.STRING,
        },
        account_id:{
            type: DataTypes.INTEGER,
        }
    },
    {
        timestamps: true,
    }
)

module.exports = Transaction;