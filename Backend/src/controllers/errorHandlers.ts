import { Response, Request, NextFunction } from "express";
import mongoose from "mongoose";

export const errorHandler = (
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
)=>{
  if (err.message) {
    return res.status(500).json({ error: err.message })
  }else{
    return res.status(500).json({ error: "Internal Server Error" })
  }
}
export const notFoundHandler = (_req: Request, res: Response) => {
  return res.json({
    status: "404",
    message: "Resource Not Found!",
  });
};

export const dbCheck = (_req: Request, _res: Response, next: NextFunction) => {
    if (mongoose.connection.readyState != 1) {
      next(new Error("Error Database Is Not Connected"))
    }else{
      next()
    } 
    
  }