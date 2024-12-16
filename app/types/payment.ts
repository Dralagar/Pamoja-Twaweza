export interface PaymentProvider {
  name: string;
  id: string;
  icon: string;
  isAvailable: boolean;
  currencies: string[];
  minAmount: number;
  maxAmount: number;
}

export interface PaymentRequest {
  amount: number;
  currency: string;
  provider: string;
  metadata?: Record<string, any>;
}
