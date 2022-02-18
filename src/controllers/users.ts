import {Request, Response} from "express";
import User from "../models/User";

export const getUsuarios = (req: Request, res: Response) => {
    console.log('soy el controlador')
    res.json({
        msg: 'getUsers'
    })
}

export const postUsuario = async (req: Request, res: Response) => {
    const {nombre, email, estado} = req.body;
    try {
     const user = await User.create({nombre, email, estado})

     res.json(user)
    } catch (error) {
        console.log(error)
        res.status(500).json({
            msg: 'Error en la petición'
        })
    }

}
