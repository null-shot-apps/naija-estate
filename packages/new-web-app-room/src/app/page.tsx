'use client';

import { Header } from '@/components/Header';
import { Building2, Shield, Coins, Users, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <Header />
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Buy & Rent Properties with{' '}
              <span className="text-green-600">Crypto</span> in Nigeria
            </h1>
            <p className="text-xl text-gray-600">
              HomeChain Naija connects you with verified real estate agents and properties. 
              Pay with USDC, USDT, ETH, BTC, or NGNX. Secure, transparent, and fast.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/properties"
                className="flex items-center space-x-2 px-8 py-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-semibold text-lg"
              >
                <span>Browse Properties</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/artisans"
                className="flex items-center space-x-2 px-8 py-4 bg-white border-2 border-green-600 text-green-600 rounded-lg hover:bg-green-50 transition-colors font-semibold text-lg"
              >
                <span>Find Artisans</span>
              </Link>
            </div>
          </div>
          
          <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800"
              alt="Modern Nigerian home"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Why Choose HomeChain Naija?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard
            icon={<Shield className="h-8 w-8 text-green-600" />}
            title="Secure Escrow"
            description="Your funds are held in smart contracts until both parties confirm the transaction."
          />
          <FeatureCard
            icon={<Coins className="h-8 w-8 text-green-600" />}
            title="Multiple Cryptos"
            description="Pay with USDC, USDT, ETH, BTC, or NGNX. We support all major cryptocurrencies."
          />
          <FeatureCard
            icon={<Building2 className="h-8 w-8 text-green-600" />}
            title="NFT Certificates"
            description="Get blockchain-verified property ownership certificates as NFTs."
          />
          <FeatureCard
            icon={<Users className="h-8 w-8 text-green-600" />}
            title="Verified Agents"
            description="All agents and artisans are verified and rated by the community."
          />
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <StepCard
              number="1"
              title="Connect Your Wallet"
              description="Use MetaMask or WalletConnect to securely connect your crypto wallet."
            />
            <StepCard
              number="2"
              title="Browse & Select"
              description="Explore verified properties and artisans. View details, prices, and reviews."
            />
            <StepCard
              number="3"
              title="Pay with Crypto"
              description="Complete transactions using escrow smart contracts for maximum security."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-12 text-center text-white">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-green-50">
            Join thousands of Nigerians using crypto for real estate transactions.
          </p>
          <Link
            href="/properties"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-green-600 rounded-lg hover:bg-green-50 transition-colors font-semibold text-lg"
          >
            <span>Explore Properties Now</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Building2 className="h-6 w-6 text-green-500" />
                <span className="text-xl font-bold">HomeChain Naija</span>
              </div>
              <p className="text-gray-400">
                Nigeria&apos;s first crypto-powered real estate platform.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Platform</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/properties" className="hover:text-white">Properties</Link></li>
                <li><Link href="/artisans" className="hover:text-white">Artisans</Link></li>
                <li><Link href="/dashboard" className="hover:text-white">Dashboard</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="#" className="hover:text-white">Help Center</Link></li>
                <li><Link href="#" className="hover:text-white">Contact Us</Link></li>
                <li><Link href="#" className="hover:text-white">FAQs</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="#" className="hover:text-white">Terms of Service</Link></li>
                <li><Link href="#" className="hover:text-white">Privacy Policy</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 HomeChain Naija. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function StepCard({ number, title, description }: { number: string; title: string; description: string }) {
  return (
    <div className="relative bg-white p-8 rounded-xl shadow-lg">
      <div className="absolute -top-4 -left-4 w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
        {number}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-4">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}




