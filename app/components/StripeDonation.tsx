"use client";
import React from 'react';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
  ? loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)
  : Promise.reject(new Error("Stripe publishable key is not set"));

export default function StripeDonation() {
  const handleDonation = async () => {
    const stripe = await stripePromise;
    if (!stripe) {
      console.error('Stripe failed to load');
      return;
    }

    const response = await fetch('/api/create-payment-intent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ amount: 1099, currency: 'usd' }),
    });
    const data = await response.json() as { error?: string; sessionId?: string };
    if (data.error) throw new Error(data.error);
    if (!data.sessionId) throw new Error('Session ID is undefined');
    const result = await stripe.redirectToCheckout({
      sessionId: data.sessionId,
    });

    if (result.error) {
      console.error(result.error.message);
    }
  };

  return (
    <div>
      <h2>Donate to Our Cause</h2>
      <button onClick={handleDonation}>Donate $10.99</button>
      <div id="express-checkout-element"></div>
    </div>
  );
} 