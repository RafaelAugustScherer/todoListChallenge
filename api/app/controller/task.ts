import { RequestHandler } from 'express';
import taskService from '../service/task';

const findAll: RequestHandler = async (req, res) => {
 const { user } = res.locals;
 const tasks = await taskService.findAll(user);

 return res.status(200).json(tasks);
};

export default {
  findAll,
};