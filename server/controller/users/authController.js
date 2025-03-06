import { User } from "../../models/User.js";
//packages
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import crypto from "crypto";
dotenv.config();
//signup
export const signUp = async (req, res) => {
  console.log("sign up called "); //sign up called
  try {
    const { email, username, password } = req.body;

    const signedupUser = await User.findOne({ email: email });
    if (signedupUser) {
      return res.status(400).send("email is registered already");
    }
    const hashedPassword = await bcrypt.hash(password, 10);
 

    const signupRes = await User.create({
      email: email,
      username: username,
      password: hashedPassword,
    });
    console.log("user signed up"); //user signed up
    res.status(201).send(signupRes);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send(`error registering user: email and username already exist  `);
  }
};
//login
export const login = async (req, res) => {
  console.log("log in called"); //login called in
  try {
    const { username ,password } = req.body;
   
    console.log(username, password, "email password in login");
    const user = await User.findOne({ username: username });
    if (!user) {
      return res.status(404).send("invalid email or password ");
    }

    const isMatch = await bcrypt.compare(password, user.password);
    console.log(isMatch, "ismatch");
    if (!isMatch) {
      return res.status(400).send("The password you entered is incorrect");
    }
    const accesstoken = jwt.sign({ userId: user._id }, process.env.JWT_KEY, {
      expiresIn: "15m",
    });
    const refreshtoken = crypto.randomBytes(40).toString("hex")

    console.log(accesstoken, "signed access token");
    res.cookie("accesstoken", accesstoken, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      // maxAge: 60 * 60 * 1000,
    });
    res.cookie("refreshtoken", refreshtoken, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      // maxAge: 60 * 60 * 1000,
    });
    res.cookie("userId",user._id,{
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      // maxAge: 60 * 60 * 1000,
    })
    console.log("user logged in "); //user logged in
    res
      .status(200)
      .json({
        accesstoken,
        refreshtoken,
        msg: "user logged in ",
        userId: user._id,
      });
  } catch (error) {
    console.log(error);
    res.status(500).send(`error registering user: ${error.message}`);
  }
};
