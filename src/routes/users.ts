import { Router } from "express";
import userController from "../controllers/users";

class UserRoutes {
  router: Router = Router();

  constructor() {
    this.config();
  }

  config() {
    this.router.get("/id", userController.oneUser);
    this.router.put("/id", userController.updateUser);
    this.router.delete("/id", userController.removeUser);
  }
}

export default new UserRoutes().router;
