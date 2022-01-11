import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';


import {} from 'dotenv/config'



import userRouter from './routes/user.js';
import appointmentRouter from './routes/appointment.js';
import staffRouter from './routes/staff.js';

const app = express();


app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}));
app.use(cors());

app.use('/user',userRouter);
app.use('/appointment',appointmentRouter);
app.use('/staff',staffRouter);

app.get('/',(req,res)=>{
  res.send('Hello to SDMC World');
})

const CONNECTION_DB = process.env.ATLAS_URI;
const PORT = process.env.PORT || 5000;



mongoose.connect(CONNECTION_DB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));


//mongoose.set('useFindAndModify', false);
//app.listen(PORT, ()=>console.log(`Server running on port: ${PORT}`))