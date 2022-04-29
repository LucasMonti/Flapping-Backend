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
const joi_1 = __importDefault(require("joi"));
const response_1 = __importDefault(require("../helpers/response"));
class ValidateChallenge {
    addChallenge(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const schema = joi_1.default.object({
                title: joi_1.default.string().required(),
                description: joi_1.default.string().required(),
                target_amount: joi_1.default.number().required(),
                status_id: joi_1.default.number(),
                benefactor: joi_1.default.string().required(),
                referente_id: joi_1.default.number().required(),
            });
            try {
                yield schema.validateAsync(req.body);
                return next();
            }
            catch (error) {
                return response_1.default.error(res, error.details[0].message, 500);
            }
        });
    }
    filtersFindChallenges(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const schema = joi_1.default.object({
                page: joi_1.default.number(),
                limit: joi_1.default.number(),
                status: joi_1.default.number(),
                referente: joi_1.default.number(),
            });
            try {
                yield schema.validateAsync(req.query);
                return next();
            }
            catch (error) {
                return response_1.default.error(res, error.details[0].message, 500);
            }
        });
    }
}
exports.default = new ValidateChallenge();
//# sourceMappingURL=validate-challenge.js.map