import { Router } from 'express';

import userController from '../controller/user';
import userMiddleware from '../middleware/user';
import authMiddleware from '../middleware/auth';

const userRouter = Router();

userRouter.route('/login')
  .get(
    userMiddleware.validateLogin,
    authMiddleware.generateToken,
    userController.login,
  );

userRouter.route('/user')
  .get(
    userMiddleware.validateFilter,
    authMiddleware.validateToken,
    userController.findOne,
  )
  .post(
    userMiddleware.validateCreate,
    userController.create,
  );


export default userRouter;