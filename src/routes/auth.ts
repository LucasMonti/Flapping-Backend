import { Router } from "express";

import authController from "../controllers/auth";
import validateUser from "../middlewares/validate-user";

class AuthRoutes {
  router: Router = Router();

  constructor() {
    this.config();
  }

  config() {
    this.router.post("/login", validateUser.login, authController.login);
    this.router.post(
      "/register",
      validateUser.register,
      authController.register
    );
  }
}

export default new AuthRoutes().router;
