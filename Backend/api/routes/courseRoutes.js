const express= require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Course = require('../models/course');

router.post('/addcourse',(req,res,next)=>{
    const course = new Course({
        _id:mongoose.Types.ObjectId(),
        course_no:req.body.course_no,
        course_name:req.body.course_name,
        department_no:req.body.department_no,
        faculty_id:req.body.faculty_id
      });
course.save().then(result=>{
    console.log(result);
}).catch(err=>{
    console.log(err)
})
res.status(200).json({ message: "Add course success" });

});
router.post('/deletecourse',(req,res,next)=>{
Course.remove({course_no:req.body.course_no},function(err,courses){
    if(err){
        throw err;
    }
    else
    {
        if(courses.length<1){
            res.status(401).json({ message: "No such course found" });
        }
        else{
            res.status(200).json({ message: "Deletion success" });
        }
        
    }
})

});
module.exports = router;