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
const connection_1 = __importDefault(require("./db/connection"));
class App {
    constructor(port) {
        this.port = port;
        console.log(this.port);
        this.app = (0, express_1.default)();
        this.settings();
    }
    settings() {
        this.app.set("port", this.port);
    }
    dbConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield connection_1.default.authenticate();
                console.log("Database ON");
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    listen() {
        this.app.listen(this.app.get("port"), () => {
            try {
                console.log("Server on port " + this.app.get("port"));
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
}
exports.App = App;
//# sourceMappingURL=app.js.map