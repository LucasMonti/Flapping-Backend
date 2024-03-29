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
const response_1 = __importDefault(require("../helpers/response"));
class ErrorController {
    responseError(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const message = `Ruta ${req.headers.host + req.originalUrl} Metodo ${req.method.toUpperCase()}  not found`;
                return response_1.default.error(res, message, 404);
            }
            catch (error) {
                return response_1.default.error(res, error.message, 500);
            }
        });
    }
}
exports.default = new ErrorController();
//# sourceMappingURL=error.js.map