"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const challenges_1 = __importDefault(require("../controllers/challenges"));
const validate_challenge_1 = __importDefault(require("../middlewares/validate-challenge"));
const validate_id_1 = __importDefault(require("../middlewares/validate-id"));
class ChallengeRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get("/", challenges_1.default.allChallenges);
        this.router.get("/:id", validate_id_1.default.typeId, challenges_1.default.oneChallenge);
        this.router.post("/", validate_challenge_1.default.addChallenge, challenges_1.default.addChallenge);
        this.router.delete("/:id", validate_id_1.default.typeId, challenges_1.default.removeChallenge);
    }
}
exports.default = new ChallengeRoutes().router;
//# sourceMappingURL=challenges.js.map