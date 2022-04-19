import Joi from "joi";

import { NextFunction, Request, Response } from "express";

import response from "../helpers/response";

class ValidateChallenge {
  public async addChallenge(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const schema = Joi.object({
      title: Joi.string().required(),
      description: Joi.string().required(),
      target_amount: Joi.number().required(),
      status_id: Joi.number(),
      benefactor: Joi.string().required(),
      referente_id: Joi.number().required(),
    });
    try {
      await schema.validateAsync(req.body);
      return next();
    } catch (error: any) {
      return response.error(res, error.details[0].message, 500);
    }
  }
}

export default new ValidateChallenge();
