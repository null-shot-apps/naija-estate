'use client';

import { BrowserProvider } from 'ethers';

// Crypto price conversion rates (mock - in production, fetch from API)
export const CRYPTO_RATES: Record<string, number> = {
  USDC: 1650, // 1 USDC = 1650 NGN
  USDT: 1650,
  ETH: 5500000, // 1 ETH = 5.5M NGN
  BTC: 95000000, // 1 BTC = 95M NGN
  NGNX: 1, // 1 NGNX = 1 NGN
};

export function convertNGNToCrypto(ngnAmount: number, crypto: string): number {
  const rate = CRYPTO_RATES[crypto] || 1;
  return ngnAmount / rate;
}

export function convertCryptoToNGN(cryptoAmount: number, crypto: string): number {
  const rate = CRYPTO_RATES[crypto] || 1;
  return cryptoAmount * rate;
}

// Web3 wallet connection helper
export async function connectWallet(): Promise<string | null> {
  if (typeof window === 'undefined' || !window.ethereum) {
    return null;
  }

  try {
    const provider = new BrowserProvider(window.ethereum);
    const accounts = await provider.send('eth_requestAccounts', []);
    return accounts[0] || null;
  } catch (error) {
    console.error('Failed to connect wallet:', error);
    return null;
  }
}

// Get current connected wallet address
export async function getWalletAddress(): Promise<string | null> {
  if (typeof window === 'undefined' || !window.ethereum) {
    return null;
  }

  try {
    const provider = new BrowserProvider(window.ethereum);
    const accounts = await provider.send('eth_accounts', []);
    return accounts[0] || null;
  } catch (error) {
    console.error('Failed to get wallet address:', error);
    return null;
  }
}

declare global {
  interface Window {
    ethereum?: any;
  }
}
