"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Challenge_1 = __importDefault(require("./Challenge"));
class User extends sequelize_1.Model {
}
User.init({
    user_id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    // rol_id: {
    //   type: DataTypes.INTEGER,
    //   allowNull: true,
    // },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    lastname: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    wallet_address: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
}, {
    sequelize: connection_1.default,
    modelName: "user",
    underscored: true,
    tableName: "users",
    paranoid: true,
});
User.hasMany(Challenge_1.default, { as: "referente", foreignKey: "referente_id" });
Challenge_1.default.belongsTo(User, { as: "referente", foreignKey: "referente_id" });
exports.default = User;
//# sourceMappingURL=User.js.map