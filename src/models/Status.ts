import { Model, DataTypes, Optional } from "sequelize";

import db from "../db/connection";

import Challenge from "./Challenge";
import { IStatus } from "../interfaces/status";

interface ICreationStatus extends Optional<IStatus, "status_id"> {}

class Status extends Model<IStatus, ICreationStatus> implements IStatus {
  public status_id!: number;
  public name!: string;
}

Status.init(
  {
    status_id: {
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
    modelName: "status",
    underscored: true,
    tableName: "status",
    paranoid: true,
    timestamps: false,
  }
);

Status.hasMany(Challenge, { as: "status", foreignKey: "status_id" });
Challenge.belongsTo(Status, { as: "status", foreignKey: "status_id" });

export default Status;
