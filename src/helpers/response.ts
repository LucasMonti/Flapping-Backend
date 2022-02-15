export class Success {
  constructor(
    req: Request,
    res: Response,
    message: String,
    status: Number | 200,
    data: JSON
  ) {}
}

export class Error {
  constructor(
    req: Request,
    res: Response,
    message: String,
    status: Number | 200,
    data: JSON
  ) {}
}
