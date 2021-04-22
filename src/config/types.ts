import express from 'express';

export type Express = express.Application;

export {Request, Response} from 'express';

export type User = {
    name: string,
    age: number
}