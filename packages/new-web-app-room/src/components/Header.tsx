'use client';

import { useAccount, useConnect, useDisconnect } from 'wagmi';
import { Home, Building2, Wrench, User, LogOut } from 'lucide-react';
import Link from 'next/link';
import { truncateAddress } from '@/lib/utils';

export function Header() {
  const { address, isConnected } = useAccount();
  const { connect, connectors } = useConnect();
  const { disconnect } = useDisconnect();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <Building2 className="h-6 w-6 text-green-600" />
          <span className="text-xl font-bold text-gray-900">
            HomeChain <span className="text-green-600">Naija</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          <Link
            href="/properties"
            className="flex items-center space-x-1 text-sm font-medium text-gray-700 hover:text-green-600 transition-colors"
          >
            <Home className="h-4 w-4" />
            <span>Properties</span>
          </Link>
          <Link
            href="/artisans"
            className="flex items-center space-x-1 text-sm font-medium text-gray-700 hover:text-green-600 transition-colors"
          >
            <Wrench className="h-4 w-4" />
            <span>Artisans</span>
          </Link>
          {isConnected && (
            <Link
              href="/dashboard"
              className="flex items-center space-x-1 text-sm font-medium text-gray-700 hover:text-green-600 transition-colors"
            >
              <User className="h-4 w-4" />
              <span>Dashboard</span>
            </Link>
          )}
        </nav>

        <div className="flex items-center space-x-4">
          {isConnected ? (
            <>
              <div className="hidden sm:flex items-center space-x-2 px-3 py-2 bg-green-50 rounded-lg">
                <div className="h-2 w-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm font-medium text-gray-700">
                  {truncateAddress(address || '')}
                </span>
              </div>
              <button
                onClick={() => disconnect()}
                className="flex items-center space-x-2 px-4 py-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors"
              >
                <LogOut className="h-4 w-4" />
                <span className="hidden sm:inline">Disconnect</span>
              </button>
            </>
          ) : (
            <button
              onClick={() => connect({ connector: connectors[0] })}
              className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium"
            >
              Connect Wallet
            </button>
          )}
        </div>
      </div>
    </header>
  );
}

