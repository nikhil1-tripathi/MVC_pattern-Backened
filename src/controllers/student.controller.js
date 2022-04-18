const Student = require("../models/student.model");
const express = require("express");
const router = express.Router();

router.post("", async(req,res) =>{
    try{
        const student = await Student.create(req.body);
        return res.status(201).send(student);
    } catch(e){
        return res.status(500).send(e.message);
    }
});

router.get("", async(req, res) =>{
    try{
     const student = await Student.find().populate("evaluation_id").lean().exec();
     return res.status(201).send(student);
    } catch(e){
        return res.status(500).send(e.message);
    }
})

module.exports = router;