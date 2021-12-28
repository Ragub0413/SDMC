import express from 'express';
import mongoose from 'mongoose';

import appointment from '../models/appointment.js';

const router = express.Router();


export const getAppointments = async(req,res)=>{
    try{
        const appointmentSched = await appointment.find();
        res.status(200).json(appointmentSched);

    }
    catch(error){
        res.status(404).json({message: error.message});
    }
};
export const createAppointment = async(req,res)=>{
  const appoints = req.body;
  const newAppoint = new appointment({ ...appoints, reqAppoint:req.userId, dateAndtime: new Date().toISOString()})

  try{
      await newAppoint.save();
      res.status(201).json(newAppoint);
  }catch(error){
      res.status(409).json({message:error.message});
  }

};
export default router;