import User from '../db/schema/user.schema';

export const newUser = async(data)=>{
    return await new User({
        name: data.name,
        age: data.age,
        country: data.country
    }).save();
}

export const showUsers = async()=>{
    return await User.find({});
}

export const showUsersByCountry = async(data)=>{
    return await User.find({country: {$regex: data}});
}

export const showUsersById = async(id)=>{
    return await User.findOne({_id: id});
}

export const editUser = async(id, data)=>{
    await User.updateOne({_id: id}, {$set: data}).exec((err)=>{
        if(err){
            return err
        }
    });

    return await User.findOne({_id: id});
}

export const removeUser = async(id)=>{
    return await User.deleteOne({_id:id}).exec((err)=>{
        if(err){
            return err;
        }
    });
}