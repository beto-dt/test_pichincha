const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET;
/**
 * Debes Pasar el objeto del usuario
 * @param {*} user 
 */

const tokenSign = async (user) => {
    const sign = jwt.sign(
        {
            id: user.id,
            person_id: user.person_id,
            email: user.email
        },
        JWT_SECRET,
        {
            expiresIn:"2h",
        }
    )

    return sign;
}

/**
 * Debes pasar el token de session del JWT
 * @param {*} tokenJwt 
 */

const verifyToken = async (tokenJwt) => {
    try{
        return jwt.verify(tokenJwt,JWT_SECRET);
    }catch(e){
        return null;
    }
}

module.exports = { tokenSign, verifyToken }