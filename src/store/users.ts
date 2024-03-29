import bcryptjs from "bcryptjs";

import User from "../models/User";
import Rol from "../models/Rol";

import { IUser, IUserUpdate } from "../interfaces/user";

class UserStore {
  public async findOneUser(id: number): Promise<IUser | undefined> {
    try {
      const user = await User.findOne({
        include: {
          model: Rol,
          as: "rol",
          attributes: ["name"],
        },
        where: { user_id: id },
      });
      if (user) {
        return user;
      }
      return;
    } catch (error) {
      throw new Error("Error al buscar un usuario por su id");
    }
  }

  public async updateOneUser(
    id: number,
    bodyUpdate: IUserUpdate
  ): Promise<IUser | undefined> {
    try {
      if (bodyUpdate.password !== undefined) {
        bodyUpdate.password = bcryptjs.hashSync(bodyUpdate.password, 10);
      }

      const userUpdate = await User.update(bodyUpdate, {
        where: {
          user_id: id,
        },
      });

      if (userUpdate[0] !== 0) {
        const userUpdated = await User.findOne({ where: { user_id: id } });
        if (userUpdated !== null) {
          return userUpdated;
        }
      }
      return;
    } catch (error) {
      throw new Error("Error al actualizar un usuario por su id");
    }
  }

  public async removeOneUser(id: number): Promise<string | undefined> {
    try {
      const userDeleted = await User.destroy({
        where: {
          user_id: id,
        },
      });

      if (userDeleted !== 0) {
        return "Usuario borrado";
      }
      return;
    } catch (error) {
      throw new Error("Error al eliminar un usuario por su id");
    }
  }
}

export default new UserStore();
