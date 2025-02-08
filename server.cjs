require('dotenv').config();
const express=require('express');
const cors = require('cors'); 
const connectDB= require('./db/connect.cjs');
const app=express();
const PORT= 5000;
const TaskRouter= require('./routes/routes.cjs');
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:5173'
}));

app.use(express.json());
app.use('/api', TaskRouter);

const startServer= async () =>{
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, ()=>{
      console.log(`Server is listening on port 5000...`);
    })
  } catch (error) {
    console.log(error);
  }
}

startServer();