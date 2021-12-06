
const appointmentSchema = mongoose.Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    middleName:{type: String},
    suffix: {type: String},
    contactNumber: {type: String,required: true},
    email:{type:String, required: true},
    concents:{type:String, required:true},
    TOC: {type:String, required: true}
});
export default mongoose.model("Appointment",appointmentSchema);