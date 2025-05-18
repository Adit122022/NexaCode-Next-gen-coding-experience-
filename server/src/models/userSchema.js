import mongoose from "mongoose";
import jwt from 'jsonwebtoken'
 import bcrypt from 'bcrypt'
import config from "../config/config.js";
const userSchema  = new mongoose.Schema({
    email:{ type:String , required:true , unique:true , trim:true, lowerCase :true,minLength :[6 , 'Email must be at least 6 characters long'] , maxLength:[50, "Email must be  longer than 50 characters"]} ,
    password:{ type:String, select:false,}
})

 userSchema.statics.hashPassword = async function(password){
    return await bcrypt.hash(password,10);
 }
 userSchema.methods.isValidPassword =async function(password){
    return await bcrypt.compare(password, this.password)
 }
 userSchema.methods.generateJWT =  function(){
    return  jwt.sign({email : this.email} , config.JWT_SCERET);
 }
  const userModel = mongoose.model("user",userSchema);

   export default userModel;