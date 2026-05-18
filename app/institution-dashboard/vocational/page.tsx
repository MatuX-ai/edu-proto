'use client';

import { Briefcase, School, GraduationCap, Landmark } from 'lucide-react';
import Link from 'next/link';
import DashboardLayout from '../components/dashboard-layout';
import DashboardContent from '../components/dashboard-content';
import { institutionConfigs } from '../config/institution-config';

export default function VocationalDashboardPage() {
  const config = institutionConfigs.vocational;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 flex flex-col items-center justify-center py-8 px-4">
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-orange-700 to-orange-900 bg-clip-text text-transparent mb-2">
          MatuX 机构管理后台 - 职业学校
        </h1>
        <p className="text-slate-600">全功能机构运营管理平台</p>
      </div>

      <div className="flex gap-3 mb-6">
        {([
          { key: 'training', label: '培训机构', icon: Briefcase },
          { key: 'k12', label: 'K12学校', icon: School },
          { key: 'vocational', label: '职业学校', icon: GraduationCap },
          { key: 'bureau', label: '教育局', icon: Landmark }
        ] as const).map((tab) => {
          const TabIconComponent = tab.icon;
          return (
            <Link
              key={tab.key}
              href={`/institution-dashboard/${tab.key}`}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl whitespace-nowrap transition-all ${
                tab.key === 'vocational'
                  ? 'bg-gradient-to-r from-orange-600 to-orange-700 text-white shadow-lg shadow-orange-200 scale-105'
                  : 'bg-white text-gray-600 hover:bg-blue-50 border border-gray-200'
              }`}
            >
              <TabIconComponent className="h-5 w-5" />
              <span className="text-sm font-medium">{tab.label}</span>
            </Link>
          );
        })}
      </div>

      <DashboardLayout config={config} activeMenu="dashboard">
        <DashboardContent config={config} />
      </DashboardLayout>
    </div>
  );
}
