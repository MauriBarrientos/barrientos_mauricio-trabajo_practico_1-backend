import {sequelize, DataTypes} from '../db.js';
import playlists from './playlists.js'
import canciones from './canciones.js'

const cancionesPlaylists = sequelize.define('cancionesPlaylists', {
},
);

    cancionesPlaylists.sync({alter :true});
    export default cancionesPlaylists;