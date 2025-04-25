const mongoose=require("mongoose");

const doctorSchema=new mongoose.Schema({
    name:{
        type:String,
    },
    age:{
        type:Number,
    },
    phone:{
        type:String,
    },
});


const Doctor=mongoose.model("Doctor",doctorSchema);


module.exports=Doctor;