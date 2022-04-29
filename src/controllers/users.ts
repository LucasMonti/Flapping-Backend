import { Request, Response } from "express";

import { IUserUpdate } from "../interfaces/user";

import userStore from "../store/users";
import response from "../helpers/response";

class UserController {
  public async oneUser(req: Request, res: Response): Promise<void> {
    try {
      const idu = parseInt(req.params.id);

      const user = await userStore.findOneUser(idu);

      if (user !== undefined) {
        return response.success(res, "Usuario encontrado correctamente", 200, {
          user,
        });
      }

      return response.error(res, "Usuario no encontrado", 404);
    } catch (error: any) {
      return response.error(res, error.message, 500);
    }
  }

  public async updateUser(req: Request, res: Response): Promise<void> {
    try {
      const idu = parseInt(req.params.id);

      const userData: IUserUpdate = req.body;

      const userUpdate = await userStore.updateOneUser(idu, userData);

      if (userUpdate !== undefined) {
        return response.success(res, "Usuario actualizado correctamente", 200, {
          userUpdate,
        });
      }

      return response.error(res, "Usuario a actualizar no encontrado", 404);
    } catch (error: any) {
      return response.error(res, error.message, 500);
    }
  }

  public async removeUser(req: Request, res: Response): Promise<void> {
    try {
      const idu = parseInt(req.params.id);

      const userDelete = await userStore.removeOneUser(idu);

      if (userDelete !== undefined) {
        return response.success(
          res,
          "Usuario eliminado correctamente",
          200,
          null
        );
      }

      return response.error(res, "Usuario a eliminar no encontrado", 404);
    } catch (error: any) {
      return response.error(res, error.message, 500);
    }
  }
}

export default new UserController();
