import User from '../../database/models/user';
import { IUser, IUserPublic, IUserQuery } from '../interface/user';
import { ERRORS } from '../utils/error';
import { encryptPassword } from '../utils/user';

const removeUndefinedFromObject = (object: any) => JSON.parse(JSON.stringify(object));

const getPublicUser = (user: User): IUserPublic => {
  const { password, ...publicUser } = user.get();
  return publicUser;
};

const login = async (user: IUser): Promise<IUserPublic> => {
  const passwordHash = encryptPassword(user.password);
  const query = { ...user, password: passwordHash };

  const response = await User.findOne({ where: { ...query } });
  if (!response) throw ERRORS.USER.NOT_FOUND;

  return getPublicUser(response);
};

const findOne = async (filter: IUserQuery): Promise<IUserPublic> => {
  const query = removeUndefinedFromObject(filter);

  const response = await User.findOne({ where: { ...query } });
  if (!response) throw ERRORS.USER.NOT_FOUND;

  return getPublicUser(response);
};

const create = async (user: IUser): Promise<IUserPublic> => {
  const userExists = await User.findOne({ where: { username: user.username } });
  if (userExists) throw ERRORS.USER.ALREADY_TAKEN;

  const passwordHash = encryptPassword(user.password);
  const response = await User.create({ ...user, password: passwordHash });

  return getPublicUser(response);
};

export default {
  login,
  findOne,
  create,
};