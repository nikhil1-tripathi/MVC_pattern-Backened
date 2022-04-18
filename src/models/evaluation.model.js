const mongoose = require("mongoose");

const evaluationSchema = new mongoose.Schema({
    topic:{type:String, required:true},
    date_of_evaluation:{type:Date, required:true},
    instructor:{type:mongoose.Schema.Types.ObjectId,ref:"user", required:true},
    student:[{type:mongoose.Schema.Types.ObjectId,ref:"student", required:true}]
},

{
    versionKey:false,
    timestamps:true,
});

const Evaluation = mongoose.model("evaluation" , evaluationSchema);

module.exports = Evaluation;