import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import mongoose from 'mongoose';

import UserModal from '../models/user.js'
const secret='test';

import user from "../models/user.js";

export const getInformations = async (req,res)=>{
  try{
    const clientInformation = await user.find();
    res.status(200).json(clientInformation);
  }
  catch(error){
    res.status(404).json({message: error.message});
  }
}

export const getInformation = async (req,res)=>{
  const {id} = req.params;

  try{
    const cInfo = await user.findById(id);
    res.status(200).json(cInfo);
  }
  catch(error){
    res.status(404).json({message: error.message});
  }
}


export const updateInformation = async (req,res) =>{
  const {id} = req.params;
  const {name,email,password,contactNumber} = req.body;

  if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No client with id: ${id}`);

  const updatedInformation = {name, email, contactNumber, password, _id: id};

  await user.findByIdAndUpdate(id,updatedInformation,{new: true});
  res.json(updatedInformation);
}

export const signin = async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const oldUser = await UserModal.findOne({ email });
  
      if (!oldUser) return res.status(404).json({ message: "User doesn't exist" });
  
      const isPasswordCorrect = await bcrypt.compare(password, oldUser.password);
  
      if (!isPasswordCorrect) return res.status(400).json({ message: "Invalid credentials" });
  
      const token = jwt.sign({ email: oldUser.email, id: oldUser._id }, secret, { expiresIn: "1h" });
  
      res.status(200).json({ result: oldUser, token });
    } catch (err) {
      res.status(500).json({ message: "Something went wrong" });
    }
  };

export const signup = async (req,res)=>{
    const {email, password, firstName, lastName, middleName,suffix,contactNumber}= req.body;
    try{
        const oldUser = await UserModal.findOne({email});
        if(oldUser) return res.status(400).json({message: "User already exist"});
        const hashedPassword = await bcrypt.hash(password,12);
        const result = await UserModal.create({ contactNumber, email, password: hashedPassword, lastName,suffix,firstName,middleName });

        const token = jwt.sign( { email: result.email, id: result._id }, secret, { expiresIn: "1h" } );

        res.status(201).json({ result, token });
    }
    catch (error) {
        res.status(500).json({ message: "Something went wrong" });
        
        console.log(error);
      }
};