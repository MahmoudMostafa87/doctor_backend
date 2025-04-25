const express=require("express");
const mongoose=require("mongoose");
const home=require("./routers/home");
const doctor=require("./routers/doctor");
const student=require("./routers/student");
const app=express();

mongoose.connect("mongodb+srv://mahmoud2:NQez0JIVuBugWjr5@cluster0.owykd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

app.use(express.json());

app.use(home)
app.use(doctor)
app.use(student)
app.use((err,req,res,next)=>{
    console.log(err);
    next();
})





app.listen(3000);