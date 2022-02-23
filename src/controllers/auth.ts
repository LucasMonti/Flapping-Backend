import { Request, Response } from "express";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

import config from "../config/config";
import authStore from "../store/auth";
import response from "../helpers/response";

class AuthController {
  public async login(req: Request, res: Response): Promise<void> {
    try {
      //Ver de desestructurar el obj req.body agregando el tipado
      const email: string = req.body.email;
      const password: string = req.body.password;

      const user = await authStore.signin(email);

      //Verificamos si existe el usuario y de ser asi, si la contraseña es correcta
      if (!user || !bcryptjs.compareSync(password, user.password)) {
        return response.error(res, "Invalid email or password", 400);
      }

      //Creamos el token
      const token = jwt.sign(
        { user_id: user.user_id },
        config.PRIVATE_KEY as string,
        {
          expiresIn: "1h",
        }
      );

      return response.success(res, "Login successfully", 200, { user, token });
    } catch (error) {
      return response.error(res, "Internal server error", 500);
    }
  }

  public async register(req: Request, res: Response): Promise<void> {
    try {
      //Ver de desestructurar el obj req.body agregando el tipado
      const email: string = req.body.email;
      const passwordToEncript: string = req.body.password;

      //Encriptamos la contraseña
      const password: string = bcryptjs.hashSync(passwordToEncript, 10);

      const user = await authStore.signup({ email, password });

      return response.success(res, "Register successfully", 200, { user });
    } catch (error) {
      return response.error(res, "Internal server error", 500);
    }
  }
}

export default new AuthController();
