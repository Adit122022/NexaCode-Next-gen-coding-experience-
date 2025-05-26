import userModel from "../models/userSchema.js";

export const authUser = async ({ email, password }) => {
  if (!email || !password) throw new Error("Email and password are required!");

  let user = await userModel.findOne({ email }).select("+password");
  let message;

  if (user) {
    const isMatch = await user.isValidPassword(password);
    if (!isMatch) throw new Error("Invalid credentials");
    message = "Login successful";
  } else {
    const hashedPassword = await userModel.hashPassword(password);
    user = await userModel.create({ email, password: hashedPassword });
    message = "User registered";
  }

  // Return both user and message (without modifying user document)
  return { user, message };
};
