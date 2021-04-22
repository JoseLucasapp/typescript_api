import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: {
        type: String
    },
    age:{
        type: Number
    }
});

export default mongoose.model('user', userSchema);