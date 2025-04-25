const mongoose=require("mongoose");

const studentSchema=new mongoose.Schema({
    name:{
        type:String,
    },
    age:{
        type:Number,
    },
    level:{
        type:String,
    },
    address:{
        type:String,
    }
})



const Stuednt=mongoose.model("Student",studentSchema);


module.exports=Stuednt



//addresses 
//"123 Main St, Apt 4B, New York"

// "45 West/21st Street, Floor 3"

// "Building 5, Office #203"
