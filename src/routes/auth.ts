import { Router } from "express";
import authController from "../controllers/auth";

class AuthRoutes {
  router: Router = Router();

  constructor() {
    this.config();
  }

  config() {
    this.router.post("/login", authController.login);
    this.router.post("/register", authController.register);
  }
}

export default new AuthRoutes().router;
