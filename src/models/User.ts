import { Model, DataTypes } from "sequelize";
import db from "../db/connection";

interface IUser extends Model {
  user_id: number;
  name: string;
  lastname: string;
  email: string;
  password: string;
  wallet_address: string;
}

const User = db.define<IUser>(
  "User",
  {
    user_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    wallet_address: {
      type: DataTypes.STRING,
      allowNull: false,
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
