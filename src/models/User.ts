import { Model, DataTypes } from "sequelize";
import db from "../db/connection";

interface IUser extends Model {
  user_id: number;
  email: string;
  password: string;
}

const User = db.define<IUser>(
  "User",
  {
    user_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    email: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
  },
  {
    modelName: "user",
    underscored: true,
    tableName: "users",
    paranoid: true,
  }
);

export default User;
