import Joi from 'joi';

const login = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
});

const filter = Joi.object({
  id: Joi.number().min(1),
  username: Joi.string(),
}).or('id', 'username');

export default {
  login,
  filter,
};