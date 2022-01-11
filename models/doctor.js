import mongoose from "mongoose";
const doctorScheme = mongoose.Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    middleName:{type: String},
    suffix: {type: String},
    contactNumber: {type: String,required: true},   
    email:{type:String},
    id: { type: String },
    StaffId:{type: Number},
    password:{type: String},
    
    
    
});
var DoctorInformation = mongoose.model("Doctor",doctorScheme);
export default DoctorInformation;