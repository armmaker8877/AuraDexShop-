export type ProductCategory = 'all' | 'featured' | 'mm2' | 'account' | 'item' | 'topup';

export interface Product {
  id: string;
  name: string;
  code: string;
  category: ProductCategory;
  categoryLabel: string;
  price: number;
  originalPrice?: number;
  isAvailable: boolean;
  isFeatured: boolean;
  isSample: boolean; // Flagged as sample data according to design plan
  image: string;
  gallery?: string[];
  summary: string;
  description: string;
  features: string[];
  deliveryMethod: string;
  conditions: string[];
  stockCount: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export type OrderStatus = 'pending_payment' | 'verifying' | 'processing' | 'completed' | 'cancelled';

export interface Order {
  orderId: string;
  items: CartItem[];
  totalAmount: number;
  customerName: string;
  contactPlatform: 'line' | 'facebook' | 'phone';
  contactValue: string;
  notes?: string;
  status: OrderStatus;
  createdAt: string;
  paymentMethod: 'promptpay_qr' | 'bank_transfer';
}
