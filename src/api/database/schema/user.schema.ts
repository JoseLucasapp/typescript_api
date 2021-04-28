import mongoose from 'mongoose';

import {User} from '../../interfaces/user.interfaces';

const userSchema = new mongoose.Schema({
    name: {
        type: String
    },
    age:{
        type: Number
    }
});

export default mongoose.model<User & mongoose.Document>('user', userSchema);