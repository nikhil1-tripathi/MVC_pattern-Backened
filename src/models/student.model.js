const mongoose = require("mongoose");


const studentSchema = new mongoose.Schema({
    roll_no:{type:Number, required:true},
    current_batch:{type:String, required:true},
    evaluation_id:{type:mongoose.Schema.Types.ObjectId, ref:"evaluation", required:true,
    },
    results:{type:Number, required:true},
},{
    versionKey:false,
    timestamps:true,
});

const Student = mongoose.model("student", studentSchema);

module.exports = Student;