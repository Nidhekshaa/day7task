import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import router from './routes/userRouter.js';

const app= express();
app.use(bodyParser.json());
dotenv.config();

const PORT = process.env.PORT || 5000;
const MONGOURL = process.env.Mongo_URL;

app.use('/api/user',router);

mongoose
    .connect(MONGOURL)
    .then(()=>{
        console.log("Database connected");
        app.listen(PORT,()=>{
            console.log(`Server is running at port ${PORT}`)
        });
    })
    .catch((error)=>{
        console.log(error);
    })
    