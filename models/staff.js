import mongoose from "mongoose";
const staffSchema = mongoose.Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    middleName:{type: String},
    suffix: {type: String},
    contactNumber: {type: String,required: true},   
    email:{type:String},
    id: { type: String },
    
    
});
var StaffInformation = mongoose.model("Staff",staffSchema);
export default StaffInformation;