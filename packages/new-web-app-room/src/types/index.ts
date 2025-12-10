export type CryptoType = 'USDC' | 'USDT' | 'ETH' | 'BTC' | 'NGNX';

export type UserRole = 'user' | 'agent' | 'developer' | 'artisan' | 'admin';

export type PropertyType = 'rent' | 'sale';

export type PropertyStatus = 'available' | 'pending' | 'sold' | 'rented';

export type ArtisanCategory = 'plumber' | 'electrician' | 'painter' | 'carpenter';

export interface User {
  id: string;
  walletAddress: string;
  role: UserRole;
  name?: string;
  email?: string;
  phone?: string;
  verified: boolean;
  rating?: number;
  createdAt: Date;
}

export interface Property {
  id: string;
  title: string;
  description: string;
  type: PropertyType;
  status: PropertyStatus;
  price: number;
  priceInCrypto: Record<CryptoType, number>;
  images: string[];
  location: {
    address: string;
    city: string;
    state: string;
    coordinates: {
      lat: number;
      lng: number;
    };
  };
  features: {
    bedrooms: number;
    bathrooms: number;
    area: number; // in sqm
    parking?: number;
  };
  agentId: string;
  agent?: User;
  contractAddress?: string;
  nftTokenId?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Artisan {
  id: string;
  userId: string;
  user?: User;
  category: ArtisanCategory;
  skills: string[];
  experience: number; // years
  hourlyRate: number;
  hourlyRateInCrypto: Record<CryptoType, number>;
  portfolio: string[];
  availability: boolean;
  completedJobs: number;
  rating: number;
  reviews: Review[];
}

export interface Job {
  id: string;
  title: string;
  description: string;
  category: ArtisanCategory;
  budget: number;
  budgetInCrypto: Record<CryptoType, number>;
  location: string;
  clientId: string;
  artisanId?: string;
  status: 'open' | 'assigned' | 'in_progress' | 'completed' | 'disputed';
  escrowAddress?: string;
  createdAt: Date;
  completedAt?: Date;
}

export interface Review {
  id: string;
  rating: number;
  comment: string;
  reviewerId: string;
  reviewer?: User;
  createdAt: Date;
}

export interface Transaction {
  id: string;
  type: 'property_purchase' | 'property_rent' | 'artisan_payment';
  amount: number;
  crypto: CryptoType;
  cryptoAmount: number;
  fromAddress: string;
  toAddress: string;
  txHash: string;
  status: 'pending' | 'completed' | 'failed';
  propertyId?: string;
  jobId?: string;
  createdAt: Date;
}

export interface EscrowContract {
  address: string;
  propertyId?: string;
  jobId?: string;
  amount: number;
  crypto: CryptoType;
  status: 'active' | 'released' | 'refunded' | 'disputed';
  createdAt: Date;
}

