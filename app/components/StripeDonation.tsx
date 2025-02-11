"use client";

import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

export default function StripeDonation() {
  const [amount, setAmount] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleDonation = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const stripe = await stripePromise;
      if (!stripe) throw new Error('Stripe failed to initialize.');

      const response = await fetch('/api/create-payment-intent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount: parseFloat(amount) * 100,
          currency: 'usd',
        }),
      });

      const data = await response.json();
      if (data.error) throw new Error(data.error);

      const result = await stripe.redirectToCheckout({
        sessionId: data.sessionId,
      });

      if (result.error) throw new Error(result.error.message);
    } catch (error) {
      console.error('Payment error:', error);
      alert('Payment failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">Credit Card Payment</h2>
      <form onSubmit={handleDonation}>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Amount (USD)</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg"
            min="1"
            required
          />
        </div>
        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
        >
          {isLoading ? 'Processing...' : 'Pay with Card'}
        </button>
      </form>
    </div>
  );
} 