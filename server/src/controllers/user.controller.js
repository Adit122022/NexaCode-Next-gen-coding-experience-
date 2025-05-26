import userModel from "../models/userSchema.js";
import redisClient from "../services/redis.service.js";
import { setTokenCookie } from "../services/setCookies.service.js";
 import {validationResult} from 'express-validator'
  import {authUser} from '../services/user.service.js'


//  if user present then --> login
//  if user not present then --> register
export const authenticateUser = async (req, res) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return res.status(400).json({ error: error.array() });
  }

  try {
    const {user , message} = await authUser(req.body); // ✅ Service call
    const token = user.generateJWT();

    const userObj = user.toObject();
    delete userObj.password;

    setTokenCookie(res, token);
    res.status(200).json({ user: userObj, token , message });
  } catch (error) {
    console.error("auth -->", error.message);
    res.status(400).json({ error: error.message });
  }
};


 export const logout = async (req, res) => {
  try {
    const token = req.cookies?.token || req.headers?.authorization?.split(' ')[1];

    if (!token) {
      return res.status(400).json({ message: 'No token found to logout.' });
    }

    // Add token to blacklist (simulate invalidation)
    await redisClient.set(token, 'logout', 'EX', 60 * 60 * 24); // 1 day
 
    // Clear cookie
    res.clearCookie('token', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
    });

    return res.status(200).json({ message: 'Logged out successfully!' });
  } catch (error) {
    console.error('Logout error:', error.message);
    return res.status(500).json({ message: 'Something went wrong during logout.' });
  }
};


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


 