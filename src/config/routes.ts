import {Express} from '../api/types/express.types';

import {UserRoutes} from '../api/routes/user.routes';

export class Routes{

    private readonly app: Express;

    constructor(app: Express){
        this.app = app;
        new UserRoutes(this.app);
    }
}