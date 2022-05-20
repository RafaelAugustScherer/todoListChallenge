import Joi from 'joi';
import { isValidStatus } from '../interface/task';

const create = Joi.object({
  name: Joi.string().required(),
  status: Joi.custom((value) => {
    if (!isValidStatus(value)) {
      throw Error('it must be pending, inProgress or done');
    }
    return value;
  }).required(),
});

const remove = Joi.object({
  id: Joi.number().required(),
});


export default {
  create,
  remove,
};