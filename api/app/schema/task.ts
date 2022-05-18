import Joi from 'joi';
import { isValidStatus } from '../interface/task';

const create = Joi.object({
  name: Joi.string().required(),
  status: Joi.custom(isValidStatus),
});

export default {
  create,
};