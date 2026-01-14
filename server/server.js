import express from 'express'
import { connectDB } from './db/index.js';
import dotenv from 'dotenv'

dotenv.config({
    path: './.env'
})

const app = express();
const PORT = process.env.PORT || 5000


connectDB()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is running at port: ${PORT}`)
            console.log("MongoDB Connection successful");
            
        })
    })
    .catch(error => {
        console.log("Some error occured");
    }) 

