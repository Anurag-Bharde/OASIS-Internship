import axios from "axios";

export const getAllPizzas =() => async dispatch =>{
    dispatch({type:"Get_pizzas_request"})
    try{
        const res =await axios.get('/api/pizzas/getPizzas')
        console.log(res)
        dispatch({type:'Get_pizzas_success',payload:res.data})
    }catch(err){

        dispatch({type:"Get_pizzas_fail",payload:err})
    }
}