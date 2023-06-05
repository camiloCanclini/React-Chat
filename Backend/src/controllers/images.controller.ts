import { Request, Response } from 'express';


export const uploadImage = async (_req: Request, res: Response) => {
    res.status(200).json({message: "Image Uploaded!"})
}