import UserSchema from '../database/schema/user.schema';

import {User} from '../interfaces/user.interfaces';

export async function registryNewUser(data: User): Promise<User> {

    const newUser = new UserSchema({
        name: data.name,
        age: data.age
    });

    return await newUser.save();
}