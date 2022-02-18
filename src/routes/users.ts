import {Router} from 'express';
import {getUsuarios, postUsuario} from "../controllers/users";

const router = Router();


router.get('/', getUsuarios);
router.post('/create', postUsuario)


export default router;
