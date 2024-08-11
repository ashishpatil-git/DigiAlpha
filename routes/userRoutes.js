import express from 'express';
import UserController from '../controllers/userController.js';
import {registerUser, updateUser} from '../middlewares/users.middleware.js'

const userRouter = express.Router();
const userController = new UserController();

userRouter.post('/',registerUser,userController.registerUser);

userRouter.get('/:id',userController.getUserById);

userRouter.put('/:id',updateUser, userController.updateUser);

userRouter.delete('/:id', userController.disableUser);

userRouter.get('/', userController.getAllUsers);

export default userRouter;