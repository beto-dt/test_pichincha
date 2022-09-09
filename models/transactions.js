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
        },
        status:{
            type: DataTypes.BOOLEAN,
        }
    },
    {
        timestamps: true,
    }
);

Transaction.find = Transaction.findAll;
Transaction.findById = Transaction.findByPk;

module.exports = Transaction;