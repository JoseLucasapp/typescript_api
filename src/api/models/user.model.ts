import UserSchema from '../database/schema/user.schema';

import {User} from '../../config/types';

export async function registryNewUser(data: User): Promise<unknown> {

    const newUser = new UserSchema({
        name: data.name,
        age: data.age
    });

    return await newUser.save();
}