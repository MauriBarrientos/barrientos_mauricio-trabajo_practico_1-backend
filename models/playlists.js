import {sequelize, DataTypes} from '../db.js';

export const playlists = sequelize.define('playlists', {
    id_playlist: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    playlistNombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    estado: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    },
    id_usuario:{
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

playlists.sync({alter:true}, ()=>{
    console.log('tabla playlist creada')
});