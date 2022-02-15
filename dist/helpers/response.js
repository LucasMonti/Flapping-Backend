"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Error = exports.Success = void 0;
class Success {
    constructor(req, res, message, status, data) { }
}
exports.Success = Success;
class Error {
    constructor(req, res, message, status, data) { }
}
exports.Error = Error;
//# sourceMappingURL=response.js.map