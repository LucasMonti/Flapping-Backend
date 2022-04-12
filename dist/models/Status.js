"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Challenge_1 = __importDefault(require("./Challenge"));
class Status extends sequelize_1.Model {
}
Status.init({
    status_id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
}, {
    sequelize: connection_1.default,
    modelName: "status",
    underscored: true,
    tableName: "status",
    paranoid: true,
    timestamps: false,
});
Status.hasMany(Challenge_1.default, { as: "status", foreignKey: "status_id" });
Challenge_1.default.belongsTo(Status, { as: "status", foreignKey: "status_id" });
exports.default = Status;
//# sourceMappingURL=Status.js.map