const { sequelize } = require("../config/mysql");
const { DataTypes } = require('sequelize');

const Account = sequelize.define(
    "accounts",
    {
        n_account:{
            type: DataTypes.INTEGER,
        },
        type:{
            type: DataTypes.STRING,
        },
        initial_balance:{
            type: DataTypes.STRING,
        },
        status:{
            type: DataTypes.BOOLEAN,
        },
        user_id:{
            type: DataTypes.INTEGER,
        }
    },
    {
        timestamps: true,
    }
);

Account.find = Account.findAll;
Account.findById = Account.findByPk;

module.exports = Account;