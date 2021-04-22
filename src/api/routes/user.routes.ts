import {Express} from '../../config/types';

import UserController from '../controllers/user.controller';

export class UserRoutes{

    private readonly app: Express;

    constructor(app: Express){
        this.app = app;
        this.appRoutes(this.app);
    }

    private appRoutes(app: Express) :void{

        app.post('/user', UserController.registryNewUser);

    }
}