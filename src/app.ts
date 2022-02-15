import express, { Application } from "express";
import db from "./db/connection";

export class App {
  private app: Application;

  constructor(private port: number | string) {
    this.app = express();
    this.settings();
  }

  settings() {
    this.app.set("port", this.port);
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
    this.app.listen(this.app.get("port"), () => {
      try {
        console.log("Server on port " + this.app.get("port"));
      } catch (error: any) {
        throw new Error(error);
      }
    });
  }
}