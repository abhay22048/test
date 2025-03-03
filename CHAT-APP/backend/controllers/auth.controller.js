// import user from "../models/user.model.js";
// export const signup =  async(req, res) => {
// try {
//     const {fullName, userName, password, confirmPassword, gender} = req.body;

//     if (password !== confirmPassword) {
//         return res.status(400).json({error:"passwords dosen't Match"});
//     }

//     const user = await user.findOne({username});

//     if(user){
//          return res.status(400).json({error: "username alredy exists"});    
//     }

//     //HASH  PASSWORD HERE 

//     //https://avatar-placeholder.iran.liara.run/document

//     const boyProfilePic = 'https://avatar.iran.liara.run/public/boy?username=${username}t'
//     const girlProfilePic = 'https://avatar.iran.liara.run/public/girl?username=${username}t'

//     const newUser= new user({
//         fullName,
//         userName,
//         password,
//         gender,
//         profilPic: gender ==="male" ? boyProfilePic : girlProfilePic
//     })

//     await newUser.save;
    
//     res.status(201).json({
//         _id:newUser._id,
//         fullName: newUser.fullName,
//         profilPic : newUser.profilPic

//     })
    
// } catch (error) { 
//     console.log("Error in Signup controller", error.message)
//     res.status(500).json({error:"Internal server error"})
//  }
   
// };

// export const login = (req,res) => {
//     console.log("loginUser");
// };

// export const logout = (req,res) => {
//     console.log("logoutUser");
// };




import bcrypt from "bcryptjs";
import User from '../models/user.model.js'; // Assuming your user model file is located in the 'models' directory
import GenerateTokenAndSetCokies from "../utils/generateToken.js";


export const signup = async (req, res) => {
    try {
        const { fullName, userName, password, confirmPassword, gender } = req.body;

        if (password !== confirmPassword) {
            return res.status(400).json({ error: "Passwords don't match" });
        }

        const existingUser = await User.findOne({ userName: userName });

        if (existingUser) {
            return res.status(400).json({ error: "Username already exists" });
        }

        // HASH PASSWORD HERE 
        const salt =  await bcrypt.genSalt(10);
        const hashedPassword =  await bcrypt.hash(password, salt);

        // Assuming gender is either "male" or "female"
        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${userName}t`;
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${userName}t`;

        const newUser = new User({
            fullName,
            userName,
            password: hashedPassword,
            gender,
            profilePic: gender === "male" ? boyProfilePic : girlProfilePic
        });

      if(newUser){
        //Generate JWT token here
        GenerateTokenAndSetCokies(newUser._id,res);
        await newUser.save();

        res.status(201).json({
            _id: newUser._id,
            fullName: newUser.fullName,
            userName: newUser.userName,
            profilePic: newUser.profilePic
        });
      } else{
        res.status(400).json({ error: "Invaid user data" });
      }

    } catch (error) {
        console.log("Error in Signup controller", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
};

// export const login = async (req, res) => {
//     try {
//         const {userName,password}= req.body;
//         const existingUser= await User .findOne({userName});
//         const isPasswordCorrect = await bcrypt.compare(password, user?.password || "");

//         if(!existingUseruser || !isPasswordCorrect){
//             return res.status(400).json({error:"Invalid userName or password"});
//         }

//         GenerateTokenAndSetCokies(User._id, res);
//         res.status(200).json({
//             _id: user._id,
//             fullName: User.fullName,
//             userName: User.userName,
//             profilePic: User.profilePic,

//         });
        
//     } catch (error) {
//         console.log("Error in login controller", error.message);
//         res.status(500).json({ error: "Internal server error" });
        
//     }
// };


export const login = async (req, res) => {
    try {
        const { userName, password } = req.body;
        
        const existingUser = await User.findOne({ userName });
        const isPasswordCorrect = await bcrypt.compare(password, existingUser?.password || "");
        
        if (!existingUser || !isPasswordCorrect) {
            return res.status(400).json({ error: "Invalid username or password" });
        }

        // Generate Token and Set Cookies
        // Assuming this function is defined elsewhere
        GenerateTokenAndSetCokies(existingUser._id, res);

        res.status(200).json({
            _id: existingUser._id,
            fullName: existingUser.fullName,
            userName: existingUser.userName,
            profilePic: existingUser.profilePic,
        });
        
    } catch (error) {
        console.error("Error in login controller", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
};


export const logout =  (req, res) => {
    try {
        res.cookie("jwt","",{maxAge:0});
        res.status(200).json({ error: "Logged out sucessfully"});

    } catch (error) {
        console.error("Error in login controller", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
};
