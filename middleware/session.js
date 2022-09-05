const { usersModel } = require('../models');
const { handleHttpError } = require('../utils/handleError');
const { verifyToken } = require('../utils/handleJwt');

const authMiddleware = async (req, res, next) => {
    try{
        if(!req.headers.authorization){
            handleHttpError(res, "NEED_SESSION", 401);
        }

        const token = req.headers.authorization.split(' ').pop();

        const dataToken = await verifyToken(token);

        if(!dataToken){
            handleHttpError(res, "NOT_PAYLOAD_DATA", 401);
        }


        const user = await usersModel.findByPk(dataToken.person_id)
        req.user = user

        next()


    }catch(e){
        handleHttpError(res, "NOT_SESSION", 401);
    }
}

module.exports = { authMiddleware }