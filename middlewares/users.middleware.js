import { register,update } from "../validations/users.js";
import status from "../constants/statusConstants.js";

function registerUser(req,res,next){
    const requestBody = req.body;
    const { error } = register.validate(requestBody);
    if(error){
        return res.status(status.VALIDATION).send(error.details[0].message);
    }
    next();
}

function updateUser(req,res,next){
    const requestBody = req.body;
    const { error } = update.validate(requestBody);
    if(error){
        return res.status(status.VALIDATION).send(error.details[0].message);
    }
    next();
}

export {
    registerUser,
    updateUser
}