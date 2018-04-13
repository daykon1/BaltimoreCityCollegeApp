const express= require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Admin = require('../models/admin');

router.post('/login',(req,res,next)=>{
    console.log(req.body.username);
    console.log(req.body.password);
Admin.find({username:req.body.username,password:req.body.password},function(err,admins){
    if(err)
    {
        return res.status(401).json({
            message: 'Auth failed'
        });  
    }
    else{
        console.log(admins);
        if(admins.length<1){
            return res.status(401).json({
                message: 'Auth failed'
            }); 
        }
        return res.status(200).json({
            message:'Sucess'
        });
    }
})
// const admin = new Admin({
//     _id:new mongoose.Types.ObjectId(),
//     username:req.body.username,
//     password:req.body.password
// });
// admin.save().then(result=>{
//     console.log(result);
//     res.status(201).json({ message: "Admin created" });
// })
});
module.exports = router;