import { Model, DataTypes, Optional } from "sequelize";

import db from "../db/connection";

import Challenge from "./Challenge";
import { IUser } from "../interfaces/user";

interface ICreationUser extends Optional<IUser, "user_id"> {}

class User extends Model<IUser, ICreationUser> implements IUser {
  public user_id!: number;
  public name!: string;
  public lastname!: string;
  public email!: string;
  public password!: string;
  public wallet_address!: string;
}

User.init(
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
    sequelize: db,
    modelName: "user",
    underscored: true,
    tableName: "users",
    paranoid: true,
  }
);

User.hasMany(Challenge, { as: "referente", foreignKey: "referente_id" });
Challenge.belongsTo(User, { as: "referente", foreignKey: "referente_id" });

export default User;
