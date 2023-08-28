import {sequelize, DataTypes} from '../db.js';

export const canciones = sequelize.define('canciones', {
    id_cancion: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    cancionNombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cancionArtista: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cancionAño: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    estado: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    },
    id: {
        type: DataTypes.INTEGER,
        defaultValue: true
    }
});

canciones.sync({alter: true},()=>{
    console.log('tabla canciones creada')
});
