const mongoose =require('mongoose')
const connectDB =async ()=>{

try{
const url= process.env.MONGO_URI
    const conn=await mongoose.connect(url,{
        useUnifiedTopology:true,
        useNewUrlParser:true,
        

    })

    console.log(`mongo db dtabase connected   `)
} catch(error){
console.log(`error:${error.message}`)
}

};

module.exports =connectDB;
