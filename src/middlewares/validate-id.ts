import Joi from "joi";

import { NextFunction, Request, Response } from "express";

import response from "../helpers/response";

class ValidateId {
  public async typeId(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const schema = Joi.object({
      id: Joi.number().required(),
    });
    try {
      await schema.validateAsync(req.params);
      return next();
    } catch (error: any) {
      return response.error(res, error.details[0].message, 500);
    }
  }
}

export default new ValidateId();
