"use client";

import React from 'react';
import { useStripe } from '@stripe/react-stripe-js';
import axios from 'axios';

const SubscribeButton = () => {
  const stripe = useStripe();

  const handleSubscribe = async () => {
    try {
      const { data: session } = await axios.post('/api/checkout', {
        priceId: process.env.NEXT_PUBLIC_STRIPE_PRICE_ID,
      });

      if (stripe) {
        const result = await stripe.redirectToCheckout({
          sessionId: session.id,
        });

        if (result.error) {
          console.error('Error:', result.error.message);
        }
      } else {
        console.error('Stripe object is not available.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <button onClick={handleSubscribe} className="px-6 py-3 text-lg font-semibold text-white bg-green-500 rounded-md hover:bg-green-600 focus:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500">
      Subscribe
    </button>
  );
};

export default SubscribeButton;