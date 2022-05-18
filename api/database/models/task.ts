import { DataTypes, Model } from 'sequelize';
import db from '.';
import User from './user';

class Task extends Model {
  public id!: number;
  public name!: string;
  public status!: string;
  public userId!: number;
}

Task.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  userId: {
    type: DataTypes.NUMBER,
    allowNull: false,
  },
}, {
  sequelize: db,
  modelName: 'tasks',
});

Task.belongsTo(User, { foreignKey: 'userId' as 'id' });

export default Task;