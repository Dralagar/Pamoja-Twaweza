"use client";
import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
// import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const stripePromise = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
  ? loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)
  : null; // Set to null if the key is not available

const StripeDonation = () => {
  const [error, setError] = useState<string | null>(null);
  const [processing, setProcessing] = useState(false);
  const [succeeded, setSucceeded] = useState(false);

  const handleDonation = async () => {
    if (!stripePromise) {
      console.error("Stripe publishable key is not set");
      setError("Stripe publishable key is not set");
      return;
    }

    const stripe = await stripePromise;
    if (!stripe) {
      console.error('Stripe failed to load');
      setError('Stripe failed to load');
      return;
    }

    try {
      const response = await fetch('/api/create-payment-intent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: 1099, currency: 'usd' }),
      });
      const data = await response.json();
      if (data.error) throw new Error(data.error);
      if (!data.sessionId) throw new Error('Session ID is undefined');

      const result = await stripe.redirectToCheckout({
        sessionId: data.sessionId,
      });

      if (result.error) {
        console.error(result.error.message);
        setError(result.error.message || null);
      } else {
        setSucceeded(true);
      }
    } catch (err) {
      console.error(err);
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError(String(err));
      }
    } finally {
      setProcessing(false);
    }
  };

  return (
    <div>
      <h2>Donate to Our Cause</h2>
      <button onClick={handleDonation} disabled={processing || succeeded}>
        {processing ? 'Processing...' : succeeded ? 'Thank You!' : 'Donate $10.99'}
      </button>
      {error && <div>{error}</div>}
    </div>
  );
};

export default StripeDonation; 