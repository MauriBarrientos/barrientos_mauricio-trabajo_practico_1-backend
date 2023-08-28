import {canciones} from './canciones.js';
import {playlists} from './playlists.js';
import {usuarios} from './usuarios.js';

export const relaciones = ()=> {
    usuarios.hasMany(playlists, {foreignKey: 'id_usuario'})
    playlists.belongsTo(usuarios, {foreignKey: 'id_usuario'});

    playlists.hasMany(canciones, {foreignKey: 'id_playlist'})
    canciones.belongsTo(playlists, {foreignKey: 'id_playlist'});
}

