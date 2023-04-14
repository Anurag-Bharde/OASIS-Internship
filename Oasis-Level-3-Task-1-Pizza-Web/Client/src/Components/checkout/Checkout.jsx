import React from 'react'

import StripeCheckout from 'react-stripe-checkout';
import {useDispatch,useSelector} from 'react-redux';
import { placeOrder } from '../../Actions/orderActions'

const Checkout = ({subTotal}) => {


  const dispatch =useDispatch()

    const tokenHandler =(token)=>{
      dispatch(placeOrder(token,subTotal))
        console.log(token);
    };

  return (
    <StripeCheckout
    amount={subTotal *100}
    shippingAddress
    token={tokenHandler}
    stripeKey=''
    currency='INR'
    >
    <button>Pay now</button>
    
    </StripeCheckout>
  )
}

export default Checkout
