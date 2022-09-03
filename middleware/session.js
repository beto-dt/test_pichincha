const { handleHttpError } = require('../utils/handleError');
const { verifyToken } = require('../utils/handleJwt');

const authMiddleware = async (res, req, next) => {
    try{
        if(!req.headers.authorization){
            handleHttpError(res, "NEED_SESSION", 401);
            return
        }

        const token = req.headers.authorization.split(' ').pop();

        const dataToken = await verifyToken(token);

        if(!dataToken.id){
            handleHttpError(res, "NOT_PAYLOAD_DATA", 401);
            return
        }

        next();

    }catch(e){
        handleHttpError(res, "NOT_SESSION", 401);
    }
}

module.exports = { authMiddleware }