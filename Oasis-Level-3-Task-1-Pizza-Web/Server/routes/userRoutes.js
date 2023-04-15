const express =require('express')
const router =express.Router()
const User =require('../Models/userModel')

router.post('/api/users/register',(req,res)=>{
    const{first_name,last_name,email,password}=req.body
    const newUser =new User({first_name,last_name,email,password})
    try {
        newUser.save()
        res.status(200).json({
            success:true,
            message:"registration success"


        })
    } catch (error) {
        

        res.status(400).json({

            message:error,
        });
    }
});




router.post('/api/users/login',async(req,res)=>{
    const {email,password}=req.body 

    try{
        const user= await User.find({email,password})
        if(user.length>0){
        const currentUser={
            
            name:user[0].name,
            email:user[0].email,
            isAdmin:user[0].isAdmin,
            _id:user[0].Id
        }
        
        res.status(200).send(currentUser)
    }
    else{
        res.status(400).json({
            message:'LOGIN FAILED'
        })
    
    }
}
    catch(error){
        res.status(404).json({
            message:'something went wrong'
        })
    

    }

})

module.exports =router;