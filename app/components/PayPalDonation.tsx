"use client";

import React from 'react';
import { useState } from 'react';
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";

const initialOptions = {
  "client-id": process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID!,
  currency: "USD",
  intent: "capture",
  components: "buttons",
  "disable-funding": "credit,card"  // Disable specific funding sources if needed
};

export default function PayPalDonation() {
  const [amount, setAmount] = useState('10.00');
  const [error, setError] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const handleCreateOrder = async (event: any, actions: any) => {
    if (!amount || isNaN(parseFloat(amount))) {
      setError('Please enter a valid amount');
      return;
    }

    try {
      return await actions.order.create({
        purchase_units: [{
          amount: {
            value: amount,
            currency_code: "USD"
          },
          description: "Donation to Pamoja Twaweza"
        }]
      });
    } catch (err) {
      console.error('Order creation failed:', err);
      setError('Failed to create order. Please try again.');
      return null;
    }
  };

  const handleApprove = async (_: any, actions: any) => {
    setIsProcessing(true);
    try {
      const order = await actions.order!.capture();
      console.log(order);
      alert("Thank you for your donation!");
      setAmount('10.00');
      setError('');
    } catch (err) {
      console.error('Payment capture failed:', err);
      setError('Payment failed. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };
  return (
    <PayPalScriptProvider options={{ clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID!, currency: "USD", intent: "capture", components: "buttons", "disable-funding": "credit,card" }}>
      <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">Donate via PayPal</h2>
        
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Amount (USD)</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg"
            min="1"
            step="0.01"
            required
            disabled={isProcessing}
          />
        </div>

        {error && (
          <div className="text-red-500 mb-4 text-center">
            {error}
          </div>
        )}

        <div className={isProcessing ? 'opacity-50 pointer-events-none' : ''}>
          <PayPalButtons
            style={{ layout: "vertical" }}
            createOrder={handleCreateOrder}
            onApprove={handleApprove}
            onError={(err) => {
              console.error('PayPal error:', err);
              setError('PayPal encountered an error. Please try again.');
            }}
            onCancel={() => {
              setError('Transaction cancelled');
            }}
          />
        </div>
      </div>
    </PayPalScriptProvider>
  );
} 