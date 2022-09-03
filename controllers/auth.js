const { usersModel } = require('../models');
const { handleHttpError } = require('../utils/handleError');
const { encrypt, compare } = require('../utils/handlePassword');
const { tokenSign, verifyToken } = require('../utils/handleJwt');

/**
 * Register Users
 * @param {*} req
 * @param {*} res
 */

const registerUser = async (req, res) => {
    try{
        const password = await encrypt(req.body.password)
        const body = {...req.body , password};
        const dataUser = await usersModel.create(body);
        dataUser.set("password", undefined, { strict: false});
        const data = {
            token: await tokenSign(dataUser),
            user: dataUser,
        }
        res.send({data});
    }catch(e){
        handleHttpError(res,'ERROR_REGISTER_USER',e)
    }
};
/**
 * Login User
 * @param {*} req
 * @param {*} res
 */
const loginUser = async(req, res) => {
    try{
        const user = await usersModel.findOne({where:{email:req.body.email}});
        if(!user){
            handleHttpError(res,'USER_NOT_EXISTS',e)
            return
        }

        const hashPassword =  user.password;
        console.log(hashPassword);
        const check = await compare(req.body.password, hashPassword)
        if(!check){
            handleHttpError(res,'PASSWORD_INVALID',e)
        }
       
        user.set('password', undefined, {strict:false})
        const data = {
            token: await tokenSign(user),
            user
        }

        res.send({data})
    }catch(e){
        handleHttpError(res,'ERROR_LOGIN_USER',e)
    }
}

module.exports = { registerUser, loginUser }