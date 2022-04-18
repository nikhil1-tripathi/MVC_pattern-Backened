const express = require("express");
const mongoose = require("mongoose");


const connect = ()=>{
    return mongoose.connect("mongodb://127.0.0.1:27017/mvc_assign")
}


const userController = require("./controllers/user.controller");
const studentController = require("./controllers/student.controller");
const evaluationController = require("./controllers/evaluation.controller");

const app = express();
app.use(express.json());
app.use("/users" , userController);
app.use("/students" , studentController);
app.use("/evaluations" , evaluationController);



app.listen(2345, async () =>{
    try{
       await connect();
       console.log("listening on port 2345")
    } catch(e){
        console.log(e.message);
    }
});