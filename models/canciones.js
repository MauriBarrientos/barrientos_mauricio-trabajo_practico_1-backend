import {sequelize, DataTypes} from '../db.js';
import playlists from './playlists.js';

const canciones = sequelize.define('canciones', {
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
    cancionDuracion:{   
        type: DataTypes.TIME,
        allowNull: false
    },
    estado: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    },
    id_playlist: {
        type: DataTypes.INTEGER,
        defaultValue: true
    }
});

canciones.belongsTo(playlists, {
    foreignKey: 'id_playlist',
});
canciones.sync();
export default canciones;