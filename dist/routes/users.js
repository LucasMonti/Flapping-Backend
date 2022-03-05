"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const users_1 = __importDefault(require("../controllers/users"));
class UserRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get("/:id", users_1.default.oneUser);
        this.router.put("/:id", users_1.default.updateUser);
        this.router.delete("/:id", users_1.default.removeUser);
    }
}
exports.default = new UserRoutes().router;
//# sourceMappingURL=users.js.map