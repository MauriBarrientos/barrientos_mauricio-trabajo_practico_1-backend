import bcrypt from 'bcrypt';
import { usuarios } from '../../models/usuarios.js';


export const crearUsuario = async (req, res) => {
    const { username, email, password } = req.body;
    try {
        // Se verifica si el usuario ya existe
        const existeUsuario = await usuarios.findOne({
            where: {
                email
            }
        });


        if (existeUsuario) {
            throw ({ // throw siempre debe ejecutarse dentro de un try catch
                status: 400,
                message: 'El usuario ya existe',
            })
        };
        const nuevoUsuario = new usuarios({
            username,
            email,
            password
        });
        const salt = await bcrypt.genSalt(10);
        nuevoUsuario.password = await bcrypt.hash(password, salt);

        const usuarioCreado = await nuevoUsuario.save();
        if (!usuarioCreado) {
            throw ({
                message: 'Error al crear el usuario',
            })
        }

        // Se retorna la respuesta al cliente
        return res.status(201).json({
            message: 'Usuario creado exitosamente',
        });
    } catch (error) {
        console.log(error);
        return res.status(error.status || 500).json({
            message: error.message || 'Error al crear usuario',
        });
    }
};

export const obtenerUsuario = async (req, res) => {
    const {id} = req.params;

    try {
        const usuario = await usuarios.findByPk(id);

        if(!usuario) {
            throw ({
                status: 404,
                message: 'No se ha encontrado el usuario'
            })
        }
        return res.json(usuario);
    } catch (error) {
        console.log(error);
        return res.status(error.status || 500).json({
            message: error.message
        })
    };
}

export const obtenerUsuarios = async (req, res) => {
    try {
        const variosUsuarios = await usuarios.findAll({
            where: {
                estado:true,
            }
        });
        if (!variosUsuarios){
            throw ({
                status: 404,
                message: 'No se han encontrado el usuario'
            });
        }
        return res.status(200).json(variosUsuarios);
    } catch (error) {
        console.log(error);
        return res.status(error.status || 500).json({
            message: error.message || 'Error al obtener los usuarios',
        });
    }
};
