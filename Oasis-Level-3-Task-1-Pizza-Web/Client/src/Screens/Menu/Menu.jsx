import React ,{useEffect} from 'react'


import {useDispatch,useSelector} from 'react-redux'
import '../Menu/Menu.css'

import {getAllPizzas} from '../../Actions/pizzaActions'

import Pizza from '../../Components/Pizza/Pizza'


const Menu = () => {
const dispatch =useDispatch();
const pizzastate=useSelector((state) => state.getAllPizzaReducer  )
const {loading,pizzas,error}= pizzastate ;

useEffect (()=>{dispatch(getAllPizzas());
},[dispatch]);



  return (
  
      <div className="datapizza">
      {
        loading ? (<h1>Loading ....</h1>)
        :error ? (<h1>Error while fetching pizzas</h1>)

        :(
          <>
          {pizzas.map((pizza) => (
            
            <Pizza pizza={pizza} />
         
        ))}
        </>

        )




      }


        

        </div>
     
 
  );
};

export default Menu
