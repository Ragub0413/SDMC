import express from 'express';
import mongoose from 'mongoose';

import appointment from '../models/appointment';

const router = express.Router();

export const getAppointments = async(req,res)=>{
    try{
        const appointmentSched = await appointment.find();
        res.status(200).json(appointmentSched);

    }
    catch(error){
        res.status(404).json({message: error.message});
    }
}
export const createAppointment = async(req,res)=>{
   const {firstName,lastName,middleName,suffix,email,contactNumber,concents,TOC} = req.body;
   try{
       const result = await appointment.create({email,firstName,lastName,middleName,suffix,contactNumber,concents,TOC});
       res.status(201).json({result});
   }
   catch(error){
       res.status(500).json({message: error.message});
   }
}