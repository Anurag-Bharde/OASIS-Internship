import React, { useEffect } from 'react'
import './Navbar.css'
import SideBarButton from './SideBarButton'
import {BsFillCartCheckFill} from "react-icons/bs"
import { useDispatch,useSelector } from 'react-redux'




import {FaPizzaSlice} from "react-icons/fa"
const Navbar = () => {

const dispatch =useDispatch();
const userState =useSelector((state)=>state.loginUserReducer);
const  {currentUser}=userState;




  return (
    <>
   <div className="main-nav">
   <div className="logo">
   <h1><span>v</span>ikash
   <FaPizzaSlice/>
   <span> </span>Pizza
   </h1>

   </div>
   
   
<div className="menu-link">


    
  <SideBarButton  title="Home" to="/"  />
    <SideBarButton  title="Menu" to="/Menu"   />
    
    <SideBarButton title="Cart" to="/Cart" />
    

   
    <>
    {
       
   currentUser ? ( <SideBarButton title={currentUser.name}   />)
   :( <> <SideBarButton title="Login" to="/Login" / >
   <SideBarButton title="Registration" to="/Registration" / >
   </>
   )
       }
    
    
    </>
   

</div>



   </div>


   
    
    
    
    </>
  )
}

export default Navbar