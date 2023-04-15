const mongoose =require('mongoose')

const pizzaSchema =mongoose.Schema({
    name:{
        type:String,
        
    
    },
    varients : [],

    cheese : [],
    extratoppings :[],
    sauce :[],
    base :[],

    prices:[],
    category:{
        type:String,
        
    },
    image:{
        type:String,
        
    },
    description:{
        type:String,
        
    }


},{timestamps:true} );

const PizzaModel=mongoose.model('pizza',pizzaSchema)

module.exports =PizzaModel;