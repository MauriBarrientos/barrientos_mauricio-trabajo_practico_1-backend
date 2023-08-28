import {Router} from 'express';
import {crearPlaylist, obtenerPlaylist, obtenerPlaylists,actualizarPlaylist, eliminarPlaylist } from '../controllers/playlists.controllers.js';
import {crearCancion, obtenerCancion, obtenerCanciones} from '../controllers/canciones.controllers.js';
import {crearUsuario, obtenerUsuario, obtenerUsuarios} from '../controllers/usuarios.controllers.js';
import { validacionUsuario,validacionCancion, validacionPlaylist,validateCtrl} from '../../models/middleware/validationSchema.js';

const router = Router();



//Rutas para usuarios
router.post('/usuario', validacionUsuario, validateCtrl, crearUsuario);

router.get('/usuarios', obtenerUsuarios);

router.get('/usuario/:id', obtenerUsuario);



//Rutas para canciones
router.post('/cancion', validacionCancion, validateCtrl,crearCancion);

router.get('/cancion/:id', obtenerCancion);

router.get('/canciones', obtenerCanciones);



//Rutas para playlists
router.post('/crear/playlist', validacionPlaylist, validateCtrl,crearPlaylist);

router.get('/playlist/:id', obtenerPlaylist);

router.get('/playlists/', obtenerPlaylists);

router.put('/playlist/:id', validacionPlaylist, validateCtrl,actualizarPlaylist);

router.delete('/playlist/:id', eliminarPlaylist);


export {router};