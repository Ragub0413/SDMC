import mongoose from "mongoose";
const staffSchema = mongoose.Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    middleName:{type: String},
    suffix: {type: String},
    contactNumber: {type: String,required: true},   
    email:{type:String},
    staffIdNumber:{type: Number, default: 0}
    
    
});
export default mongoose.model("Staff",staffSchema);