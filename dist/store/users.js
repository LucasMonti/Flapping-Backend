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
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const User_1 = __importDefault(require("../models/User"));
class UserStore {
    findOneUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield User_1.default.findOne({ where: { user_id: id } });
                if (user) {
                    return user;
                }
                return;
            }
            catch (error) {
                throw new Error("Error al buscar un usuario por su id");
            }
        });
    }
    updateOneUser(id, bodyUpdate) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (bodyUpdate.password !== undefined) {
                    bodyUpdate.password = bcryptjs_1.default.hashSync(bodyUpdate.password, 10);
                }
                const userUpdate = yield User_1.default.update(bodyUpdate, {
                    where: {
                        user_id: id,
                    },
                });
                if (userUpdate[0] !== 0) {
                    const userUpdated = yield User_1.default.findOne({ where: { user_id: id } });
                    if (userUpdated !== null) {
                        return userUpdated;
                    }
                }
                return;
            }
            catch (error) {
                throw new Error("Error al actualizar un usuario por su id");
            }
        });
    }
    removeOneUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const userDeleted = yield User_1.default.destroy({
                    where: {
                        user_id: id,
                    },
                });
                if (userDeleted !== 0) {
                    return "Usuario borrado";
                }
                return;
            }
            catch (error) {
                throw new Error("Error al eliminar un usuario por su id");
            }
        });
    }
}
exports.default = new UserStore();
//# sourceMappingURL=users.js.map