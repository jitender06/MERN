import express from express;
import cors from "cors";
import cookieParser from "cookie-parser";
const app = express();

// cors configuration
app.use(cors({
    origin: process.env.COES_ORIGIN,
    credentials: true
}))

// to accept limites json data from frontend (form) 
app.use(express.json({ limit:"16kb" }))

// to accept data for url
app.use(express.urlencoded({extended : true, limit:"16kb"}))

// public assets like pdf, images, favicon
app.use(express.static("public")) 

// secure cookies user ka browser ma rhakna ka liya  
app.use(cookieParser())

export {app}; 