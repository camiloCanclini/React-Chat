import { NextFunction, Response, Request } from "express";
import mongoose from "mongoose";

export const connectDb = async () => {
  const URI = "mongodb://127.0.0.1:27017/test";
  await mongoose.connect(URI)
    .then(() => console.log('Database Connected!'))
    .catch(() => console.error('Error: Connection With Database Failed!'))
};

export const dbIsConnected = (req: Request, res: Response, next: NextFunction) => {
  if (mongoose.connection.readyState != 1) {
    res.json({
      status: 'Error 505',
      message: 'Database Is Not Connected!'
    })
  }else{
    next()
  } 
  
}
