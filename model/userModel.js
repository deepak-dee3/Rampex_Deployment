import mongoose from "mongoose";

const userSchema = mongoose.Schema({

    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,


    },
    address:{
        type:String
    }
}

    
)

export default mongoose.model("users",userSchema);