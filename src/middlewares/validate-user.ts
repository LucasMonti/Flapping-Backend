import Joi from "joi";

import { NextFunction, Request, Response } from "express";

import response from "../helpers/response";

class ValidateUser {
  public async login(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const schema = Joi.object({
      email: Joi.string().required(),
      password: Joi.string().required(),
    });
    try {
      await schema.validateAsync(req.body);
      return next();
    } catch (error: any) {
      return response.error(res, error.details[0].message, 500);
    }
  }

  public async register(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const schema = Joi.object({
      name: Joi.string().required(),
      lastname: Joi.string().required(),
      email: Joi.string().required(),
      password: Joi.string().required(),
      wallet_address: Joi.string().required(),
    });
    try {
      await schema.validateAsync(req.body);
      return next();
    } catch (error: any) {
      return response.error(res, error.details[0].message, 500);
    }
  }

  public async updateUser(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const schema = Joi.object({
      name: Joi.string(),
      lastname: Joi.string(),
      password: Joi.string(),
      wallet_address: Joi.string(),
    });
    try {
      await schema.validateAsync(req.body);
      return next();
    } catch (error: any) {
      return response.error(res, error.details[0].message, 500);
    }
  }
}

export default new ValidateUser();
