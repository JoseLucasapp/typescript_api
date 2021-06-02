import express from 'express';

import UserRoutes from '../api/routes/user.routes';

class Routes {
    constructor(app: express.Router){
        new UserRoutes(app);
    }
}

export default Routes;