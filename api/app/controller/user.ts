import { Request, Response } from 'express';
import userService from '../service/user';

const findOne = async (_req: Request, res: Response) => {
  const { filter } = res.locals;
  const user = await userService.findOne(filter);
  
  return res.status(200).json(user);
};

export default {
  findOne,
};