import { DataTypes, Model } from 'sequelize';
import db from '.';
import User from './user';

class Task extends Model {}

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
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: Date.now(),
    allowNull: false,
  },
}, {
  sequelize: db,
  modelName: 'tasks',
  timestamps: false,
});

Task.belongsTo(User, { foreignKey: 'userId' as 'id' });

export default Task;