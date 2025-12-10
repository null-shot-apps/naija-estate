'use client';

import { Artisan, CryptoType } from '@/types';
import { Star, Briefcase, CheckCircle, Clock } from 'lucide-react';
import Link from 'next/link';
import { formatCrypto } from '@/lib/utils';
import { useState } from 'react';

interface ArtisanCardProps {
  artisan: Artisan;
}

const categoryIcons: Record<string, string> = {
  plumber: '🔧',
  electrician: '⚡',
  painter: '🎨',
  carpenter: '🪚',
};

export function ArtisanCard({ artisan }: ArtisanCardProps) {
  const [selectedCrypto, setSelectedCrypto] = useState<CryptoType>('USDC');

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow">
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-2xl">
              {categoryIcons[artisan.category]}
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900">{artisan.user?.name}</h3>
              <p className="text-sm text-gray-600 capitalize">{artisan.category}</p>
            </div>
          </div>
          {artisan.user?.verified && (
            <div className="flex items-center space-x-1 text-green-600">
              <CheckCircle className="h-5 w-5" />
              <span className="text-xs font-medium">Verified</span>
            </div>
          )}
        </div>

        <div className="flex items-center space-x-4 mb-4">
          <div className="flex items-center space-x-1">
            <Star className="h-4 w-4 text-yellow-500 fill-current" />
            <span className="text-sm font-semibold text-gray-700">{artisan.rating}</span>
          </div>
          <div className="flex items-center space-x-1 text-gray-600">
            <Briefcase className="h-4 w-4" />
            <span className="text-sm">{artisan.completedJobs} jobs</span>
          </div>
          <div className="flex items-center space-x-1 text-gray-600">
            <Clock className="h-4 w-4" />
            <span className="text-sm">{artisan.experience} years</span>
          </div>
        </div>

        <div className="mb-4">
          <p className="text-sm font-medium text-gray-700 mb-2">Skills:</p>
          <div className="flex flex-wrap gap-2">
            {artisan.skills.slice(0, 3).map((skill, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="border-t pt-4 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">Hourly Rate:</span>
            <select
              value={selectedCrypto}
              onChange={(e) => setSelectedCrypto(e.target.value as CryptoType)}
              className="text-xs bg-gray-50 border border-gray-200 rounded px-2 py-1"
            >
              <option value="USDC">USDC</option>
              <option value="USDT">USDT</option>
              <option value="ETH">ETH</option>
              <option value="BTC">BTC</option>
              <option value="NGNX">NGNX</option>
            </select>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-lg font-bold text-green-600">
              {formatCrypto(artisan.hourlyRateInCrypto[selectedCrypto], selectedCrypto)}
            </span>
            <span className="text-xs text-gray-500">/hour</span>
          </div>
        </div>

        <div className="mt-4 flex gap-2">
          <Link
            href={`/artisans/${artisan.id}`}
            className="flex-1 py-2 text-center border border-green-600 text-green-600 rounded-lg hover:bg-green-50 transition-colors font-medium"
          >
            View Profile
          </Link>
          <button
            className={`flex-1 py-2 rounded-lg font-medium transition-colors ${
              artisan.availability
                ? 'bg-green-600 text-white hover:bg-green-700'
                : 'bg-gray-200 text-gray-500 cursor-not-allowed'
            }`}
            disabled={!artisan.availability}
          >
            {artisan.availability ? 'Hire Now' : 'Unavailable'}
          </button>
        </div>
      </div>
    </div>
  );
}


