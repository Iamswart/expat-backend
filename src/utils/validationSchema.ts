import { Joi } from "celebrate";

export const registerAccountSchema = Joi.object({
  firstname: Joi.string().trim().required(),
  lastname: Joi.string().trim().required(),
  email: Joi.string().trim().email().lowercase().required(),
  dateOfBirth: Joi.string().isoDate().required(),
  phone: Joi.string()
    .trim()
    .pattern(/^[0-9]{11,}$/)
    .required()
    .min(7)
    .max(12),
  password: Joi.string()
    .min(8)
    .pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/)
    .message(
      '"password" must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character'
    ),
});

export const loginSchema = Joi.object().keys({
  email: Joi.string().trim().email().lowercase(),
  phone: Joi.string()
    .trim()
    .pattern(/^[0-9]{11,}$/)
    .min(7)
    .max(12),
  password: Joi.string().required(),
});



export const refreshTokenSchema = Joi.object().keys({
  refreshToken: Joi.string().required(),
});