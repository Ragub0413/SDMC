import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import userRouter from './routes/user.js';
const app = express();


app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}));
app.use(cors());

app.use('/user',userRouter);

const CONNECTION_DB = 'mongodb+srv://SDMC:SantosDelCarmenMedicalClinicProgram@rest.kojhd.mongodb.net/SDMC?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000;


mongoose.connect(CONNECTION_DB, {useNewUrlParser:true, useUnifiedTopology:true})
    .then(()=>app.listen(PORT, ()=>console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(`${error} did not connect`));

//mongoose.set('useFindAndModify', false);
//app.listen(PORT, ()=>console.log(`Server running on port: ${PORT}`))