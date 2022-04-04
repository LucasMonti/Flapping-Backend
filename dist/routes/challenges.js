"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const challenges_1 = __importDefault(require("../controllers/challenges"));
class ChallengeRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get("/", challenges_1.default.allChallenges);
        this.router.post("/", challenges_1.default.addChallenge);
    }
}
exports.default = new ChallengeRoutes().router;
//# sourceMappingURL=challenges.js.map