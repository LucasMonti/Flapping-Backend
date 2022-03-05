import User from "../models/User";

import { IUser } from "../helpers/interfaces/user";

class AuthStore {
  public async signin(email: string): Promise<IUser | undefined> {
    try {
      const user = await User.findOne({ where: { email } });

      if (user) {
        return user;
      }

      return;
    } catch (error) {
      throw new Error("Error al buscar un usuario");
    }
  }

  //Agregar el tipado a user unificando todo en una interface general
  public async signup(user: any): Promise<IUser | undefined> {
    try {
      const newUser = await User.create(user);
      return newUser;
    } catch (error) {
      throw new Error("Error al guardar un usuario");
    }
  }
}

export default new AuthStore();
