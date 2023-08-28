//Importacion de librerías, rutas y relaciones de los modelos
import express from 'express';
import { router } from './src/routes/router.js';
import { relaciones } from './models/relaciones.js';
import "dotenv/config";
const app = express();
const port = process.env.PORT;

//Instancia de conexión a la base de datos
import {conectarDB} from './db.js';
conectarDB()


//Middleware
app.use(express.json());


// Conexión con las rutas
app.use(router);

//Relaciones de las entidades
relaciones()

//Inicio del servidor 
app.listen(4000, ()=> console.log(`Servidor escuchando en el puerto ${port}`));