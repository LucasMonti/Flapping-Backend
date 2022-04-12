"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
class Challenge extends sequelize_1.Model {
}
Challenge.init({
    challenge_id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    title: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    target_amount: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    status_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    benefactor: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    referente_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    sequelize: connection_1.default,
    modelName: "challenge",
    underscored: true,
    tableName: "challenges",
    paranoid: true,
    timestamps: true,
});
exports.default = Challenge;
//# sourceMappingURL=Challenge.js.map