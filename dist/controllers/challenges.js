"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const challenges_1 = __importDefault(require("../store/challenges"));
const response_1 = __importDefault(require("../helpers/response"));
class ChallengeController {
    allChallenges(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const challenges = yield challenges_1.default.findAllChallenges();
                if (challenges !== undefined) {
                    return response_1.default.success(res, "Challenges encontrados correctamente", 200, {
                        challenges,
                    });
                }
                return response_1.default.error(res, "Challenges no encontrado", 404);
            }
            catch (error) {
                return response_1.default.error(res, "Internal server error", 500);
            }
        });
    }
    addChallenge(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newChallenge = req.body;
                const challenge = yield challenges_1.default.addOneChallenge(newChallenge);
                return response_1.default.success(res, "Challenge cargado correctamente", 200, {
                    challenge,
                });
            }
            catch (error) {
                return response_1.default.error(res, "Internal server error", 500);
            }
        });
    }
}
exports.default = new ChallengeController();
//# sourceMappingURL=challenges.js.map