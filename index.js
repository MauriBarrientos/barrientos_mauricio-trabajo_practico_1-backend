import nodemon from 'nodemon';
import express from 'express';
// import usuarios from "./models/usuarios.js"
// import playlists from "./models/playlists.js"
// import canciones from "./models/canciones.js"
import cancionesRouter from './src/routes/canciones.routes.js';
import usuariosRouter from './src/routes/usuarios.routes.js';
import playlistRouter from './src/routes/playlists.routes.js';

const app = express();
import "dotenv/config";
//Instancia de conexión con el puerto
const port = process.env.PORT || 4000;

//Instancia de conexión a la base de datos
import {conectarDB} from './db.js';
conectarDB()

//Middleware
app.use(express.json());
// Conexión con las rutas
app.use (cancionesRouter,usuariosRouter,playlistRouter);

//Inicio del servidor 
app.listen(4000, ()=> console.log(`Servidor escuchando en el puerto ${port}`));