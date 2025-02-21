import React, { useEffect, useState } from 'react';

const MultiPaymentDonation: React.FC = () => {
  const [paypalLoaded, setPaypalLoaded] = useState(false);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.paypal.com/sdk/js?client-id=YOUR_CLIENT_ID';
    script.async = true;
    
    script.onload = () => setPaypalLoaded(true);
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