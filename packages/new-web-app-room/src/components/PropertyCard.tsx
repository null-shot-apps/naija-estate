'use client';

import { Property, CryptoType } from '@/types';
import { MapPin, Bed, Bath, Square } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { formatCurrency, formatCrypto } from '@/lib/utils';
import { useState } from 'react';

interface PropertyCardProps {
  property: Property;
}

export function PropertyCard({ property }: PropertyCardProps) {
  const [selectedCrypto, setSelectedCrypto] = useState<CryptoType>('USDC');

  return (
    <Link href={`/properties/${property.id}`}>
      <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow cursor-pointer">
        <div className="relative h-64">
          <Image
            src={property.images[0]}
            alt={property.title}
            fill
            className="object-cover"
          />
          <div className="absolute top-4 right-4 px-3 py-1 bg-green-600 text-white rounded-full text-sm font-semibold">
            {property.type === 'rent' ? 'For Rent' : 'For Sale'}
          </div>
          {property.status === 'pending' && (
            <div className="absolute top-4 left-4 px-3 py-1 bg-yellow-500 text-white rounded-full text-sm font-semibold">
              Pending
            </div>
          )}
        </div>

        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-1">
            {property.title}
          </h3>

          <div className="flex items-center text-gray-600 mb-4">
            <MapPin className="h-4 w-4 mr-1" />
            <span className="text-sm">{property.location.city}, {property.location.state}</span>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-4 pb-4 border-b">
            <div className="flex items-center space-x-2">
              <Bed className="h-4 w-4 text-gray-500" />
              <span className="text-sm text-gray-700">{property.features.bedrooms} Beds</span>
            </div>
            <div className="flex items-center space-x-2">
              <Bath className="h-4 w-4 text-gray-500" />
              <span className="text-sm text-gray-700">{property.features.bathrooms} Baths</span>
            </div>
            <div className="flex items-center space-x-2">
              <Square className="h-4 w-4 text-gray-500" />
              <span className="text-sm text-gray-700">{property.features.area} m²</span>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Price (NGN):</span>
              <span className="text-lg font-bold text-gray-900">
                {formatCurrency(property.price)}
              </span>
            </div>
            
            <div className="flex items-center justify-between">
              <select
                value={selectedCrypto}
                onChange={(e) => setSelectedCrypto(e.target.value as CryptoType)}
                onClick={(e) => e.preventDefault()}
                className="text-sm text-gray-600 bg-gray-50 border border-gray-200 rounded px-2 py-1"
              >
                <option value="USDC">USDC</option>
                <option value="USDT">USDT</option>
                <option value="ETH">ETH</option>
                <option value="BTC">BTC</option>
                <option value="NGNX">NGNX</option>
              </select>
              <span className="text-sm font-semibold text-green-600">
                {formatCrypto(property.priceInCrypto[selectedCrypto], selectedCrypto)}
              </span>
            </div>
          </div>

          {property.agent && (
            <div className="mt-4 pt-4 border-t flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-sm font-semibold text-green-600">
                    {property.agent.name?.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">{property.agent.name}</p>
                  <p className="text-xs text-gray-500">Verified Agent</p>
                </div>
              </div>
              {property.agent.rating && (
                <div className="flex items-center space-x-1">
                  <span className="text-yellow-500">★</span>
                  <span className="text-sm font-semibold text-gray-700">{property.agent.rating}</span>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}


