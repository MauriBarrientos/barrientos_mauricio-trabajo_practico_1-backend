import {sequelize, DataTypes} from '../db.js';
// import canciones from './canciones.js'


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
    playlistAutor: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

// playlists.belongsToMany(Cancion, { through: cancionesPlaylists });

playlists.sync({alter :true});
export default playlists;