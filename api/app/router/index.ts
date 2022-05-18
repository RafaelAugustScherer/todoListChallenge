import { Router } from 'express';
import 'express-async-errors';

import userRouter from './user';
import errorMiddleware from '../middleware/error';

const appRouter = Router();

appRouter.use(userRouter);
appRouter.use(errorMiddleware);

export default appRouter;