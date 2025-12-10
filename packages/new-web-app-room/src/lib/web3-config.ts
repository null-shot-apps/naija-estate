'use client';

import { createConfig, http } from 'wagmi';
import { mainnet } from 'wagmi/chains';
import { injected, walletConnect } from 'wagmi/connectors';

const projectId = process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID || 'demo-project-id';

export const config = createConfig({
  chains: [mainnet],
  connectors: [
    injected(),
    walletConnect({ projectId }),
  ],
  transports: {
    [mainnet.id]: http(),
  },
});

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

