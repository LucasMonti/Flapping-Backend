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
const User_1 = __importDefault(require("../models/User"));
const Rol_1 = __importDefault(require("../models/Rol"));
class AuthStore {
    signin(email) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield User_1.default.findOne({
                    include: {
                        model: Rol_1.default,
                        as: "rol",
                        attributes: ["name"],
                    },
                    where: { email },
                });
                if (user) {
                    return user;
                }
                return;
            }
            catch (error) {
                throw new Error("Error al buscar un usuario");
            }
        });
    }
    //Agregar el tipado a user unificando todo en una interface general
    signup(user) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newUser = yield User_1.default.create(user);
                return newUser;
            }
            catch (error) {
                throw new Error("Error al guardar un usuario");
            }
        });
    }
}
exports.default = new AuthStore();
//# sourceMappingURL=auth.js.map