import { Request, Response } from "express";

import response from "../helpers/response";

class ErrorController {
  public async responseError(req: Request, res: Response): Promise<void> {
    try {
      const message = `Ruta ${
        req.headers.host + req.originalUrl
      } Metodo ${req.method.toUpperCase()}  not found`;
      return response.error(res, message, 404);
    } catch (error) {
      return response.error(res, "Internal server error", 500);
    }
  }
}

export default new ErrorController();
