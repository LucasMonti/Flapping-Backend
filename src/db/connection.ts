import { Sequelize } from "sequelize";

const db = new Sequelize("flapping", "root", "", {
  host: "localhost",
  dialect: "mariadb",
  logging: false,
});

export default db;
