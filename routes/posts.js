var mongoose = require('mongoose');
const express= require('express');
const router = express.Router();
const Address = require('../models/Address');
const Users = require('../models/Users');

router.get('/test',async (req,res)=>{
    try{
        res.json("Here it is working hurray");
    }catch (err){
        res.json({"message":err});
    }
});



// To add Users
router.post('/user/add', async (req,res)=>{
    //console.log("The data is ", req.body);
    const post =new Users({
        user_uuid:req.body.user_uuid,
        user_first_name:req.body.user_first_name,
        user_last_name:req.body.user_last_name,
        user_email:req.body.user_email,
        user_password:req.body.user_password
    });
    try{
       const savedPost = await post.save();
       res.json(savedPost);
    }catch (err){
       res.json({"message":err});
    }
});

//List of Users
router.get('/user/list',async (req,res)=>{
    try{
        const posts = await Users.find();
        console.log(posts);
        res.json(posts);
    }catch (err){
        res.json({"message":err});
    }
});


//Update User Record
router.post('/user/update', (req,res)=>{

    const query =  Users.findByIdAndUpdate({_id:req.body._id}, req.body, {new:true});
    query.exec(function(err,updatedData){
        if(err){
            console.log(err);
        }else{
            res.json(updatedData);
        }
    })
    
});


//Update Password
router.post('/user/update/password', (req,res)=>{

    const query =  Users.findOneAndUpdate({user_uuid:req.body.user_uuid}, req.body, {new:true});
    query.exec(function(err,updatedData){
        if(err){
            console.log(err);
        }else{
            res.json(updatedData);
        }
    })
    
});

//Hard Delete
router.get('/user/delete/:postId', (req,res)=>{

    const query =  Users.findOneAndDelete({_id:req.params.postId},function (err, res) { 
        if (err){ 
            console.log(err) 
        } 
        else{ 
            res.json("User Deleted");
        } 
    })
    
});


module.exports=router;