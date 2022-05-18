import { Router } from 'express';

import taskController from '../controller/task';
import authMiddleware from '../middleware/auth';

const taskRouter = Router();

taskRouter.route('/task')
  .get(
    authMiddleware.validateToken,
    taskController.findAll,
  );

export default taskRouter;