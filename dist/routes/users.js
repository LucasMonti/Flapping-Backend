"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const users_1 = require("../controllers/users");
const router = (0, express_1.Router)();
router.get('/', users_1.getUsuarios);
router.post('/create', users_1.postUsuario);
exports.default = router;
//# sourceMappingURL=users.js.map