import express from 'express';
import {crearUsuario, obtenerUsuario, obtenerUsuarios} from '../controllers/usuarios.controllers.js';
const router = express.Router();

//Rutas para usuarios
router.post('/usuario', crearUsuario);

router.get('/usuarios', obtenerUsuarios);

router.get('/usuario/:id', obtenerUsuario);

export default router;