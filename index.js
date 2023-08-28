//IMPORTS
import nodemon from 'nodemon';
import express from 'express';
import { router } from './src/routes/router.js';
import { relaciones } from './models/relaciones.js';
import "dotenv/config";



//Instancia de conexión con el puerto
const app = express();
const port = process.env.PORT;

//Instancia de conexión a la base de datos
import {conectarDB} from './db.js';
conectarDB()


//Middleware
app.use(express.json());

// Conexión con las rutas
app.use(router);

relaciones()
//Inicio del servidor 
app.listen(4000, ()=> console.log(`Servidor escuchando en el puerto ${port}`));