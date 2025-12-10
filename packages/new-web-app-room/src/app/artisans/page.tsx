'use client';

import { Header } from '@/components/Header';
import { ArtisanCard } from '@/components/ArtisanCard';
import { mockArtisans } from '@/lib/mock-data';
import { Search } from 'lucide-react';
import { useState } from 'react';
import { ArtisanCategory } from '@/types';

export default function ArtisansPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterCategory, setFilterCategory] = useState<ArtisanCategory | 'all'>('all');

  const filteredArtisans = mockArtisans.filter((artisan) => {
    const matchesSearch = artisan.user?.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         artisan.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = filterCategory === 'all' || artisan.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Find Skilled Artisans
          </h1>
          <p className="text-gray-600">
            Hire verified professionals and pay securely with cryptocurrency
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search Bar */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search by name or skill..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <select
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value as ArtisanCategory | 'all')}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            >
              <option value="all">All Categories</option>
              <option value="plumber">Plumbers</option>
              <option value="electrician">Electricians</option>
              <option value="painter">Painters</option>
              <option value="carpenter">Carpenters</option>
            </select>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-3 mb-8">
          <button
            onClick={() => setFilterCategory('all')}
            className={`px-6 py-2 rounded-full font-medium transition-colors ${
              filterCategory === 'all'
                ? 'bg-green-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            All
          </button>
          <button
            onClick={() => setFilterCategory('plumber')}
            className={`px-6 py-2 rounded-full font-medium transition-colors ${
              filterCategory === 'plumber'
                ? 'bg-green-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            🔧 Plumbers
          </button>
          <button
            onClick={() => setFilterCategory('electrician')}
            className={`px-6 py-2 rounded-full font-medium transition-colors ${
              filterCategory === 'electrician'
                ? 'bg-green-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            ⚡ Electricians
          </button>
          <button
            onClick={() => setFilterCategory('painter')}
            className={`px-6 py-2 rounded-full font-medium transition-colors ${
              filterCategory === 'painter'
                ? 'bg-green-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            🎨 Painters
          </button>
          <button
            onClick={() => setFilterCategory('carpenter')}
            className={`px-6 py-2 rounded-full font-medium transition-colors ${
              filterCategory === 'carpenter'
                ? 'bg-green-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            🪚 Carpenters
          </button>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing <span className="font-semibold">{filteredArtisans.length}</span> artisans
          </p>
        </div>

        {/* Artisans Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArtisans.map((artisan) => (
            <ArtisanCard key={artisan.id} artisan={artisan} />
          ))}
        </div>

        {/* Empty State */}
        {filteredArtisans.length === 0 && (
          <div className="text-center py-20">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">
              <Search className="h-8 w-8 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No artisans found
            </h3>
            <p className="text-gray-600">
              Try adjusting your search or filters
            </p>
          </div>
        )}
      </div>
    </div>
  );
}


