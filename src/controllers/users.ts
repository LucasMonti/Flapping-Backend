import { Request, Response } from "express";

import userStore from "../store/users";
import response from "../helpers/response";

class UserController {
  public async oneUser(req: Request, res: Response): Promise<void> {
    try {
      //Método para encontrar un usuario
    } catch (error) {
      return response.error(res, "Internal server error", 500);
    }
  }

  public async updateUser(req: Request, res: Response): Promise<void> {
    try {
      //Método para actualizar un usuario
    } catch (error) {
      return response.error(res, "Internal server error", 500);
    }
  }

  public async removeUser(req: Request, res: Response): Promise<void> {
    try {
      //Método para eliminar un usuario
    } catch (error) {
      return response.error(res, "Internal server error", 500);
    }
  }
}

export default new UserController();
