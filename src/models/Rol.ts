import { Model, DataTypes, Optional } from "sequelize";

import db from "../db/connection";

import User from "./User";
import { IRol } from "../interfaces/rol";

interface ICreationRol extends Optional<IRol, "rol_id"> {}

class Rol extends Model<IRol, ICreationRol> implements IRol {
  public rol_id!: number;
  public name!: string;
}

Rol.init(
  {
    rol_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: db,
    modelName: "rol",
    underscored: true,
    tableName: "roles",
    paranoid: true,
    timestamps: false,
  }
);

Rol.hasMany(User, { as: "rol", foreignKey: "rol_id" });
User.belongsTo(Rol, { as: "rol", foreignKey: "rol_id" });

export default Rol;
