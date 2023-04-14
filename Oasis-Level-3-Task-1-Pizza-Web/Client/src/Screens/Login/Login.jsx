import React ,{useState,useEffect} from 'react'

import '../Registration/Registration.css'
import {useDispatch,useSelector} from 'react-redux'
import { loginUser } from '../../Actions/userActions'

const Login = () => {

const [email,setEmail]=useState('')
const [password,setPassword]=useState('')
const dispatch =useDispatch()


useEffect(()=>{

  if(localStorage.getItem("currentUser")){
    window.location.href="/";
  }

},[])

const loginHandler =()=>{
  const user ={email,password}
  dispatch(loginUser(user))


}


  return (
   <div className="hi">
    <div className="form">
            <div className="form-body">
                
                
                <div className="email">
                    <label className="form__label" for="email">Email </label>
                    <input  type="email" id="email" className="form__input"  value={email} onChange={(e)=>setEmail(e.target.value) }  placeholder="Email"/>
                </div>
                <div className="password">
                    <label className="form__label" for="password">Password </label>
                    <input className="form__input" type="password"  id="password" value={password} onChange={(e)=>setPassword(e.target.value) }    placeholder="Password"/>
                </div>
               
            </div>
            <div class="footer">
                <button  onClick={loginHandler} class="btn">Login</button>
            </div>
        </div>


      
        </div>

  )
}

export default Login
