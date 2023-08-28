import {sequelize, DataTypes} from '../db.js';
import usuarios from './usuarios.js';


const playlists = sequelize.define('playlists', {
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

playlists.belongsTo(usuarios, {
    foreignKey: 'id_usuario'
});


playlists.sync();
export default playlists;