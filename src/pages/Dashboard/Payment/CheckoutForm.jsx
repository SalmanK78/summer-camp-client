import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { data } from 'autoprefixer';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuth } from '../../../hooks/useAuth';

const CheckoutForm = ({price , cart}) => {
  console.log(price)
    const stripe = useStripe()
    const {user } = useAuth()
    const elements = useElements();
    const [cardError, setCardError] = useState('');
    const [clientSecret,setClientSecret] = useState('')
    const [processing,setProcessing] = useState(false)
    const [transactionId, setTransactionId] = useState('');

    useEffect(()=>{
      if(price > 0){
        axios.post('http://localhost:5000/create-payment-intent',{price})
      .then(res=>{
        console.log(res.data.clientSecret)
        setClientSecret(res.data.clientSecret)
      })
      }
      
    },[price])
    const handleSubmit = async(event)=>{

        event.preventDefault();

        if(!stripe || !elements){
            return
        }
        const card = elements.getElement(CardElement);
        if(card === null){
            return
        }
        const {error,paymentMethod}= await stripe.createPaymentMethod({
            type:'card',
            card
        })
        if (error) {
            console.log('error', error)
            setCardError(error.message);
        }
        else {
            setCardError('');
            // console.log('payment method', paymentMethod)
        }
        setProcessing(true)

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
          clientSecret,
          {
              payment_method: {
                  card: card,
                  billing_details: {
                      email: user?.email || 'unknown',
                      name: user?.displayName || 'anonymous'
                  },
              },
          },
      );

      if (confirmError) {
          console.log(confirmError);
      }
        console.log({paymentIntent})
        console.log({card})
        setProcessing(false)
        if(paymentIntent?.status === 'succeeded'){
          setTransactionId(paymentIntent.id);

          const payment = {
            email:user?.email,
            transactionId:paymentIntent.id,
            price,
            date:new Date(),
            quantity:cart.length,
            itemsId:cart.map(item => item._id),
            itms:cart.map(item => item.name)
          }
          console.log(payment)
          axios.post('http://localhost:5000/payment',payment)
          .then(res=>{
            console.log(res.data)
          })
        }
    }
    return (
        <>
        <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button className='btn btn-primary btn-sm mt-4' type="submit" disabled={!stripe || !clientSecret || processing}>
        Pay
      </button>
    </form>
    {cardError && <p className="text-red-500 ml-8">{cardError}</p>}
    </>
    );
};

export default CheckoutForm;