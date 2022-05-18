import { RequestHandler} from 'express';
import userService from '../service/user';

const login: RequestHandler = async (_req, res) => {
  const { user } = res.locals;
  const publicUser = await userService.login(user);

  return res.status(200).json(publicUser);
};

const findOne: RequestHandler = async (_req, res) => {
  const { filter } = res.locals;
  const user = await userService.findOne(filter);
  
  return res.status(200).json(user);
};

export default {
  login,
  findOne,
};