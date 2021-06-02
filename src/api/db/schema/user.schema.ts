import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name:{
        type: String
    },
    age:{
        type: Number
    },
    country:{
        type: String
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
});

export default mongoose.model('user', userSchema);