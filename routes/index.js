const express = require("express");
const fs = require("fs");
const router = express.Router();

const PATH_ROUTES = __dirname;

const removeExtension = (fileName) => {
    //TODO persons.js [persons, js]
    return fileName.split('.').shift();
}

const a = fs.readdirSync(PATH_ROUTES).filter((file) => {
    const name =  removeExtension(file);
    if(name !== 'index'){
        router.use(`/${name}`,require(`./${file}`)) //TODO https://localhost:3001/api/v1/persons
    }
});

module.exports = router;

