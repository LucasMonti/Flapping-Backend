import { Sequelize } from "sequelize";

const db = new Sequelize("flapping", "root", "root", {
  host: "localhost",
  dialect: "mariadb",
  logging: false,
});

export default db;
