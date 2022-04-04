"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = __importDefault(require("../models/User"));
const Challenge_1 = __importDefault(require("../models/Challenge"));
const Status_1 = __importDefault(require("../models/Status"));
//Uno a muchos
Status_1.default.hasMany(Challenge_1.default, { as: "status", foreignKey: "status_id" });
User_1.default.hasMany(Challenge_1.default, { as: "referente", foreignKey: "referente_id" });
Challenge_1.default.belongsTo(Status_1.default, { as: "status", foreignKey: "status_id" });
Challenge_1.default.belongsTo(User_1.default, { as: "referente", foreignKey: "referente_id" });
//# sourceMappingURL=associations.js.map