import React, { useEffect } from 'react';

const MultiPaymentDonation: React.FC = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.paypal.com/sdk/js?client-id=YOUR_CLIENT_ID';
    script.async = true;
    
    script.onload = () => console.log('PayPal JS SDK script loaded.');
    script.onerror = () => console.error('Failed to load the PayPal JS SDK script.');
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      {/* Render your component content here */}
    </div>
  );
};

export default MultiPaymentDonation; 