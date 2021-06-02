import express from 'express';
import * as dotenv from 'dotenv'
import cors from 'cors';

import Routes from './routes';
import DatabaseConnection from '../api/db/connection/db.connection';

class App {
    public express: express.Application;
    private router: express.Router;
    constructor(){
        dotenv.config();
        this.express = express();
        new DatabaseConnection().connection();
        this.middlewares();
        this.routes();
    }

    private middlewares():void{
        this.express.use(express.json());
        this.express.use(express.urlencoded({ extended: true }));
        this.express.use(cors());
    }

    private routes(): void{
        this.router = express.Router();
        this.express.use('/api', this.router);
        new Routes(this.router);
    }
}

export default new App().express;