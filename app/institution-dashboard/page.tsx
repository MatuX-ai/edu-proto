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
    <DashboardLayout config={institutionConfigs[activeTab === 'education-bureau' ? 'bureau' : activeTab]} activeMenu={activeMenu}>
      {/* Main Content */}
      <div className="p-8">
        {/* Institution Name Header */}
        <div className="mb-8 pb-6 border-b border-gray-200">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg">
              {(() => {
                const typeConfig = institutionTypes.find(t => t.key === activeTab) || institutionTypes[0];
                const Icon = typeConfig.icon;
                return <Icon className="w-6 h-6 text-white" />;
              })()}
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                {institutionConfigs[activeTab === 'education-bureau' ? 'bureau' : activeTab].title}
              </h1>
              <p className="text-sm text-gray-500 mt-1">
                {institutionConfigs[activeTab === 'education-bureau' ? 'bureau' : activeTab].subtitle}
              </p>
            </div>
          </div>
        </div>
        
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {activeTab === 'training' && <TrainingDashboardPage config={institutionConfigs['training']} />}
            {activeTab === 'k12' && <K12DashboardPage config={institutionConfigs['k12']} />}
            {activeTab === 'vocational' && <VocationalDashboardPage config={institutionConfigs['vocational']} />}
            {activeTab === 'education-bureau' && <BureauDashboardPage config={institutionConfigs['bureau']} />}
          </motion.div>
        </AnimatePresence>
      </div>
    </DashboardLayout>
  );
}
