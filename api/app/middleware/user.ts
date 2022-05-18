import { RequestHandler } from 'express';
import schema from '../schema/user';

const validateFilter: RequestHandler = async (req, res, next) => {
  const { id, username } = req.body;

  const filter = await schema.filter.validateAsync({ id, username });

  res.locals.filter = filter;

  return next();
};

export default {
  validateFilter,
};