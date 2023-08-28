//Importacion de las librerías
import {Sequelize} from 'sequelize';
import dotenv from 'dotenv';
export { DataTypes} from "sequelize"; 
dotenv.config()

//Configuración de conexión con la BD utilizando ENV (Sequelize solic)
export const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: process.env.DB_DIALECT
    });


//Exportación de la función de conexión con la BD
export const conectarDB = async () =>{
    try {
        await sequelize.authenticate();
        console.log('Conectado a la base de datos')
    } catch (error) {
        console.log('Error en la conexión con la base de datos', error)
    }
};