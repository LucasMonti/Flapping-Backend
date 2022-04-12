import { Model, DataTypes, Optional } from "sequelize";

import db from "../db/connection";

import { IChallenge } from "../interfaces/challenge";

interface ICreationChallenge extends Optional<IChallenge, "challenge_id"> {}
class Challenge
  extends Model<IChallenge, ICreationChallenge>
  implements IChallenge
{
  public challenge_id!: number;
  public title!: string;
  public description!: string;
  public target_amount!: number;
  public status_id!: number;
  public benefactor!: string;
  public referente_id!: number;
}

Challenge.init(
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
    sequelize: db,
    modelName: "challenge",
    underscored: true,
    tableName: "challenges",
    paranoid: true,
    timestamps: true,
  }
);

export default Challenge;
