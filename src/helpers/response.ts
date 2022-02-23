import { Response } from "express";

class TypeResponse {
  public success(
    res: Response,
    message: string,
    statusCode: number,
    data: any
  ) {
    res.status(statusCode).json({
      code: "OK",
      message,
      success: true,
      data,
    });
  }

  public error(res: Response, message: string, statusCode: number) {
    res.status(statusCode).json({
      code: "ERROR",
      message,
      success: false,
      data: null,
    });
  }
}

export default new TypeResponse();
