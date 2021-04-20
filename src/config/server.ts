import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';

export class Server{
    private app: express.Application;
    private PORT = 3003;

    constructor(){
        dotenv.config();
        this.app = express();
        this.middlewares();
        this.database();
        this.listen();
    }

    getApp(): express.Application{
        return this.app;
    }

    private listen():void{
        this.app.listen(this.PORT,()=>{
            console.log(`server on at port ${this.PORT}`);
        });
    }

    private middlewares():void{
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(express.json());
        this.app.use(cors());
    }

    private database():void{
        const URL: string = process.env.MONGO_URL || '';
        mongoose.connect(URL, {useNewUrlParser: true, useUnifiedTopology: true});
    }
}