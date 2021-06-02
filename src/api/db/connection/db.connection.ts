import mongoose from 'mongoose';

class DatabaseConnection{
    public connection(){
        mongoose.Promise = global.Promise;
        const URL = process.env.MONGODB_URL;
        mongoose.connect(URL, {useNewUrlParser: true, useUnifiedTopology: true});
    }
}

export default DatabaseConnection;