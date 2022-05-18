import User from '../../database/models/user';
import { IUser, IUserQuery } from '../interface/user';
import { ERRORS } from '../utils/error';

const findOne = async (filter: IUserQuery): Promise<IUser> => {
  const query = JSON.parse(JSON.stringify(filter));
  const user = await User.findOne({ where: { ...query } });

  if (!user) throw ERRORS.USER.NOT_FOUND;

  const userPublic = user.get();
  const { password, ...userWithoutPassword } = userPublic;
  return userWithoutPassword;
};

export default {
  findOne,
};