//Importacion del modelo
import { canciones } from "../../models/canciones.js";

//Controlador para crear cancion
export const crearCancion = async (req, res) => {
    const { cancionNombre, cancionArtista, cancionAño, id} = req.body;
    try{
        //Verifica si existe la canción
        const existeCancion = await canciones.findOne({
            where: {
                cancionNombre,
                cancionArtista
            }
        });

        if(existeCancion){
            throw ({
                status: 400,
                message: 'La cancion ya existe',
            })
        };
        //Envío de la cancion a la BD
        const nuevaCancion = new canciones({
            cancionNombre,
            cancionArtista,
            cancionAño,
            id,
        });

        const cancionCreada = await nuevaCancion.save();

        if(!cancionCreada) {
            throw ({
                message: 'Error al registrar la cancion'
            })
        }
        return res.status(201).json({
            message: 'Cancion registrada correctamente',
        });
    } catch (error) {
        console.log(error);
        return res.status(error.status || 500).json({
            message: error.message || 'Error al registrar la canción',
        });
    }
};

//Contorlador para obtener cancion
export const obtenerCancion = async (req, res) => {
    const { id } = req.params;

    try{
        const cancion = await canciones.findByPk(id);

        if(!cancion) {
            throw ({
                status: 404,
                message: 'No se ha encontrado la cancion'
            })
        }
        return res.json(cancion);
    } catch (error) {
        console.log(error);
        return res.status(error.status || 500).json({
            message: error.message
        })
    };
}

//Controlador para obtener canciones
export const obtenerCanciones = async (req, res) => {
    try {
        const variasCanciones = await canciones.findAll({
            where: {
                estado: true,
            }
        });
        if (!variasCanciones) {
            throw ({
                status: 404,
                message: 'No se han encontrado canciones',
            });
        }
        return res.status(200).json(variasCanciones);
    } catch (error) {
        console.log(error);
        return res.status(error.status|| 500).json({
            message: error.message || 'Error al obtener las canciones',
        });
    }
};