import express, { Application } from "express";
import db from "./db/connection";
import cors from "cors";

export class App {
  private app: Application;

  constructor(private port: number | string) {
    this.app = express();
    this.settings();
    this.middleware();
  }

  settings() {
    this.app.set("port", this.port);
  }

  middleware() {
    this.app.use(cors());
    this.app.use(express.json());
  }

  routes() {
    this.app.use("/user");
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
