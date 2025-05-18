import userModel from "../models/userSchema.js";
import { createuser } from "../services/userService.js";
 import {validationResult} from 'express-validator'


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
     console.log(error.message)
    res.status(400).send(error.message);
    
}
 }
 