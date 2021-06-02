import express from 'express';

import UserController from '../controllers/user.controllers';

class UserRoutes{
    constructor(app: express.Router){
        this.routes(app);
    }
    
    private routes(app: express.Router):void{
        app.get('/user', UserController.showUsers);
        app.get('/user/:id', UserController.showUsersById);
        app.get('/user/country/:country', UserController.showUsersByCountry);
        app.post('/user', UserController.newUser);
        app.put('/user/:id', UserController.editUser);
        app.delete('/user/:id', UserController.removeUser);
    }
}

export default UserRoutes;