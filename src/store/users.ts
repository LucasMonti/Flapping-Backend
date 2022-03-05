import User from "../models/User";

import { IUser } from "../helpers/interfaces/user";

class UserStore {
  public async findOneUser(id: number): Promise<IUser | undefined> {
    try {
      const user = await User.findOne({ where: { user_id: id } });

      if (user) {
        return user;
      }

      //Retornar un msj
      return;
    } catch (error) {
      throw new Error("Error al buscar un usuario por su id");
    }
  }

  //Analizar como tipar lo que se va a modificar
  public async updateOneUser(
    id: number,
    bodyUpdate: IUser
  ): Promise<IUser | undefined> {
    try {
      const userUpdated = await User.update(bodyUpdate, {
        where: {
          user_id: id,
        },
      });

      if (userUpdated[0] !== 0) {
        return userUpdated[1][1];
      }

      return;
    } catch (error) {
      throw new Error("Error al actualizar un usuario por su id");
    }
  }

  //ver los parametros que se les pasan
  public async removeOneUser(id: string): Promise<void> {
    try {
      const userDeleted = await User.destroy({
        where: {
          user_id: id,
        },
      });
      if (userDeleted !== 0) {
        //Borró el usuario, ver que devolver
      }
    } catch (error) {
      throw new Error("Error al eliminar un usuario por su id");
    }
  }
}

export default new UserStore();
