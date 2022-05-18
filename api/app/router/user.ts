import { Router } from 'express';

import userController from '../controller/user';
import userMiddleware from '../middleware/user';

const userRouter = Router();

userRouter.route('/user')
  .get(
    userMiddleware.validateFilter,
    userController.findOne,
  );

export default userRouter;