import bcrypt from 'bcrypt';
import nodemon from 'nodemon';
import express from 'express';
const app = express();
import "dotenv/config";
//Instancia de conexión con el puerto
const port = process.env.PORT || 4000;

//Instancia de conexión a la base de datos
import {conectarDB} from './db.js';
conectarDB()

//Inicio del servidor 
app.listen(4000, ()=> console.log(`Servidor escuchando en el puerto ${port}`));