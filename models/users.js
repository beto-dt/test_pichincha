const { sequelize } = require("../config/mysql");
const { DataTypes } = require('sequelize');

const User = sequelize.define(
    "users",
    {
        person_id:{
            type: DataTypes.INTEGER,
        },
        email:{
            type: DataTypes.STRING,
        },
        password:{
            type: DataTypes.STRING,
        },
        status:{
            type: DataTypes.BOOLEAN,
        }
    },
    {
        timestamps: true,
    }
);

User.find = User.findAll;
User.findById = User.findByPk;

module.exports = User;