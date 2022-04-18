const Evaluation = require("../models/evaluation.model");
const express = require("express");
const router = express.Router();

router.post("", async(req,res) =>{
    try{
        const evaluation = await Evaluation.create(req.body);
        return res.status(201).send(evaluation);
    } catch(e){
        return res.status(500).send(e.message);
    }
});

router.get("", async(req, res) =>{
    try{
     const evaluation = await Evaluation.find().populate("instructor").populate("student").lean().exec();
     return res.status(201).send(evaluation);
    } catch(e){
        return res.status(500).send(e.message);
    }
});

router.get("/:id", async(req, res) =>{
    try{
     const evaluation = await Evaluation.find().populate("instructor").populate("student").lean().exec();
     return res.status(201).send(evaluation);
    } catch(e){
        return res.status(500).send(e.message);
    }
})

module.exports = router;