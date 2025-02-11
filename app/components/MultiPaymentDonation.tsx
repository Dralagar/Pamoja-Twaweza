"use client";

import React, { useState, Suspense } from 'react';
import dynamic from 'next/dynamic';

const PayPalDonation = dynamic(() => import('./PayPalDonation'), {
  loading: () => <div>Loading PayPal...</div>,
  ssr: false
});

const MPESADonation = dynamic(() => import('./MPESADonation'), {
  loading: () => <div>Loading M-PESA...</div>,
  ssr: false
});

const StripeDonation = dynamic(() => import('./StripeDonation'), {
  loading: () => <div>Loading Stripe...</div>,
  ssr: false
});

type PaymentMethod = 'paypal' | 'mpesa' | 'card';

export default function MultiPaymentDonation() {
  const [selectedMethod, setSelectedMethod] = useState<PaymentMethod>('card');

  return (
    <div className="max-w-xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6 text-center">Make a Donation</h2>
      
      {/* Payment Method Selector */}
      <div className="flex justify-center gap-4 mb-6">
        <button
          onClick={() => setSelectedMethod('card')}
          className={`px-4 py-2 rounded ${
            selectedMethod === 'card' ? 'bg-blue-600 text-white' : 'bg-gray-200'
          }`}
        >
          Credit Card
        </button>
        <button
          onClick={() => setSelectedMethod('paypal')}
          className={`px-4 py-2 rounded ${
            selectedMethod === 'paypal' ? 'bg-blue-600 text-white' : 'bg-gray-200'
          }`}
        >
          PayPal
        </button>
        <button
          onClick={() => setSelectedMethod('mpesa')}
          className={`px-4 py-2 rounded ${
            selectedMethod === 'mpesa' ? 'bg-blue-600 text-white' : 'bg-gray-200'
          }`}
        >
          M-PESA
        </button>
      </div>

      <Suspense fallback={<div>Loading payment method...</div>}>
        {selectedMethod === 'paypal' && <PayPalDonation />}
        {selectedMethod === 'mpesa' && <MPESADonation />}
        {selectedMethod === 'card' && <StripeDonation />}
      </Suspense>
    </div>
  );
}
