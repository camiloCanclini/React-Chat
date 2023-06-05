import express from "express";
import { connectDb } from "./db.config.js";
import router from "./src/routes/router.js"
import {errorHandler, notFoundHandler, dbCheck} from "./src/controllers/errorHandlers.js"
import morgan from "morgan";

connectDb();

const app = express();

app.use(morgan('dev'));
app.use(express.json());

app.use(dbCheck) // middleware that's checking DB Connection
app.use(router) // Application Routes
app.use(errorHandler) // Error Handler for routes
app.use(notFoundHandler) // If the request url doesn't exists

export default app; 