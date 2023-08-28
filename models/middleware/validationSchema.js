import { body, validationResult} from 'express-validator';

export const validacionUsuario = [
    body("username").notEmpty().withMessage("El campo nombre es requerido"),
    body("email").notEmpty().withMessage("El campo email es requerido").isEmail().withMessage("El email es inválido"),
    body("password").notEmpty().withMessage("El campo contraseña es obligatorio").isLength({min: 5, max: 15}).withMessage("La contraseña debe ser entre 5 a 15 caracteres")
]

export const validacionPlaylist = [
  body("playlistNombre").notEmpty().withMessage("El campo nombre es requerido"),
]

export const validacionCancion = [
  body("cancionNombre").notEmpty().withMessage("El campo nombre es requerido"),
  body("cancionArtista").notEmpty().withMessage("El campo artista es requerido"),
  body("cancionAño").notEmpty().withMessage("El campo año es requerido").isNumeric().withMessage("Ingrese un año").isLength(4).withMessage("Ingrese un año válido")
]


export const validateCtrl = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
  next();
  };