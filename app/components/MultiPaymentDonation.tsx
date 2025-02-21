import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MultiPaymentDonation = () => {
  const [status, setStatus] = useState<string | null>(null);
  const [paypalLoaded, setPaypalLoaded] = useState<boolean>(false);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://www.paypal.com/sdk/js?currency=USD&intent=capture&components=buttons&disable-funding=credit,card";
    script.async = true;
    script.onload = () => setPaypalLoaded(true);
    script.onerror = () => console.error('Failed to load the PayPal JS SDK script.');
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handlePayment = async () => {
    if (!paypalLoaded) {
      console.error('PayPal SDK not loaded.');
      setStatus('error');
      return;
    }
    try {
      const response = await axios.post('/api/payment', { /* payment data */ });
      if (response.status === 200) {
        setStatus('success');
      } else {
        setStatus('error');
        console.error('Payment error: Unexpected response status', response.status);
      }
    } catch (err) {
      setStatus('error');
      if (axios.isAxiosError(err)) {
        console.error('Payment error:', err.message);
        if (err.response) {
          console.error('Response data:', err.response.data);
          console.error('Response status:', err.response.status);
          console.error('Response headers:', err.response.headers);
        } else if (err.request) {
          console.error('Request data:', err.request);
        } else {
          console.error('Error message:', err.message);
        }
      } else {
        console.error('Payment error:', err);
      }
    }
  };

  const handleMpesaPayment = async () => {
    try {
      const response = await axios.post('/api/mpesa-payment', { /* M-Pesa payment data */ });
      if (response.status === 200) {
        setStatus('success');
      } else {
        setStatus('error');
        console.error('M-Pesa payment error: Unexpected response status', response.status);
      }
    } catch (err) {
      setStatus('error');
      if (axios.isAxiosError(err)) {
        console.error('M-Pesa payment error:', err.message);
        if (err.response) {
          console.error('Response data:', err.response.data);
          console.error('Response status:', err.response.status);
          console.error('Response headers:', err.response.headers);
        } else if (err.request) {
          console.error('Request data:', err.request);
        } else {
          console.error('Error message:', err.message);
        }
      } else {
        console.error('M-Pesa payment error:', err);
      }
    }
  };

  return (
    <div>
      <button onClick={handlePayment}>Make a Donation with PayPal</button>
      <button onClick={handleMpesaPayment}>Make a Donation with M-Pesa</button>
      {status === 'success' && <p>Payment successful!</p>}
      {status === 'error' && <p>Payment failed. Please try again.</p>}
    </div>
  );
};

export default MultiPaymentDonation; 