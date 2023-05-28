import express from "express";
import morgan from "morgan";
import { dbIsConnected, connectDb } from "./db.config.js";

connectDb();

const app = express();

app.use(morgan('dev'));
app.use(express.json());

app.use(dbIsConnected)

app.get('/',(req, res)=> res.send('Hola estoy funcionando'))

export default app; 