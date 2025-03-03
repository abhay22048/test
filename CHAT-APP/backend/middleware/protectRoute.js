import jwt from "jsonwebtoken";
import User from "../models/user.model.js"; // Import the User model or adjust the import path accordingly

const protectRoute = async (req, res, next) => {
    try {
        // Get the token from the request cookies
        const token = req.cookies.jwt;

        // Check if token is present
        if (!token) {
            return res.status(401).json({ error: "Unauthorized - No Token Provided" });
        }

        // Verify the token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Check if token is valid
        if (!decoded) {
            return res.status(401).json({ error: "Unauthorized - Invalid Token" });
        }

        // Find the user by ID from the decoded token
        const user = await User.findById(decoded.userId).select("-password");

        // Check if user is found
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        // Attach the user object to the request for later use
        req.user = user;

        // Proceed to the next middleware or route handler
        next();
    } catch (error) {
        // Handle specific error scenarios
        if (error.name === "JsonWebTokenError") {
            return res.status(401).json({ error: "Unauthorized - Invalid Token" });
        } else if (error.name === "TokenExpiredError") {
            return res.status(401).json({ error: "Unauthorized - Token Expired" });
        } else {
            return res.status(500).json({ error: "Internal Server Error" });
        }
    }
};

export default protectRoute;

