import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  middleName: {type: String, required: true},
  suffix: {type: String},
  email: { type: String, required: true },
  password: { type: String, required: true },
  contactNumber:{type: String, required: true},
  address:{type: String},
  id: { type: String },
});

export default mongoose.model("User", userSchema);