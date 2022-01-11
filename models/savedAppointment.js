import mongoose from "mongoose";
const saveAppointmentSchema = mongoose.Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    middleName:{type: String},
    suffix: {type: String},
    contactNumber: {type: String,required: true},   
    email:{type:String},
    concerns:{type:String},
    reqAppoint:{type:String},
    concernType:{type:String},
    dateAndTime: {type: Date, default: new Date()},
    
});
export default mongoose.model("Appointment",saveAppointmentSchema);