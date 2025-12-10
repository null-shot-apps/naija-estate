'use client';

import { Header } from '@/components/Header';
import { useAccount } from 'wagmi';
import { Building2, Wrench, Wallet, FileText, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function DashboardPage() {
  const { isConnected } = useAccount();
  const router = useRouter();

  useEffect(() => {
    if (!isConnected) {
      router.push('/');
    }
  }, [isConnected, router]);

  if (!isConnected) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Dashboard
          </h1>
          <p className="text-gray-600">
            Manage your properties, transactions, and bookings
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <StatCard
            icon={<Building2 className="h-6 w-6 text-green-600" />}
            title="Properties"
            value="0"
            subtitle="Owned/Rented"
          />
          <StatCard
            icon={<Wrench className="h-6 w-6 text-blue-600" />}
            title="Active Jobs"
            value="0"
            subtitle="In Progress"
          />
          <StatCard
            icon={<Wallet className="h-6 w-6 text-purple-600" />}
            title="Total Spent"
            value="₦0"
            subtitle="All Transactions"
          />
          <StatCard
            icon={<FileText className="h-6 w-6 text-orange-600" />}
            title="Contracts"
            value="0"
            subtitle="Active Escrows"
          />
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link
              href="/properties"
              className="flex items-center space-x-3 p-4 border-2 border-gray-200 rounded-lg hover:border-green-600 hover:bg-green-50 transition-all"
            >
              <Building2 className="h-8 w-8 text-green-600" />
              <div>
                <p className="font-semibold text-gray-900">Browse Properties</p>
                <p className="text-sm text-gray-600">Find your next home</p>
              </div>
            </Link>
            <Link
              href="/artisans"
              className="flex items-center space-x-3 p-4 border-2 border-gray-200 rounded-lg hover:border-green-600 hover:bg-green-50 transition-all"
            >
              <Wrench className="h-8 w-8 text-green-600" />
              <div>
                <p className="font-semibold text-gray-900">Hire Artisan</p>
                <p className="text-sm text-gray-600">Get work done</p>
              </div>
            </Link>
            <button className="flex items-center space-x-3 p-4 border-2 border-gray-200 rounded-lg hover:border-green-600 hover:bg-green-50 transition-all">
              <Wallet className="h-8 w-8 text-green-600" />
              <div className="text-left">
                <p className="font-semibold text-gray-900">View Wallet</p>
                <p className="text-sm text-gray-600">Check balance</p>
              </div>
            </button>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* My Properties */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-gray-900">My Properties</h2>
              <Link href="/properties" className="text-sm text-green-600 hover:underline">
                View All
              </Link>
            </div>
            <div className="text-center py-12">
              <Building2 className="h-12 w-12 text-gray-300 mx-auto mb-3" />
              <p className="text-gray-600 mb-4">No properties yet</p>
              <Link
                href="/properties"
                className="inline-block px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                Browse Properties
              </Link>
            </div>
          </div>

          {/* Recent Transactions */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-gray-900">Recent Transactions</h2>
              <button className="text-sm text-green-600 hover:underline">
                View All
              </button>
            </div>
            <div className="text-center py-12">
              <FileText className="h-12 w-12 text-gray-300 mx-auto mb-3" />
              <p className="text-gray-600">No transactions yet</p>
            </div>
          </div>
        </div>

        {/* Active Jobs */}
        <div className="bg-white rounded-xl shadow-lg p-6 mt-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-900">Active Jobs</h2>
            <Link href="/artisans" className="text-sm text-green-600 hover:underline">
              Hire Artisan
            </Link>
          </div>
          <div className="text-center py-12">
            <Wrench className="h-12 w-12 text-gray-300 mx-auto mb-3" />
            <p className="text-gray-600 mb-4">No active jobs</p>
            <Link
              href="/artisans"
              className="inline-block px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              Find Artisans
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatCard({ icon, title, value, subtitle }: { 
  icon: React.ReactNode; 
  title: string; 
  value: string; 
  subtitle: string;
}) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex items-center justify-between mb-3">
        <div>{icon}</div>
        <TrendingUp className="h-4 w-4 text-gray-400" />
      </div>
      <h3 className="text-sm font-medium text-gray-600 mb-1">{title}</h3>
      <p className="text-3xl font-bold text-gray-900 mb-1">{value}</p>
      <p className="text-xs text-gray-500">{subtitle}</p>
    </div>
  );
}



