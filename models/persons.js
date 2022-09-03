const { sequelize } = require("../config/mysql");
const { DataTypes } = require('sequelize');

const Person = sequelize.define(
    "persons",
    {
        name:{
            type: DataTypes.STRING,
            allowNull:false
        },
        gender:{
            type: DataTypes.STRING,
        },
        age:{
            type: DataTypes.NUMBER,
        },
        ci:{
            type: DataTypes.STRING,
        },
        address:{
            type: DataTypes.STRING,
        },
        phone:{
            type: DataTypes.STRING,
        }
    },
    {
        timestamps: true,
    }
);

Person.find = Person.findAll;
Person.findById = Person.findByPk;

module.exports = Person;