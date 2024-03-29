"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_1 = __importDefault(require("../controllers/auth"));
const validate_user_1 = __importDefault(require("../middlewares/validate-user"));
class AuthRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.post("/login", validate_user_1.default.login, auth_1.default.login);
        this.router.post("/register", validate_user_1.default.register, auth_1.default.register);
    }
}
exports.default = new AuthRoutes().router;
//# sourceMappingURL=auth.js.map