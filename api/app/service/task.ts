import Task from '../../database/models/task';
import userService from './user';
import { IUser } from '../interface/user';
import { ITask, ITaskPublic } from '../interface/task';
import { ERRORS } from '../utils/error';

const getPublicTask = (task: Task): ITaskPublic => {
  const { userId, ...publicTask } = task.get();
  return publicTask;
};

const getUserId = async (user: IUser): Promise<number> => {
  const { id } = await userService.findOne({ username: user.username });
  return id;
};

const findAll = async (user: IUser): Promise<ITaskPublic[]> => {
  const userId = await getUserId(user);

  const response = await Task.findAll({ where: { userId } });
  const tasks = response.map((task) => getPublicTask(task));

  return tasks;
};

const create = async (task: ITask, user: IUser): Promise<ITaskPublic> => {
  const { name, status = 'pending' } = task;
  const userId = await getUserId(user);
  const response = await Task.create({ name, status, userId });

  return getPublicTask(response);
};

const remove = async (taskId: number, user: IUser): Promise<void> => {
  const tasks = await findAll(user);

  if (!tasks.find(({ id }) => id === taskId)) throw ERRORS.TASK.NOT_FOUND;
  
  await Task.destroy({ where: { id: taskId } });
};

export default {
  findAll,
  create,
  remove,
};