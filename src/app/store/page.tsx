// 'use client';
// import { NextPage } from 'next';

// interface Props {}

// const Store: NextPage<Props> = ({}) => {
    
//     return (
//         <div className='h-full w-full justify-content-center align-items-center'>
//             <h1 className='p-2'>XYS Store</h1>
            
//         </div>
//     );
// };

// export default Store;

'use client'
import React, { useCallback, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout
} from '@stripe/react-stripe-js';

const stripePromise = loadStripe("pk_test_51QYyPcEUUfeNESL5v8IYAyy7pzCnOvIJI6LgQjhLBbHpOLf0a8hgp512RsRQNdh7z6kXhuAgULNCqmWmWV52zi6b00cLTDUbVI");

export default function App() {
    const fetchClientSecret = useCallback(() => {
        // Create a Checkout Session
        // send over a priceID and quantity thru api
        // create a priceID for each product
        return fetch("http://localhost:3001/api/checkout_sessions", {
          method: "POST"
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("Response JSON:", data); // Log the parsed JSON response
            return data.clientSecret; // Access the clientSecret property
          })
          .catch((error) => {
            console.error("Error fetching client secret:", error);
          });
      }, []);
      

  const options = {fetchClientSecret};
  
  return (
    <div id="checkout">
        <h1 className='p-2'>XYS Store</h1>
      <EmbeddedCheckoutProvider
        stripe={stripePromise}
        options={options}
      >
        <EmbeddedCheckout />
      </EmbeddedCheckoutProvider>
    </div>
  )
}