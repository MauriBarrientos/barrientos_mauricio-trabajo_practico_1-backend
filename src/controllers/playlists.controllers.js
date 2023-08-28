import { playlists } from "../../models/playlists.js";
export const crearPlaylist = async (req, res) => {
    const { playlistNombre, id_usuario } = req.body;
    
    try {
        const existePlaylist = await playlists.findOne({
            where: {
                playlistNombre
            }
        });

        if (existePlaylist) {
            throw ({
                status: 400,
                message: 'Hay una playlist con ese nombre, elige otro',
            })
        };

        const nuevaPlaylist= new playlists({
            playlistNombre,
            id_usuario
        });

        const playlistCreada = await nuevaPlaylist.save();
        if (!playlistCreada) {
            throw ({
                message: 'Error al crear la playlist'
            })
        }
        return res.status(201).json({
            message: 'Playlist creada correctamente',
        });
    } catch (error){
        console.log(error);
        return res.status(error.status || 500).json({
            message: error.message || 'Error al crear la playlist'
         });
    }
};
export const obtenerPlaylist = async (req, res) => {
    const { id } = req.params;
    try {
        const playlist = await playlists.findByPk(id);

        if (!playlist){
            throw ({
                status: 400,
                message: 'No se ha encontrado la playlist'
            });
        }
        return res.json(playlist);

    } catch (error){
        console.log(error);
        return res.status(error.status || 500).json({
            message: error.message
        }) 
    };
};

export const obtenerPlaylists = async (req, res) => { 
    try {
        const variasPlaylists = await playlists.findAll({
            where: {
                estado:true,
            }
        });
        if (!variasPlaylists) {
            throw ({
                status: 404,
                message: 'No se han encontrado las playlists',
            });
        }
        return res.status(200).json(variasPlaylists);
    } catch (error) {
        console.log(error);
        return res.status(error.status || 500).json({
            message: error.message || 'Error al obtener las playlists',
        });
    }
};

export const actualizarPlaylist = async (req, res) => {
    const {id} = req.params;
    const { playlistNombre, id_usuario } = req.body;
    try {
        const playlistActualizada = await playlists.update({
            playlistNombre,
            id_usuario,
        }, {
            where: {
                id
            }
        })
        if (!playlistActualizada) {
            throw ({
                status: 400,
                message: 'No se pudo actualizar la playlist'
            })
        }
        return res.json({
            message: 'Playlist actualizada correctamente',
            playlistActualizada
        });
    } catch (error) {
        console.log(error);
        return res.status(error.status || 500).json({
            message: error.message || 'Error de servidor'
        })
    }
};

export const eliminarPlaylist = async (req, res) => {
    const { id } = req.params 
    try{
        const playlistEliminada = playlists.update({
            estado:false
        },{
            where: {
                id,
                estado: true
            }
        })
        if (!playlistEliminada) {
            throw ({
                status: 400,
                message: 'Error al eliminar la playlist'
            })
    }
    return res.json({
        message: 'Playlist eliminada correctamente'
    });
        }catch (error) {
            console.log(error);
            return res.status(error.status || 500).json({
            message: error.message || 'Error de servidor'
        })
    }
};
