import React,{useState} from 'react'
import '../Pizza/Pizza.css'
import { useDispatch,useSelector } from 'react-redux'
import { addToCart } from '../../Actions/cartActions'

import pizaimg from '../../pizzaimages/Margherit.jpg'



const Pizza = ({pizza}) => {

  const [varients,setVarients] =useState('small')
  const [sauce,setSauce] =useState('tandoori')
  const [Quantity,setQuantity] =useState(1)
  const [base,setBase] =useState('Hand Tossed')
  const [extratoppings,setExtratoppings] =useState('olives')
  const [cheese,setCheese] =useState('extra cheese')

  const dispatch =useDispatch()

  const addToCartHandler =()=>{
    dispatch(addToCart(pizza,Quantity,varients))
  }

 

  const getPrice = () => {
    const priceObj = pizza.prices.find(price => price[varients])
    const totalPrice = priceObj[varients] * Quantity
    return totalPrice
  }

  
  return (
    <div className="pizza-card" key={pizza.name}>
    <h1 className="pizza-text">{pizza.name}</h1>
    <img className="pizza-image" src={pizaimg} alt={pizza.name} />
    <h2 className="pizza-des">{pizza.description}</h2>
    <div className='attributes'>
    <div className="varient">


    <h4>Varients</h4>
    <select value={varients} onChange={(e)=>setVarients(e.target.value)}>
    {pizza.varients.map(varients=>(

      <option    > {varients}</option>
    ))}
    
    </select>
    </div>



    <div className="Quantity">
    <h4>Quantity</h4>
    <select value={Quantity} onChange={(e)=>setQuantity(e.target.value)} >
    {[...Array(10).keys()].map((v,l)=>(

      <option  >{l+1}</option>

    ))}
    
    </select>
    </div>



    
    <div className="Sauce">
    <h4>Sauce</h4>
    <select>
    {pizza.sauce.map(sauce=>(

      <option value={sauce} onChange={e=>setSauce(e.target.value)} >{sauce}</option>
    ))}
    
    </select>
    </div>

    <div className="Base">
    <h4>Base</h4>
    <select>
    {pizza.base.map(base=>(

      <option value={base} onChange={e=>setBase(e.target.value)} >{base}</option>
    ))}
    
    </select>
    </div>


    <div className="extratoppings">
    <h4>  Extratoppings</h4>
    <select >
    {pizza.extratoppings.map(extratoppings=>(

      <option value={extratoppings} onChange={e=>setExtratoppings(e.target.value)} >{extratoppings}</option>
    ))}
    
    </select>
    </div>
    <div className="Cheese">
    <h4>Cheese</h4>
    <select>
    {pizza.cheese.map(cheese=>(

      <option value={cheese} onChange={e=>setCheese(e.target.value)} >{  cheese}</option>
    ))}
    
    </select>


    </div>


    <h2>Price:INR {getPrice()}</h2>
    
 


    </div>
    <button className="btn" onClick={addToCartHandler} >
      Add to cart
    </button>
   
  </div>
  )
}

export default Pizza