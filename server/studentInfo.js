const mongoose = require("mongoose");

const StudentInfoSchema = new mongoose.Schema(
    {
        option:Number
        
    },
    {
        collection: "StudentInfo",
});

mongoose.model("StudentInfo",StudentInfoSchema)