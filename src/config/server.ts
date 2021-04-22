import express from 'express';
import dotenv from 'dotenv';
import {Connection} from '../api/database/connection/dbConnection';
import {Middlewares} from './middlewares';
import {Routes} from './routes';

import {Express} from './types';

export class Server{
    private app: Express;
    private readonly PORT = 3003;

    constructor(){
        dotenv.config();
        this.app = express();
        this.connection();
        this.middlewares();
        this.listen();
        this.routes();
    }

    getApp(): Express{
        return this.app;
    }

    private routes():void{
        new Routes(this.app);
    }

    private middlewares(): void{
        new Middlewares(this.app);
    }

    private connection(): void{
        new Connection();
    }

    private listen():void{
        this.app.listen(this.PORT,()=>{
            console.log(`server on at port ${this.PORT}`);
        });
    }
}