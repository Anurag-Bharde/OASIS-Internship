import React from 'react'

import { useDispatch,useSelector } from 'react-redux'
import {FiMinusSquare,FiPlusSquare} from 'react-icons/fi'
import {FaTrash} from 'react-icons/fa'

import {addToCart,deleteFromCart} from '../../Actions/cartActions'

import '../cart/Cart.css'
import  pizaimg from '../../pizzaimages/Margherit.jpg'
import Checkout from '../../Components/checkout/Checkout'


function Cart() {

    const dispatch =useDispatch();
    const cartState =useSelector((state)=>state.cartReducer);
    const cartItems=cartState.cartItems
    const subTotal =cartItems.reduce((x,item)=> x + item.price,0)


  return (
    

    
    <div className='dta'  >
    <>
    
    {cartItems.map(item =>(

     

      <div className="pizzaa-card" key={item.name}>
      <h1 className="pizzaa-text">{item.name}</h1>
      <img className="pizzaa-image" src={pizaimg} alt={item.name} />
      
      
      <h2 className="pizzaa-des" >Quantity :<FiMinusSquare  style={{cursor:"pointer"}} onClick={()=>{dispatch(addToCart(item,item.quantity-1,item.varient));}}/> {item.quantity}   <FiPlusSquare className='sucess'  style={{cursor:"pointer"}} onClick={()=>{dispatch(addToCart(item,item.quantity + 1,item.varient));}} /> 
      <FaTrash style={{cursor:"pointer"}} onClick={()=>{dispatch(deleteFromCart(item));}} />
      
      </h2>
      
      <h2>Price :{item.quantity} X {item.prices[0][item.varient]} = INR {item.price}</h2>
      
     
    </div>

 

      
    
    )
    
    ) }


    <div> <h1>subTotal:{subTotal}</h1>
    <Checkout  subTotal={subTotal} />
    
    
    </div>
    
    </>
    </div>

  )
}

export default Cart