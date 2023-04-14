import React from 'react'
import '../About/About.css'

import pizzaimg from '../../images/pizza.png';
const About = () => {
  return (
    <div className='about-Container'>
    
    
    <div className="write">

    <h2>Damn,its seems You are Hungry🤤</h2>

    <h1>Order The Best Pizza🙃</h1>

<div className="buttons">
<button className='bt' type='submit'>Order Now</button>



</div>

    </div>
    
    <div className="pizaaimg">

    <img src={pizzaimg}   ></img>

    
    </div>
    
    
    </div>
  )
}

export default About