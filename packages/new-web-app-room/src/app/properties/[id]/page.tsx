'use client';

import { Header } from '@/components/Header';
import { mockProperties } from '@/lib/mock-data';
import { MapPin, Bed, Bath, Square, Phone, Mail, Star, ArrowLeft } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { formatCurrency, formatCrypto } from '@/lib/utils';
import { useState } from 'react';
import { CryptoType } from '@/types';
import { useAccount } from 'wagmi';
import { useParams } from 'next/navigation';

export default function PropertyDetailPage() {
  const params = useParams();
  const { isConnected } = useAccount();
  const [selectedCrypto, setSelectedCrypto] = useState<CryptoType>('USDC');
  const [selectedImage, setSelectedImage] = useState(0);
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  const property = mockProperties.find((p) => p.id === params.id);

  if (!property) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-bold text-gray-900">Property not found</h1>
          <Link href="/properties" className="text-green-600 hover:underline mt-4 inline-block">
            Back to properties
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Link
          href="/properties"
          className="inline-flex items-center space-x-2 text-gray-600 hover:text-gray-900 mb-6"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to properties</span>
        </Link>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Image Gallery */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="relative h-96">
                <Image
                  src={property.images[selectedImage]}
                  alt={property.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4 px-3 py-1 bg-green-600 text-white rounded-full text-sm font-semibold">
                  {property.type === 'rent' ? 'For Rent' : 'For Sale'}
                </div>
              </div>
              <div className="p-4 flex gap-2 overflow-x-auto">
                {property.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`relative w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden ${
                      selectedImage === index ? 'ring-2 ring-green-600' : ''
                    }`}
                  >
                    <Image src={image} alt={`View ${index + 1}`} fill className="object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Property Details */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{property.title}</h1>
              
              <div className="flex items-center text-gray-600 mb-6">
                <MapPin className="h-5 w-5 mr-2" />
                <span>{property.location.address}, {property.location.city}, {property.location.state}</span>
              </div>

              <div className="grid grid-cols-4 gap-4 mb-6 pb-6 border-b">
                <div className="text-center">
                  <Bed className="h-6 w-6 text-gray-500 mx-auto mb-2" />
                  <p className="text-sm text-gray-600">Bedrooms</p>
                  <p className="text-lg font-semibold text-gray-900">{property.features.bedrooms}</p>
                </div>
                <div className="text-center">
                  <Bath className="h-6 w-6 text-gray-500 mx-auto mb-2" />
                  <p className="text-sm text-gray-600">Bathrooms</p>
                  <p className="text-lg font-semibold text-gray-900">{property.features.bathrooms}</p>
                </div>
                <div className="text-center">
                  <Square className="h-6 w-6 text-gray-500 mx-auto mb-2" />
                  <p className="text-sm text-gray-600">Area</p>
                  <p className="text-lg font-semibold text-gray-900">{property.features.area} m²</p>
                </div>
                <div className="text-center">
                  <div className="h-6 w-6 text-gray-500 mx-auto mb-2 flex items-center justify-center">🚗</div>
                  <p className="text-sm text-gray-600">Parking</p>
                  <p className="text-lg font-semibold text-gray-900">{property.features.parking || 0}</p>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-3">Description</h2>
                <p className="text-gray-600 leading-relaxed">{property.description}</p>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Location</h2>
              <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
                <p className="text-gray-500">Map view coming soon</p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Price Card */}
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
              <div className="mb-6">
                <p className="text-sm text-gray-600 mb-1">Price</p>
                <p className="text-3xl font-bold text-gray-900">{formatCurrency(property.price)}</p>
                {property.type === 'rent' && (
                  <p className="text-sm text-gray-500">per year</p>
                )}
              </div>

              <div className="mb-6 pb-6 border-b">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Pay with Crypto
                </label>
                <select
                  value={selectedCrypto}
                  onChange={(e) => setSelectedCrypto(e.target.value as CryptoType)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent mb-3"
                >
                  <option value="USDC">USDC</option>
                  <option value="USDT">USDT</option>
                  <option value="ETH">ETH</option>
                  <option value="BTC">BTC</option>
                  <option value="NGNX">NGNX</option>
                </select>
                <div className="bg-green-50 p-3 rounded-lg">
                  <p className="text-sm text-gray-600">Amount in {selectedCrypto}</p>
                  <p className="text-xl font-bold text-green-600">
                    {formatCrypto(property.priceInCrypto[selectedCrypto], selectedCrypto)}
                  </p>
                </div>
              </div>

              {isConnected ? (
                <button
                  onClick={() => setShowPaymentModal(true)}
                  className="w-full py-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-semibold text-lg"
                >
                  {property.type === 'rent' ? 'Rent Now' : 'Buy Now'}
                </button>
              ) : (
                <div className="text-center">
                  <p className="text-sm text-gray-600 mb-3">Connect your wallet to proceed</p>
                  <button className="w-full py-4 bg-gray-200 text-gray-500 rounded-lg cursor-not-allowed font-semibold">
                    Connect Wallet First
                  </button>
                </div>
              )}

              <p className="text-xs text-gray-500 text-center mt-4">
                🔒 Secured by smart contract escrow
              </p>
            </div>

            {/* Agent Card */}
            {property.agent && (
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Listed by</h3>
                <div className="flex items-start space-x-3 mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-lg font-semibold text-green-600">
                      {property.agent.name?.charAt(0)}
                    </span>
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900">{property.agent.name}</p>
                    <p className="text-sm text-gray-500">Verified Agent</p>
                    {property.agent.rating && (
                      <div className="flex items-center space-x-1 mt-1">
                        <Star className="h-4 w-4 text-yellow-500 fill-current" />
                        <span className="text-sm font-semibold text-gray-700">{property.agent.rating}</span>
                      </div>
                    )}
                  </div>
                </div>
                <div className="space-y-2">
                  {property.agent.phone && (
                    <a
                      href={`tel:${property.agent.phone}`}
                      className="flex items-center space-x-2 text-gray-600 hover:text-green-600"
                    >
                      <Phone className="h-4 w-4" />
                      <span className="text-sm">{property.agent.phone}</span>
                    </a>
                  )}
                  {property.agent.email && (
                    <a
                      href={`mailto:${property.agent.email}`}
                      className="flex items-center space-x-2 text-gray-600 hover:text-green-600"
                    >
                      <Mail className="h-4 w-4" />
                      <span className="text-sm">{property.agent.email}</span>
                    </a>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Payment Modal */}
      {showPaymentModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-md w-full p-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Complete Payment</h3>
            <div className="space-y-4 mb-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600">Property</p>
                <p className="font-semibold text-gray-900">{property.title}</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600">Amount</p>
                <p className="font-semibold text-gray-900">
                  {formatCrypto(property.priceInCrypto[selectedCrypto], selectedCrypto)}
                </p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <p className="text-sm text-green-700 mb-2">✓ Escrow Protection</p>
                <p className="text-xs text-gray-600">
                  Your payment will be held in a smart contract until you confirm receipt of keys/documents.
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => setShowPaymentModal(false)}
                className="flex-1 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  alert('Payment processing... (Demo mode)');
                  setShowPaymentModal(false);
                }}
                className="flex-1 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium"
              >
                Confirm Payment
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}


