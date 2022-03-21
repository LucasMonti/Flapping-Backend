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
class ValidateUser {
    login(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const schema = joi_1.default.object({
                email: joi_1.default.string().required(),
                password: joi_1.default.string().required(),
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
    register(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const schema = joi_1.default.object({
                name: joi_1.default.string().required(),
                lastname: joi_1.default.string().required(),
                email: joi_1.default.string().required(),
                password: joi_1.default.string().required(),
                wallet_address: joi_1.default.string().required(),
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
    updateUser(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const schema = joi_1.default.object({
                name: joi_1.default.string(),
                lastname: joi_1.default.string(),
                password: joi_1.default.string(),
                wallet_address: joi_1.default.string(),
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
}
exports.default = new ValidateUser();
//# sourceMappingURL=validate-user.js.map