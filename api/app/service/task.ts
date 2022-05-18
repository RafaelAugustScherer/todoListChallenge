import Task from '../../database/models/task';
import userService from './user';
import { IUser } from '../interface/user';
import { ITaskPublic } from '../interface/task';

const getPublicTask = (task: Task): ITaskPublic => {
  const { id, userId, ...publicTask } = task.get();
  return publicTask;
};

const findAll = async (user: IUser): Promise<ITaskPublic[]> => {
  const { id } = await userService.findOne({ username: user.username });

  const response = await Task.findAll({ where: { userId: id } });
  const tasks = response.map((task) => getPublicTask(task));

  return tasks;
};

export default {
  findAll,
};