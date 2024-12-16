'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { paymentProviders } from '../config/paymentProviders';
import { PaymentProvider } from '../types/payment';

export default function MultiPaymentDonation() {
  const [amount, setAmount] = useState('');
  const [selectedProvider, setSelectedProvider] = useState<PaymentProvider | null>(null);
  const [currency, setCurrency] = useState('USD');
  const [isProcessing, setIsProcessing] = useState(false);
  const [status, setStatus] = useState<'idle' | 'processing' | 'success' | 'error'>('idle');

  const handlePayment = async () => {
    if (!selectedProvider || !amount) return;

    setIsProcessing(true);
    setStatus('processing');

    try {
      const response = await fetch('/api/process-payment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount: parseFloat(amount),
          currency,
          provider: selectedProvider.id,
          metadata: {
            donationType: 'one-time',
            timestamp: new Date().toISOString(),
          },
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Payment failed');
      }

      setStatus('success');
      setAmount('');
      setSelectedProvider(null);

    } catch (err: unknown) {
      setStatus('error');
      if (err instanceof Error) {
        console.error('Payment error:', err.message);
      } else {
        console.error('Payment error:', err);
      }
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-lg">
      <h2 className="text-3xl font-bold text-center mb-8">Make a Donation</h2>

      {/* Amount Input */}
      <div className="mb-8">
        <label className="block text-sm font-medium mb-2">Amount</label>
        <div className="relative">
          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            className="absolute left-3 top-1/2 transform -translate-y-1/2"
          >
            <option value="USD">$</option>
            <option value="EUR">€</option>
            <option value="GBP">£</option>
            {/* Add more currencies */}
          </select>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full pl-16 pr-4 py-3 border rounded-lg"
            placeholder="Enter amount"
          />
        </div>
      </div>

      {/* Payment Providers Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {paymentProviders.map((provider) => (
          <motion.button
            key={provider.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedProvider(provider)}
            className={`p-4 rounded-lg border-2 transition-all ${
              selectedProvider?.id === provider.id
                ? 'border-blue-500 bg-blue-50'
                : 'border-gray-200'
            }`}
          >
            <img
              src={provider.icon}
              alt={provider.name}
              className="w-12 h-12 mx-auto mb-2"
            />
            <p className="text-sm text-center font-medium">{provider.name}</p>
          </motion.button>
        ))}
      </div>

      {/* Payment Button */}
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        disabled={isProcessing || !selectedProvider || !amount}
        onClick={handlePayment}
        className="w-full py-4 bg-blue-600 text-white rounded-lg font-semibold
          hover:bg-blue-700 transition-colors disabled:opacity-50"
      >
        {isProcessing ? 'Processing...' : 'Donate Now'}
      </motion.button>

      {/* Status Messages */}
      <AnimatePresence>
        {status !== 'idle' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className={`mt-4 p-4 rounded-lg text-center ${
              status === 'success'
                ? 'bg-green-100 text-green-700'
                : status === 'error'
                ? 'bg-red-100 text-red-700'
                : 'bg-blue-100 text-blue-700'
            }`}
          >
            {status === 'success'
              ? 'Thank you for your donation!'
              : status === 'error'
              ? 'Payment failed. Please try again.'
              : 'Processing your donation...'}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
