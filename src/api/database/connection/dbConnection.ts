import mongoose from 'mongoose';

export class Connection{
    constructor(){
        mongoose.connect(process.env.MONGO_URL || '', {useNewUrlParser: true, useUnifiedTopology: true});
    }
}