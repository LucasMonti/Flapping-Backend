import { Router } from "express";
import errorController from "../controllers/error";

class UserRoutes {
  router: Router = Router();

  constructor() {
    this.config();
  }

  config() {
    this.router.use(errorController.responseError);
  }
}

export default new UserRoutes().router;
