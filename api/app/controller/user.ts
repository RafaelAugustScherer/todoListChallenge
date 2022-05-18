import { RequestHandler} from 'express';
import userService from '../service/user';

const login: RequestHandler = async (_req, res) => {
  const { user, token } = res.locals;
  await userService.login(user);

  return res.status(200).json({ token });
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