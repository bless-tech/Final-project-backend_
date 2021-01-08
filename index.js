const express = require('express');
const mongoose= require('mongoose');
const userRouter = require('./controllers/User'); 
require('dotenv').config();

const app = express();
app.use(express.json());

const config={
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex: true
    
}

mongoose.connect(process.env.MONGODB_URI,config)
.then(
    ()=>{
        console.log("Successfully connected to MongoDB")
    }
)
.catch(err=>{
    console.log("Some problem occured", err)
})


app.use('/user',userRouter);


app.listen(process.env.PORT,()=>{
    console.log("My app is running on this server on port",process.env.PORT)
})

