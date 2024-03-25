// require('dotenv').config()
import dotenv from 'dotenv';
import connectDB from "./db/index.js";
import { app } from './app.js';

dotenv.config({
    path: './env'
})

// connection with mongoDB connectDB() after connection we have to listen to port through express
connectDB()
.then(() => {
    app.on("error", (error) => {
        console.log("Server Error:", error );
        throw error;
    })

    app.listen(process.env.PORT || 8000, () => {
        console.log(` server is running at: ${process.env.PORT}`)
    })
})
.catch((err) =>{
    console.log("MONGODB CONNECTION FAILED !!", err);
})





/*
import express from "express";
const app = express();

(async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", (error) => {
            console.log("Error: ",error);
            throw error;
        });

        app.listen(process.env.PORT, () => {
            console.log(`app is listening on ${process.env.PORT}`);
        });
        
    } catch (error) {
        console.error("Error: ", error)
        throw error
    }
})();

*/