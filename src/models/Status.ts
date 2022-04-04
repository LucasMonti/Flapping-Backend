import { Model, DataTypes } from "sequelize";

import db from "../db/connection";
import Challenge from "../models/Challenge";

interface IStatus extends Model {
  status_id: number;
  name: string;
}

const Status = db.define<IStatus>(
  "Status",
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
    modelName: "status",
    underscored: true,
    tableName: "status",
    paranoid: true,
    timestamps: false,
  }
);

Status.sync();

export default Status;
