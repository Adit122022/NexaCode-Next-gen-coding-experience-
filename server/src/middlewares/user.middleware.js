import jwt from "jsonwebtoken"
import config from "../config/config.js";
import redisClient from "../services/redis.service.js";


export const protect = async(req,res,next)=>{
    try {
    const token = req.headers.authorization?.split(" ")[1] ||req.cookies?.token;
     if(!token) return res.status(400).json({error:'ABE TU HAI KON 😾😾 ( UNAUTHORIZED USER )'})

//  redis blacklisted or not
const isBlackListed = await redisClient.get(token);
 if(isBlackListed) {
    return res.status(400).json({error :"Blacklisted user 🤣🤣🤣"})
    res.cookies('token' ," ")
}

//  console.log("token middleware--->" , token)   --> FOR DEBUGGING
 const decode = jwt.verify(token, config.JWT_SCERET)
 req.user = decode;
 next()
    
} catch (error) {
   console.log("Middleware -->" , error) 
    res.status(400).json({error:'ABE TU HAI KON 😾😾 ( UNAUTHORIZED USER )'}) 
}
}