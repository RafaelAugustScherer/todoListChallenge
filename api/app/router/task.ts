import { Router } from 'express';

import taskController from '../controller/task';
import taskMiddleware from '../middleware/task';
import authMiddleware from '../middleware/auth';

const taskRouter = Router();

taskRouter.route('/task')
  .get(
    authMiddleware.validateToken,
    taskController.findAll,
  )
  .post(
    authMiddleware.validateToken,
    taskMiddleware.validateCreate,
    taskController.create,
  );

taskRouter.route('/task/:id')
  .delete(
    authMiddleware.validateToken,
    taskMiddleware.validateRemove,
    taskController.remove,
  );

export default taskRouter;