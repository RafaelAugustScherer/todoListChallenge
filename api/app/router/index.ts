import { Router } from 'express';
import 'express-async-errors';

import userRouter from './user';
import taskRouter from './task';
import errorMiddleware from '../middleware/error';

const appRouter = Router();

appRouter.use(userRouter);
appRouter.use(taskRouter);
appRouter.use(errorMiddleware);

export default appRouter;