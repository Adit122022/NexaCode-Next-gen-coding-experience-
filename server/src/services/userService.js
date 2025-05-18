import userModel from "../models/userSchema.js";

 export const createuser =async({email,password})=>{
if(!email ||!password)  throw new Error('Email and password are required !');
const hashpassword = await userModel.hashPassword(password)
const user = await userModel.create({ email, password :hashpassword})
 return user;
 }