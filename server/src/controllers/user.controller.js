import userModel from "../models/userSchema.js";
import { createuser, findUser } from "../services/userService.js";
 import {validationResult} from 'express-validator'

//  register user
 export const signup = async(req,res) =>{
     const error = validationResult(req)
      if(!error.isEmpty()) {
        return res.status(400).json({error :error.array()});
      }
try {
     const user = await createuser(req.body);
      const token =  user.generateJWT()
     res.status(200).json({user,token});
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
     const user = await findUser(req.body);
     if(!user) return res.status(401).json({error :'Invalid credentials'})
      const token =  user.generateJWT()
       const userObj = user.toObject();  // convert to plain object
    delete userObj.password;  
     res.status(200).json({user :userObj,token});
} catch (error) {
     console.log("sign in -->",error.message)
    res.status(400).send(error.message);   
}
 }


 