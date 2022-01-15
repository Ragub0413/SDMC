import express from 'express';
import mongoose from 'mongoose';
import StaffInformation from '../models/staff.js';
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"
const secret='test';

const router = express.Router();

export const createNewStaff = async(req,res)=>{
   const {firstName,lastName,suffix,contactNumber,email,position,StaffId,password,level} = req.body;
   try{
       const oldUser = await StaffInformation.findOne({StaffId});
       if(oldUser) return res.status(400).json({message:'Staff already exist'});
       const hashedPassword = await bcrypt.hash(password,12);
       const result = await StaffInformation.create({ email,lastName,firstName,suffix,contactNumber,position,StaffId,password: hashedPassword,level});
       res.status(201).json({ result});
    } catch (error) {
        res.status(500).json({ message: "Something went wrong" });
        
        console.log(error);
      }
}

export const signinStaff = async (req, res) => {
    const { StaffId, password } = req.body;
  
    try {
      const oldUser = await StaffInformation.findOne({ StaffId });
  
      if (!oldUser) return res.status(404).json({ message: "User doesn't exist" });
  
    const isPasswordCorrect = await bcrypt.compare(password, oldUser.password);
  
      if (!isPasswordCorrect) return res.status(400).json({ message: "Invalid credentials" });
  
      const token = jwt.sign({ StaffId: oldUser.StaffId, id: oldUser._id }, secret, { expiresIn: "1h" });
  
      res.status(200).json({ result: oldUser, token });
    }
     catch (err) {
      res.status(500).json({ message:err.message});
    }
  };


export const getStaffinfo = async(req,res)=>{
    try{
        const staffInformation = await StaffInformation.find();
        res.status(200).json(staffInformation);

    }
    catch(error){
        res.status(404).json({message: error.message});
    }
};
export const deleteStaffData = async (req,res) => {
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No id ');

    await StaffInformation.findByIdAndRemove(id).exec();
    res.json({message: "Deleted"});
}
export const updateStaff = async (req,res)=>{
    const {id} = req.params;
    const {firstName,lastName,suffix,contactNumber,email,position} = req.body;
    
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No staff that has this id`);
    const updateStaff = {firstName,lastName,suffix,contactNumber,email,position, _id: id};
    await StaffInformation.findByIdAndUpdate(id, updateStaff,{new: true});
    res.json(updateStaff);
} 