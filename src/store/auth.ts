import User from "../models/User";
import Rol from "../models/Rol";

import { IUser } from "../interfaces/user";

class AuthStore {
  public async signin(email: string): Promise<IUser | undefined> {
    try {
      const user = await User.findOne({
        include: {
          model: Rol,
          as: "rol",
          attributes: ["name"],
        },
        where: { email },
      });

      if (user) {
        return user;
      }

      return;
    } catch (error) {
      throw new Error("Error al buscar un usuario");
    }
  }

  //Agregar el tipado a user unificando todo en una interface general
  public async signup(user: IUser): Promise<IUser | undefined> {
    console.log(user, 'user store')
    try {
      const newUser = await User.create(user);
      console.log(newUser, 'new User')
      return newUser;
    } catch (error) {
      throw new Error("Error al guardar un usuario");
    }
  }
}

export default new AuthStore();
