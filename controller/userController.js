import userModel from "../model/userModel.js";

// export const create = async(req,res)=>{

//     try{
//         let userdata = new userModel(req.body);
//         const {email} = userdata;

//         const userExist = await userModel.findOne({email});

//         if(userExist)
//         {
//             return res.status(400).json({message:"user already exists"})
//         }
//         await userdata.save();
//         return res.status(200).json({userdata})
//     }
//     catch{

//         res.status(500).json({error:"internal server error"})

//     }
// }
export const create = async (req, res) => {
    try {
        const { name, email } = req.body;

        // Validate required fields
        if (!name || !email) {
            return res.status(400).json({ error: "Name and email are required" });
        }

        // Check if user already exists
        const userExist = await userModel.findOne({ email });
        if (userExist) {
            return res.status(400).json({ message: "User already exists" });
        }

        // Create and save the new user
        let userdata = new userModel(req.body);
        await userdata.save();

        return res.status(200).json({ userdata });
    } catch (err) {
        res.status(500).json({ error: "Internal server error" });
    }
};


export const fetch = async(req,res) =>{
    try{

        //res.send("hello world")
       const users = await userModel.find();

       if(users.length == 0)
       {
        return res.status(404).json({message:"no use"})
       }
       res.status(200).json({users})

    }
    catch(err){

        res.status(500).json({error:"internal server error"})

    }
}

// export const update = async(req,res) =>{
//     try{

//         const id = req.params.id;
//         const userExists = await userModel.findOne({_id:id});

//         if(userExists)
//         {
//             return res.staus(404).json({message:"user already"})
//         }

//         const updateUser = await userModel.findByIdAndUpdate(id,req.body,{new:true});

//        res.status(200).json({updateUser});
      

//     }
//     catch(err){

//         res.status(500).json({error:"internal server error"})

//     }
// }

export const update = async (req, res) => {
    try {
        const id = req.params.id;
        const userExists = await userModel.findById(id); // Corrected

        if (!userExists) { // Check if user exists
            return res.status(404).json({ message: "User not found" });
        }

        const updateUser = await userModel.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json({ updateUser });

    } catch (err) {
        res.status(500).json({ error: "Internal server error" });
    }
};


export const deleteUser = async (req, res) => {
    try {
        const id = req.params.id;

        // Check if user exists
        const userExists = await userModel.findById(id);
        if (!userExists) {
            return res.status(404).json({ message: "User not found" });
        }

        // Delete the user
        await userModel.findByIdAndDelete(id);

        // Send success response
        res.status(200).json({ message: "User deleted successfully" });
    } catch (err) {
        res.status(500).json({ error: "Internal server error" });
    }
};

