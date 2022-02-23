"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TypeResponse {
    success(res, message, statusCode, data) {
        res.status(statusCode).json({
            code: "OK",
            message,
            success: true,
            data,
        });
    }
    error(res, message, statusCode) {
        res.status(statusCode).json({
            code: "ERROR",
            message,
            success: false,
            data: null,
        });
    }
}
exports.default = new TypeResponse();
//# sourceMappingURL=response.js.map