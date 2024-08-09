import express from 'express';
import UserController from '../controllers/userController.js';

const userRouter = express.Router();
const userController = new UserController();

userRouter.post('/',userController.registerUser);

userRouter.get('/:id',userController.getUserById);

userRouter.put('/:id', userController.updateUser);

userRouter.delete('/:id', userController.disableUser);

userRouter.get('/', userController.getAllUsers);

export default userRouter;