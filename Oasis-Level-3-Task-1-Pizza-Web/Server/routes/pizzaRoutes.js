const express =require('express')

const router =express.Router();
const pizzaModel =require('../Models/PizzaModels')

router.get('/api/pizzas/getPizzas',async (req,res)=>{
try{
    const pizzas=await pizzaModel.find({})
    res.send(pizzas)

}
catch(error){
res.json({message:error})
}

})

module.exports =router;