import express from 'express';

import mongoose from 'mongoose';

import StaffInfo from '../models/staff.js'

const router = express.Router();

export const createNewStaff = async(req,res)=>{
   const {firstName,lastName,suffix,contactNumber,email,position,staffIdNumber} = req.body;
   try{
       const oldUser = await StaffInfo.findOne({email});
       if(oldUser) return res.status(400).json({message:'Staff already exist'});
       const result = await StaffInfo.create({ email,lastName,firstName,suffix,contactNumber,position});
       res.status(201).json({ result});
    } catch (error) {
        res.status(500).json({ message: "Something went wrong" });
        
        console.log(error);
      }
}
export const getStaffinfo = async(req,res)=>{
    try{
        const staffInformation = await StaffInfo.find();
        res.status(200).json(staffInformation);

    }
    catch(error){
        res.status(404).json({message: error.message});
    }
};
export const deleteStaff = async(res,req)=>{
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No Staff with id ${id}`);
    await StaffInfo.findOneAndRemove(id);
    res.json({message: "Staff deleted successfully"});
};