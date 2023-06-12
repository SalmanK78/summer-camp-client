import React from "react";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import './CheckoutForm.css'
import dataLoader from "../../../hooks/dataLoader";

const stripePromise = loadStripe(import.meta.env.VITE_PK)
const Payment = () => {
    const [loadedData] = dataLoader('selected')
    console.log(loadedData)
    const total = loadedData.reduce((sum,item)=>sum+item.price,0)
    const price = parseFloat(total.toFixed(2))
    // const price = 200
    console.log(price)

  return (
    <div className="w-1/2">
      <Elements stripe={stripePromise}>
        <CheckoutForm cart={loadedData} price={price} ></CheckoutForm>
      </Elements>
    </div>
  );
};

export default Payment;
