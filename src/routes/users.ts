import { Router } from "express";

import userController from "../controllers/users";
import validateUser from "../middlewares/validate-user";
import validateId from "../middlewares/validate-id";

class UserRoutes {
  router: Router = Router();

  constructor() {
    this.config();
  }

  config() {
    this.router.get("/:id", validateId.typeId, userController.oneUser);
    this.router.put(
      "/:id",
      validateId.typeId,
      validateUser.updateUser,
      userController.updateUser
    );
    this.router.delete("/:id", validateId.typeId, userController.removeUser);
  }
}

export default new UserRoutes().router;
