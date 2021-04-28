import express from 'express';
import cors from 'cors';

import {Express} from '../api/types/express.types';

export class Middlewares{

    constructor(app: Express){
        app.use(express.urlencoded({ extended: true }));
        app.use(express.json());
        app.use(cors());
    }
}