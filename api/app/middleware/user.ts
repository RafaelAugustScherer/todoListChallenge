import { RequestHandler } from 'express';
import schema from '../schema/user';

const validateLogin: RequestHandler = async (req, res, next) => {
  const { username, password } = req.body;

  const user = await schema.login.validateAsync({ username, password });
  res.locals.user = user;

  return next();
};

const validateFilter: RequestHandler = async (req, res, next) => {
  const { id, username } = req.body;

  const filter = await schema.filter.validateAsync({ id, username });

  res.locals.filter = filter;

  return next();
};

export default {
  validateLogin,
  validateFilter,
};