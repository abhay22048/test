import user from "../models/user.model.js";

export const getUsersForSidebar = async (req, res) => {
    try {
        const loggedInUserId = req.user._id

        const filteredUsers = await user.find({_id:{$ne: loggedInUserId}}).select("-password");

        res.status(200).json(filteredUsers);
        
    } catch (error) {
        console.error("Error in getUSerForSidebar: ",error.message)
        res.status(500).json({error:"Internal server error"});
        
    }
}