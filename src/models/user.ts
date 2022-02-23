import { Model, DataTypes } from "sequelize";
import db from "../db/connection";

//Ver si se puede integrar con la interface general de usuario
interface UserInstance extends Model {
  user_id: string;
  // name_user: string;
  // lastname_user: string;
  email: string;
  password: string;
  // wallet_address: string;
}

const User = db.define<UserInstance>(
  "User",
  {
    user_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    // name_user: {
    //   type: DataTypes.STRING,
    // },
    // lastname_user: {
    //   type: DataTypes.STRING,
    // },
    email: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
    // wallet_address: {
    //   type: DataTypes.STRING,
    // },
    // createdAt: {
    //   type: DataTypes.DATE,
    // },
    // updatedAt: {
    //   type: DataTypes.DATE,
    // },
  },
  {
    modelName: "user",
    underscored: true,
    tableName: "users",
    paranoid: true,
  }
);

export default User;
