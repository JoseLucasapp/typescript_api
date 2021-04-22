import {Request, Response} from '../../config/types';

import {registryNewUser} from '../models/user.model';

class UserController{
    async registryNewUser(req: Request, res: Response): Promise<void>{

        const data = req.body;

        try{
            const user = await registryNewUser(data);
            res.status(200).json(user);
        }catch(err){
            res.status(500).json(err);
        }
    }
}

export default new UserController();