import { RequestHandler} from 'express';
import userService from '../service/user';

const login: RequestHandler = async (_req, res) => {
  const { user, token } = res.locals;
  await userService.login(user);

  return res.status(200).json({ token });
};

const findOne: RequestHandler = async (_req, res) => {
  const { filter, user } = res.locals;
  const publicUser = await userService.findOne(filter|| { username: user.username });
  
  return res.status(200).json(publicUser);
};

const create: RequestHandler = async (_req, res) => {
  const { user } = res.locals;
  const publicUser = await userService.create(user);
  
  return res.status(201).json(publicUser);
};

export default {
  login,
  findOne,
  create,
};