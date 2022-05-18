import Joi from 'joi';

const filter = Joi.object({
  id: Joi.number().min(1),
  username: Joi.string(),
}).or('id', 'username');

export default {
  filter,
};