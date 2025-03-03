import jwt  from "jsonwebtoken";

const GenerateTokenAndSetCokies = (userId, res)=> {
    const token = jwt.sign({userId}, process.env.JWT_SECRET,{
        expiresIn: '15d'
    });

    res.cookie("jwt",token,{
        maxAge: 15 * 24 * 60 * 60 * 1000,
        httpOnly:true, //prevent XSS attacks cross-side scripting  attacks
        sameSite: "strict", //CSFR attacks cross-site request  foregery attacks
        secure: process.env.NODE_ENV !== "developement"
    });
};

export default GenerateTokenAndSetCokies;