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
const users_1 = __importDefault(require("../store/users"));
const response_1 = __importDefault(require("../helpers/response"));
class UserController {
    oneUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const idu = parseInt(req.params.id);
                const user = yield users_1.default.findOneUser(idu);
                if (user !== undefined) {
                    return response_1.default.success(res, "Usuario encontrado correctamente", 200, {
                        user,
                    });
                }
                return response_1.default.error(res, "Usuario no encontrado", 404);
            }
            catch (error) {
                return response_1.default.error(res, "Internal server error", 500);
            }
        });
    }
    updateUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const idu = parseInt(req.params.id);
                const userData = req.body;
                const userUpdate = yield users_1.default.updateOneUser(idu, userData);
                if (userUpdate !== undefined) {
                    return response_1.default.success(res, "Usuario actualizado correctamente", 200, {
                        userUpdate,
                    });
                }
                return response_1.default.error(res, "Usuario a actualizar no encontrado", 404);
            }
            catch (error) {
                return response_1.default.error(res, "Internal server error", 500);
            }
        });
    }
    removeUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const idu = parseInt(req.params.id);
                const userDelete = yield users_1.default.removeOneUser(idu);
                if (userDelete !== undefined) {
                    return response_1.default.success(res, "Usuario eliminado correctamente", 200, null);
                }
                return response_1.default.error(res, "Usuario a eliminar no encontrado", 404);
            }
            catch (error) {
                return response_1.default.error(res, "Internal server error", 500);
            }
        });
    }
}
exports.default = new UserController();
//# sourceMappingURL=users.js.map