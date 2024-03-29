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
exports.App = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const connection_1 = __importDefault(require("./db/connection"));
const auth_1 = __importDefault(require("./routes/auth"));
const users_1 = __importDefault(require("./routes/users"));
const challenges_1 = __importDefault(require("./routes/challenges"));
const error_1 = __importDefault(require("./routes/error"));
class App {
    constructor(port) {
        this.port = port;
        this.apiPaths = {
            auth: "/api",
            users: "/api/users",
            challenges: "/api/challenges",
            error: "*",
        };
        this.app = (0, express_1.default)();
        this.settings();
        this.middlewares();
        this.routes();
    }
    settings() {
        this.app.set("port", this.port);
    }
    middlewares() {
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
    }
    routes() {
        this.app.use(this.apiPaths.auth, auth_1.default);
        this.app.use(this.apiPaths.users, users_1.default);
        this.app.use(this.apiPaths.challenges, challenges_1.default);
        this.app.use(this.apiPaths.error, error_1.default);
    }
    dbConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield connection_1.default.authenticate();
                yield connection_1.default.sync();
                console.log("Database ON");
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    listen() {
        return __awaiter(this, void 0, void 0, function* () {
            this.app.listen(this.app.get("port"), () => {
                try {
                    console.log("Server on port: ", this.app.get("port"));
                }
                catch (error) {
                    throw new Error(error);
                }
            });
        });
    }
}
exports.App = App;
//# sourceMappingURL=app.js.map