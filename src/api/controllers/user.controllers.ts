import {Request, Response} from 'express';

import {newUser, showUsers, showUsersByCountry, showUsersById, editUser, removeUser} from '../models/user.model';

class UserController{
    async newUser(req: Request, res:Response): Promise<Response>{
        const data = req.body;
        try{
            const user = await newUser(data);
            return res.status(200).json({msg: 'Success', data: user});
        }catch(err){
            return res.status(500).json({msg: 'Error', error: err});
        }
    }

    async showUsers(req: Request, res:Response): Promise<Response>{
        try{
            const user = await showUsers();
            return res.status(200).json({msg: 'Success', data: user});
        }catch(err){
            return res.status(500).json({msg: 'Error', error: err});
        }
    }

    async showUsersByCountry(req: Request, res:Response): Promise<Response>{
        const {country} = req.params;
        try{
            const user = await showUsersByCountry(country);
            return res.status(200).json({msg: 'Success', data: user});
        }catch(err){
            return res.status(500).json({msg: 'Error', error: err});
        }
    }

    async showUsersById(req: Request, res:Response): Promise<Response>{
        const {id} = req.params;
        try{
            const user = await showUsersById(id);
            return res.status(200).json({msg: 'Success', data: user});
        }catch(err){
            return res.status(500).json({msg: 'Error', error: err});
        }
    }

    async editUser(req: Request, res:Response): Promise<Response>{
        const {id} = req.params;
        const data = req.body;
        try{
            const user = await editUser(id, data);
            return res.status(200).json({msg: 'Success', data: user});
        }catch(err){
            return res.status(500).json({msg: 'Error', error: err});
        }
    }

    async removeUser(req: Request, res:Response): Promise<Response>{
        const {id} = req.params;
        try{
            const user = await removeUser(id);
            return res.status(200).json({msg: 'Success', data: 'Deleted'});
        }catch(err){
            return res.status(500).json({msg: 'Error', error: err});
        }
    }
}

export default new UserController();