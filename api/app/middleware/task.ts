import { RequestHandler } from 'express';
import schema from '../schema/task';

const validateCreate: RequestHandler = async (req, res, next) => {
  const { name, status } = req.body;

  const task = await schema.create.validateAsync({ name, status });
  res.locals.task = task;

  return next();
};

export default {
  validateCreate,
};