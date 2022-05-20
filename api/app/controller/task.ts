import { RequestHandler } from 'express';
import taskService from '../service/task';

const findAll: RequestHandler = async (_req, res) => {
 const { user } = res.locals;
 const tasks = await taskService.findAll(user);

 return res.status(200).json(tasks);
};

const create: RequestHandler = async (_req, res) => {
  const { task, user } = res.locals;
  const publicTask = await taskService.create(task, user);

  return res.status(201).json(publicTask);
};

const remove: RequestHandler = async (_req, res) => {
  const { task, user } = res.locals;
  await taskService.remove(task.id, user);

  return res.status(204).end();
};

export default {
  findAll,
  create,
  remove,
};