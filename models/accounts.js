const { sequelize } = require("../config/mysql");
const { DataTypes } = require('sequelize');

const Account = sequelize.define(
    "accounts",
    {
        name:{
            type: DataTypes.INTEGER,
        },
        lastname:{
            type: DataTypes.STRING,
        },
        email:{
            type: DataTypes.STRING,
        },
        password:{
            type: DataTypes.BOOLEAN,
        },
        phone:{
            type: DataTypes.INTEGER,
        },
        ci:{
            type: DataTypes.INTEGER,
        },
        status:{
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