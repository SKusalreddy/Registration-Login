const express = require('express');
const app = express();

const mongoose = require('mongoose')
app.use(express.json());
const cors = require("cors");
app.use(cors());

const mongoUrl = 
    "mongodb+srv://reddy:kusalreddysanagala@cluster0.djxnvnt.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(mongoUrl,{
    useNewUrlParser:true,
}).then(()=>{
    console.log("Connected to Database (StudentInfo)");
}).catch((e)=>
    console.log(e)
);

require('./studentInfo')

const Student = mongoose.model("StudentInfo");


app.post("/data-dropdown",async(req,res)=>{
    const {option} = req.body;

    try {
        
        await Student.insertMany({
            option,
    
        });
        res.send({status:"ok"});
    } catch (error) {
        res.send({status:"error occured"});
    }
});


app.listen(7000,()=>{
    console.log('Server started');
});