"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const User = connection_1.default.define("User", {
    user_id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    // name_user: {
    //   type: DataTypes.STRING,
    // },
    // lastname_user: {
    //   type: DataTypes.STRING,
    // },
    email: {
        type: sequelize_1.DataTypes.STRING,
    },
    password: {
        type: sequelize_1.DataTypes.STRING,
    },
    // wallet_address: {
    //   type: DataTypes.STRING,
    // },
    // createdAt: {
    //   type: DataTypes.DATE,
    // },
    // updatedAt: {
    //   type: DataTypes.DATE,
    // },
}, {
    modelName: "user",
    underscored: true,
    tableName: "users",
    paranoid: true,
});
exports.default = User;
//# sourceMappingURL=User.js.map