import express, { Application } from "express";
import cors from "cors";

import db from "./db/connection";

import auth from "./routes/auth";
import users from "./routes/users";

export class App {
  private app: Application;
  private apiPaths = {
    auth: "/api",
    users: "/api/users",
  };

  constructor(private port: number | string) {
    this.app = express();
    this.settings();
    this.middlewares();
    this.routes();
  }

  settings() {
    this.app.set("port", this.port);
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
  }

  routes() {
    this.app.use(this.apiPaths.auth, auth);
    this.app.use(this.apiPaths.users, users);
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
