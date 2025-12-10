'use client';

import { Header } from '@/components/Header';
import { useStore } from '@/lib/store';
import { Shield, Users, Building2, Wrench, AlertCircle, CheckCircle, XCircle } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function AdminPage() {
  const { walletAddress } = useStore();
  const isConnected = !!walletAddress;
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<'agents' | 'properties' | 'artisans' | 'disputes'>('agents');

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
        <div className="flex items-center space-x-3 mb-8">
          <Shield className="h-10 w-10 text-green-600" />
          <div>
            <h1 className="text-4xl font-bold text-gray-900">Admin Dashboard</h1>
            <p className="text-gray-600">Manage platform operations and verify users</p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <StatCard
            icon={<Users className="h-6 w-6 text-blue-600" />}
            title="Pending Agents"
            value="3"
          />
          <StatCard
            icon={<Building2 className="h-6 w-6 text-green-600" />}
            title="Pending Properties"
            value="7"
          />
          <StatCard
            icon={<Wrench className="h-6 w-6 text-purple-600" />}
            title="Pending Artisans"
            value="5"
          />
          <StatCard
            icon={<AlertCircle className="h-6 w-6 text-red-600" />}
            title="Active Disputes"
            value="2"
          />
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="border-b">
            <div className="flex space-x-1 p-2">
              <TabButton
                active={activeTab === 'agents'}
                onClick={() => setActiveTab('agents')}
                icon={<Users className="h-4 w-4" />}
                label="Agent Verification"
              />
              <TabButton
                active={activeTab === 'properties'}
                onClick={() => setActiveTab('properties')}
                icon={<Building2 className="h-4 w-4" />}
                label="Property Approval"
              />
              <TabButton
                active={activeTab === 'artisans'}
                onClick={() => setActiveTab('artisans')}
                icon={<Wrench className="h-4 w-4" />}
                label="Artisan Verification"
              />
              <TabButton
                active={activeTab === 'disputes'}
                onClick={() => setActiveTab('disputes')}
                icon={<AlertCircle className="h-4 w-4" />}
                label="Disputes"
              />
            </div>
          </div>

          <div className="p-6">
            {activeTab === 'agents' && <AgentVerificationTab />}
            {activeTab === 'properties' && <PropertyApprovalTab />}
            {activeTab === 'artisans' && <ArtisanVerificationTab />}
            {activeTab === 'disputes' && <DisputesTab />}
          </div>
        </div>
      </div>
    </div>
  );
}

function StatCard({ icon, title, value }: { 
  icon: React.ReactNode; 
  title: string; 
  value: string;
}) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex items-center justify-between mb-3">
        <div>{icon}</div>
      </div>
      <h3 className="text-sm font-medium text-gray-600 mb-1">{title}</h3>
      <p className="text-3xl font-bold text-gray-900">{value}</p>
    </div>
  );
}

function TabButton({ active, onClick, icon, label }: {
  active: boolean;
  onClick: () => void;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-colors ${
        active
          ? 'bg-green-600 text-white'
          : 'text-gray-600 hover:bg-gray-100'
      }`}
    >
      {icon}
      <span>{label}</span>
    </button>
  );
}

function AgentVerificationTab() {
  const pendingAgents = [
    { id: '1', name: 'Tunde Adebayo', email: 'tunde@example.com', wallet: '0x1234...5678', documents: 3 },
    { id: '2', name: 'Ngozi Okonkwo', email: 'ngozi@example.com', wallet: '0x2345...6789', documents: 4 },
    { id: '3', name: 'Yusuf Ibrahim', email: 'yusuf@example.com', wallet: '0x3456...7890', documents: 3 },
  ];

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-gray-900 mb-4">Pending Agent Verifications</h2>
      {pendingAgents.map((agent) => (
        <div key={agent.id} className="border border-gray-200 rounded-lg p-4 hover:border-green-600 transition-colors">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900">{agent.name}</h3>
              <p className="text-sm text-gray-600">{agent.email}</p>
              <p className="text-xs text-gray-500 mt-1">Wallet: {agent.wallet}</p>
              <p className="text-xs text-gray-500">{agent.documents} documents submitted</p>
            </div>
            <div className="flex space-x-2">
              <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center space-x-1">
                <CheckCircle className="h-4 w-4" />
                <span>Approve</span>
              </button>
              <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors flex items-center space-x-1">
                <XCircle className="h-4 w-4" />
                <span>Reject</span>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function PropertyApprovalTab() {
  return (
    <div className="text-center py-12">
      <Building2 className="h-12 w-12 text-gray-300 mx-auto mb-3" />
      <p className="text-gray-600">No pending property approvals</p>
    </div>
  );
}

function ArtisanVerificationTab() {
  return (
    <div className="text-center py-12">
      <Wrench className="h-12 w-12 text-gray-300 mx-auto mb-3" />
      <p className="text-gray-600">No pending artisan verifications</p>
    </div>
  );
}

function DisputesTab() {
  return (
    <div className="text-center py-12">
      <AlertCircle className="h-12 w-12 text-gray-300 mx-auto mb-3" />
      <p className="text-gray-600">No active disputes</p>
    </div>
  );
}



