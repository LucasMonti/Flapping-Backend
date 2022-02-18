import express, { Application } from "express";
import db from "./db/connection";
<<<<<<< HEAD
import cors from "cors";
=======
import cors from 'cors'
import users from './routes/users'

>>>>>>> b5692f8fde1cd1001adcaffd525803975ae684ca

export class App {
  private app: Application;
  private apiPaths = {
        users : '/api/users'
  }

  constructor(private port: number | string) {
    this.app = express();
    this.settings();
<<<<<<< HEAD
    this.middleware();
=======
    this.middlewares();
    this.routes();
>>>>>>> b5692f8fde1cd1001adcaffd525803975ae684ca
  }

  settings() {
    this.app.set("port", this.port);
  }

<<<<<<< HEAD
  middleware() {
    this.app.use(cors());
    this.app.use(express.json());
  }

  routes() {
    this.app.use("/user");
=======
  middlewares() {
    this.app.use(cors())
    this.app.use(express.json())
  }

  routes() {
    this.app.use(this.apiPaths.users, users)
>>>>>>> b5692f8fde1cd1001adcaffd525803975ae684ca
  }

  async dbConnection() {
    try {
      await db.authenticate();
      console.log("Database ON");
    } catch (error: any) {
      throw new Error(error);
    }
  }

  listen() {
    console.log();

    this.app.listen(this.app.get("port"), () => {
      try {
        console.log("Server on port: ", this.app.get("port"));
      } catch (error: any) {
        throw new Error(error);
      }
    });
  }
}
