import {sequelize, DataTypes} from '../db.js';
// import playlists from './playlists.js';

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
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

// canciones.belongsToMany(playlists, { through: cancionesPlaylists});

canciones.sync({alter :true});
export default canciones;