import { PaymentProvider } from '../types/payment';

export const paymentProviders: PaymentProvider[] = [
  {
    name: 'M-Pesa',
    id: 'mpesa',
    icon: '/images/Mpesa-Logo.png',
    isAvailable: true,
    currencies: ['KES', 'TZS', 'UGX', 'EUR', 'USD'],
    minAmount: 10,
    maxAmount: 150000,
    regions: ['KE', 'TZ', 'UG']
  },
  {
    name: 'PayPal',
    id: 'paypal',
    icon: '/icons/paypal.svg',
    isAvailable: true,
    currencies: ['USD', 'EUR', 'GBP'],
    minAmount: 1,
    maxAmount: 10000,
    regions: ['GLOBAL'],
    features: ['instant', 'online']
  },
  {
    name: 'MTN Mobile Money',
    id: 'mtn',
    icon: '/icons/mtn.svg',
    isAvailable: true,
    currencies: ['UGX', 'USD'],
    minAmount: 500,
    maxAmount: 5000000,
    supportedRegions: ['UG'],
    features: ['instant', 'mobile']
  },
  {
    name: 'Western Union',
    id: 'western-union',
    icon: '/icons/western-union.svg',
    isAvailable: true,
    currencies: ['USD', 'EUR', 'GBP'],
    minAmount: 1,
    maxAmount: 5000,
    regions: ['GLOBAL'],
    features: ['cash-pickup']
  },
  {
    name: 'SendWave',
    id: 'sendwave',
    icon: '/icons/sendwave.svg',
    isAvailable: true,
    currencies: ['USD'],
    minAmount: 1,
    maxAmount: 999,
    regions: ['GLOBAL'],
    features: ['instant', 'mobile']
  },
  {
    name: 'M-Pesa Global',
    id: 'mpesa-global',
    icon: '/icons/mpesa-global.svg',
    isAvailable: true,
    currencies: ['USD', 'KES', 'GBP'],
    minAmount: 1,
    maxAmount: 2000,
    supportedRegions: ['GLOBAL'],
    features: ['instant', 'mobile']
  },
  {
    name: 'Dahabshiil',
    id: 'dahabshiil',
    icon: '/icons/dahabshiil.svg',
    isAvailable: true,
    currencies: ['USD', 'EUR', 'GBP'],
    minAmount: 1,
    maxAmount: 3000,
    regions: ['GLOBAL'],
    features: ['cash-pickup']
  },
  {
    name: 'Cryptocurrency',
    id: 'crypto',
    icon: '/icons/crypto.svg',
    isAvailable: true,
    currencies: ['BTC', 'ETH', 'USDT'],
    minAmount: 0.0001,
    maxAmount: 100000,
    supportedRegions: ['GLOBAL'],
    features: ['instant', 'crypto']
  }
];

export type SupportedCurrencies = 'USD' | 'EUR' | 'GBP' | 'KES' | 'TZS' | 'UGX' | 'BTC' | 'ETH' | 'USDT';
export type SupportedRegions = 'KE' | 'TZ' | 'UG' | 'GLOBAL';
export type PaymentFeatures = 'instant' | 'mobile' | 'online' | 'cash-pickup' | 'crypto';
