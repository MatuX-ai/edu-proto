'use client';

import { useState, useEffect } from 'react';
import { Briefcase, School, GraduationCap, Landmark } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import DashboardLayout from './components/dashboard-layout';
import TrainingDashboardPage from './components/pages/training-dashboard-page';
import K12DashboardPage from './components/pages/k12-dashboard-page';
import VocationalDashboardPage from './components/pages/vocational-dashboard-page';
import BureauDashboardPage from './components/pages/bureau-dashboard-page';
import { institutionConfigs } from './config/institution-config';

const institutionTypes = [
  {
    key: 'training',
    title: '培训机构',
    subtitle: 'STEM 教育培训管理',
    icon: Briefcase,
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200'
  },
  {
    key: 'k12',
    title: 'K12 学校',
    subtitle: '智慧校园管理系统',
    icon: School,
    color: 'from-green-500 to-green-600',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-200'
  },
  {
    key: 'vocational',
    title: '职业学校',
    subtitle: '职业教育管理平台',
    icon: GraduationCap,
    color: 'from-purple-500 to-purple-600',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-200'
  },
  {
    key: 'education-bureau',
    title: '教育局',
    subtitle: '区域教育监管中心',
    icon: Landmark,
    color: 'from-orange-500 to-orange-600',
    bgColor: 'bg-orange-50',
    borderColor: 'border-orange-200'
  }
];

export default function InstitutionDashboardPage() {
  const [activeTab, setActiveTab] = useState<'training' | 'k12' | 'vocational' | 'education-bureau'>('training');
  const [activeMenu, setActiveMenu] = useState('dashboard');

  // 监听侧边栏菜单切换事件
  useEffect(() => {
    const handleMenuChange = (event: CustomEvent) => {
      const { menuId, type } = event.detail;
      if (type === activeTab) {
        setActiveMenu(menuId);
      }
    };

    window.addEventListener('menuChange', handleMenuChange as EventListener);
    return () => window.removeEventListener('menuChange', handleMenuChange as EventListener);
  }, [activeTab]);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Institution Navigation Tabs - Integrated into Header */}
      <div className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-40">
        <div className="max-w-[1280px] mx-auto px-6 py-4">
          <div className="flex items-center justify-between gap-6">
            <div className="flex items-center gap-3 shrink-0">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center shadow-md">
                <Landmark className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-lg font-bold text-gray-900 leading-tight">机构管理驾驶舱</h1>
                <p className="text-xs text-gray-500">Institution Management Cockpit</p>
              </div>
            </div>
            
            <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide pb-1">
              {institutionTypes.map((type) => {
                const Icon = type.icon;
                const isActive = activeTab === type.key;
                return (
                  <motion.button
                    key={type.key}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setActiveTab(type.key as typeof activeTab)}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-lg transition-all whitespace-nowrap ${
                      isActive 
                        ? 'bg-slate-900 text-white shadow-md' 
                        : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    <Icon className={`w-4 h-4 ${isActive ? 'text-blue-400' : 'text-gray-400'}`} />
                    <span className="text-sm font-medium">{type.title}</span>
                  </motion.button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Dashboard Content */}
      <DashboardLayout config={institutionConfigs[activeTab === 'education-bureau' ? 'bureau' : activeTab]} activeMenu={activeMenu}>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="space-y-6"
          >
            {activeTab === 'training' && <TrainingDashboardPage config={institutionConfigs['training']} />}
            {activeTab === 'k12' && <K12DashboardPage config={institutionConfigs['k12']} />}
            {activeTab === 'vocational' && <VocationalDashboardPage config={institutionConfigs['vocational']} />}
            {activeTab === 'education-bureau' && <BureauDashboardPage config={institutionConfigs['bureau']} />}
          </motion.div>
        </AnimatePresence>
      </DashboardLayout>
    </div>
  );
}
