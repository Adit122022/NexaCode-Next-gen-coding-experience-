import jwt from "jsonwebtoken"
import config from "../config/config.js";


export const protect = (req,res,next)=>{
    try {
    const token = req.headers.authorization?.split(" ")[1] ||req.cookies?.token;
     if(!token) return res.status(400).json({error:'ABE TU HAI KON 😾😾 ( UNAUTHORIZED USER )'})
 console.log("token middleware--->" , token)
 const decode = jwt.verify(token, config.JWT_SCERET)
 req.user = decode;
 next()
    
} catch (error) {
   console.log("Middleware -->" , error) 
    res.status(400).json({error:'ABE TU HAI KON 😾😾 ( UNAUTHORIZED USER )'}) 
}
}