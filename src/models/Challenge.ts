import { Model, DataTypes } from "sequelize";

import db from "../db/connection";

interface IChallenge extends Model {
  challenge_id: number;
  title: string;
  description: string;
  target_amount: number;
  status_id: number;
  benefactor: string;
  referente_id: number;
}

const Challenge = db.define<IChallenge>(
  "Challenge",
  {
    challenge_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    target_amount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    status_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    benefactor: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    referente_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    modelName: "challenge",
    underscored: true,
    tableName: "challenges",
    paranoid: true,
    timestamps: true,
  }
);

Challenge.sync();

export default Challenge;
