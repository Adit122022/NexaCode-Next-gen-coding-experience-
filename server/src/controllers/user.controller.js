import userModel from "../models/userSchema.js";
import { createuser, findUser } from "../services/user.service.js";
 import {validationResult} from 'express-validator'
import { setTokenCookie } from "../utils/setTokenCookie.js";

//  register user
 export const signup = async(req,res) =>{
     const error = validationResult(req)
      if(!error.isEmpty()) {
        return res.status(400).json({error :error.array()});
      }
try {
     const user = await createuser(req.body);  // create user is a service
      const token =  user.generateJWT()
       const userObj = user.toObject();
    delete userObj.password;
       setTokenCookie(res, token);
     res.status(200).json({user:userObj,token});
} catch (error) {
     console.log( "sign up -->" ,error.message)
    res.status(400).send(error.message);
    
}
 }
//   login user
 export const signin = async(req,res) =>{
     const error = validationResult(req)
      if(!error.isEmpty()) {
        return res.status(400).json({error :error.array()});
      }
try {
     const user = await findUser(req.body);  // finduser is a service
     if(!user) return res.status(401).json({error :'Invalid credentials'})
      const token =  user.generateJWT()
       const userObj = user.toObject();  // convert to plain object
    delete userObj.password;  
      setTokenCookie(res, token);
     res.status(200).json({user :userObj,token});
} catch (error) {
     console.log("sign in -->",error.message)
    res.status(400).send(error.message);   
}
 }

//  get user 

export const profile =(req,res)=>{

      try {
           const user = req.user
          res.status(200).json({user})
          
      } catch (error) {
           console.log("profile-->",error.message)
    res.status(400).send(error.message);   
      }
}


 