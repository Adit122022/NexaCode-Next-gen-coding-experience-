import userModel from "../models/userSchema.js";

 export const createuser =async({email,password})=>{
if(!email ||!password)  throw new Error('Email and password are required !');
const hashpassword = await userModel.hashPassword(password)
const user = await userModel.create({ email, password :hashpassword})
 return user;
 }
 export const findUser =async({email,password})=>{
if(!email ||!password)  throw new Error('Email and password are required !');
const user = await userModel.findOne({ email}).select('+password')
const isMatch = await user.isValidPassword(password);
 if(!isMatch) return res.status(401).json({error :'Invalid credentials'})

 return user;
 }