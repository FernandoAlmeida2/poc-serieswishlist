import Joi from "joi";

export const serieSchema = Joi.object({
  name: Joi.string().required(),
  platform: Joi.string().required(),
  genre: Joi.string().required(),
  description: Joi.string().required(),
  status: Joi.string().valid("ongoing", "finished").required(),
  rate: Joi.number().min(1).max(5).required(),
});
