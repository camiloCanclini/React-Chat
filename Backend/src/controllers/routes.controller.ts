import { Response, Request, NextFunction } from "express"
import User from '../models/user.js'

export const findUser = async (req: Request, res: Response)=>{
    const email = req.body.email
    const pass = req.body.pass
    await User.findOne({email: email, password: pass})
    .then((data: any)=>{
        res.status(200).json({
            status: 200,
            data: data
        })
    })
    .catch(()=>{
        res.status(404).json({
            status: 200,
            message: 'User not found!'
        })
    })
}

export const registerUser = async (req: Request, res: Response, next: NextFunction)=>{
    const email: string = req.body.email!
    const pass: string = req.body.pass!
    const name: string = req.body.name!
    const description: string = req.body.description!
    console.log(req.file);
    
    if (email==undefined) {
        return next(new Error('The email Field Is Empty!'))
    }
    if (pass==undefined) {
        return next(new Error('The pass Field Is Empty!'))
    }
    if (name==undefined) {
        return next(new Error('The name Field Is Empty!'))
    }

    if (!email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
        return res.status(200).json({
            error: 'Incorrect Email Format'
        })
    }

    await User.create({email: email, password: pass, name: name, description: description})
        .then((data)=>{
            res.status(200).json({
                message: 'New User Created!',
                userInfo: {name: data.name, description: description}
            })
        })
        .catch(()=>{
            res.status(400).json({
                error: 'Error Creating User!'
            })
        })

}