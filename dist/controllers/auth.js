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
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = __importDefault(require("../config/config"));
const auth_1 = __importDefault(require("../store/auth"));
const response_1 = __importDefault(require("../helpers/response"));
class AuthController {
    login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const userLogin = req.body;
                const user = yield auth_1.default.signin(userLogin.email);
                //Verificamos si existe el usuario y de ser asi, si la contraseña es correcta
                if (!user || !bcryptjs_1.default.compareSync(userLogin.password, user.password)) {
                    return response_1.default.error(res, "Invalid email or password", 400);
                }
                //Creamos el token
                const token = jsonwebtoken_1.default.sign({ user_id: user.user_id }, config_1.default.PRIVATE_KEY, {
                    expiresIn: "1h",
                });
                return response_1.default.success(res, "Login successfully", 200, { user, token });
            }
            catch (error) {
                return response_1.default.error(res, error.message, 500);
            }
        });
    }
    register(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newUser = req.body;
                newUser.rol_id = 2;
                //Encriptamos la contraseña
                newUser.password = bcryptjs_1.default.hashSync(newUser.password, 10);
                const user = yield auth_1.default.signup(newUser);
                return response_1.default.success(res, "Register successfully", 200, { user });
            }
            catch (error) {
                return response_1.default.error(res, error.message, 500);
            }
        });
    }
}
exports.default = new AuthController();
//# sourceMappingURL=auth.js.map