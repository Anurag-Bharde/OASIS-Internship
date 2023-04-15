const mongoose = require('mongoose')
const userSchema =mongoose.Schema({

first_name:{
    type:String,
    // required:[true,'name is requires']
},
last_name:{
    type:String,
    
},

email:{
    type:String,
    // required:[true,'email is requires']
},
password:{
    type:String,
    // required:[true,'password is required']
},
isAdmin:{
    type:Boolean,
    default:false
}


},{timeStamps:true})


module.exports =mongoose.model('User',userSchema);