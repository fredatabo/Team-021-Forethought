const Joi = require('@hapi/joi');

// Contains all request validation

// Mental Health test
const vTest = Joi.object({
  userId: Joi.string().alphanum().required().messages({ 'any.required': 'The user ID is required to take a test' }),
  ques_1: Joi.number().min(0).max(4).required(),
  ques_2: Joi.number().min(0).max(4).required(),
  ques_3: Joi.number().min(0).max(4).required(),
  ques_4: Joi.number().min(0).max(4).required(),
  ques_5: Joi.number().min(0).max(4).required(),
  ques_6: Joi.number().min(0).max(4).required()
});

const vUser = Joi.object({
  firstname: Joi.string().max(50).required(),
  lastname: Joi.string().max(50).required(),
  email: Joi.string().email().lowercase().required(),
  password: Joi.string().min(6).required(),
  phone: Joi.string().min(11).max(15).required(),
  birth_date: Joi.date()
});

const vConsultant = Joi.object({
  firstname: Joi.string().max(50).required(),
  lastname: Joi.string().max(50).required(),
  email: Joi.string().email().required().lowercase(),
  location: Joi.string().required(),
  password: Joi.string().min(6).required().strict(),
  phone: Joi.string().min(11).max(15).required(),
  certification: Joi.array(),
  workplace: Joi.string()
});

const vLogin = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required().strict()
});

module.exports = {
  vTest,
  vUser,
  vConsultant,
  vLogin
};
