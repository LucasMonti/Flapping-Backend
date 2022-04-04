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
const Challenge_1 = __importDefault(require("../models/Challenge"));
const User_1 = __importDefault(require("../models/User"));
const Status_1 = __importDefault(require("../models/Status"));
class ChallengeStore {
    findAllChallenges() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const challenges = yield Challenge_1.default.findAll({
                    include: [
                        {
                            model: User_1.default,
                            as: "referente",
                            attributes: ["name", "email"],
                        },
                        {
                            model: Status_1.default,
                            as: "status",
                            attributes: ["name"],
                        },
                    ],
                });
                if (challenges) {
                    return challenges;
                }
                return;
            }
            catch (error) {
                console.log(error);
                throw new Error("Error al buscar todos los challenges");
            }
        });
    }
    addOneChallenge(challenge) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newChallenge = yield Challenge_1.default.create(challenge);
                return newChallenge;
            }
            catch (error) {
                throw new Error("Error al cargar un nuevo desafio");
            }
        });
    }
}
exports.default = new ChallengeStore();
//# sourceMappingURL=challenges.js.map