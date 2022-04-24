"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const User_1 = __importDefault(require("./User"));
class Rol extends sequelize_1.Model {
}
Rol.init({
    rol_id: {
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
    modelName: "rol",
    underscored: true,
    tableName: "roles",
    paranoid: true,
    timestamps: false,
});
Rol.hasMany(User_1.default, { as: "rol", foreignKey: "rol_id" });
User_1.default.belongsTo(Rol, { as: "rol", foreignKey: "rol_id" });
exports.default = Rol;
//# sourceMappingURL=Rol.js.map