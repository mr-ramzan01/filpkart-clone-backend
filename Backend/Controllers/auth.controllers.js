import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import userModel from "../Models/user.model.js";
import dotenv from 'dotenv'

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET;

function generateToken(user) {
  return jwt.sign(
    {
      _id: user._id,
      name: user.name,
      email: user.email,
    },
    JWT_SECRET
  );
}

const login =async (req, res)=> {
  const user = req.body;

  let { email, password } = user;

  let existingUser = await userModel.findOne({
    email,
  });

  if (existingUser) {
    let match = bcrypt.compareSync(password, existingUser.password);

    if (match) {
      let token = generateToken(existingUser);

      return res.status(200).send({
        status: "success",
        name : existingUser.name,
        id : existingUser._id,
        token
      });
    } else {
      return res.status(400).send({
        status: "error",
        message: "Invalid Password",
      });
    }
  } else {
    return res.status(400).send({
      status: "error",
      message: "Invalid Email",
    });
  }
}

const getLoggedInUser =async (req, res)=> {
  const { user } = req;

  if (user) {
    return res.status(200).send({
      status: "success",
      data: user,
    });
  } else {
    return res.status(400).send({
      status: "error",
      message: "User is not Logged In",
    });
  }
}

const register =async (req, res)=> {
  const user = req.body;

  let { name, email, password } = user;

  let existingUser = await userModel.findOne({
    email,
  });

  if (existingUser) {
    return res.status(400).send({
      status: "error",
      message: "User already exists with the given email",
    });
  } else {
    password = bcrypt.hashSync(password);
    const check= email.split('@')
    const isAdmin = check[1]==='masaischool.com' 
    let user = await userModel.create({
      name,
      email,
      password,
      isAdmin
    });

    user = user.toJSON();

    delete user.password;

    return res.status(200).send({
      status: "success",
      data: user,
    });
  }
}

const checkUserExistance =async (req, res)=>{
  const user = req.body;

  let { email  } = user;

  let existingUser = await userModel.findOne({
    email,
  });

  if (existingUser) {
    return res.status(200).send({
      status: "Success",
      message: "User Exist",
    });
  }
  else{
    return res.status(400).send({
      status: "error",
      message: "User does not exist",
    });
  }
}



export {
  register,
  login,
  getLoggedInUser,
  checkUserExistance
};
