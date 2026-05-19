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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <div className="bg-white border-b border-slate-200 px-8 py-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
            MatuX 机构管理后台
          </h1>
          <p className="text-slate-500 mt-2">选择您的机构类型以进入管理系统</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-8 py-8">
        {/* Institution Type Selection - Compact Grid */}
        <div className="grid grid-cols-4 gap-4 mb-8">
          {institutionTypes.map((type, index) => {
            const Icon = type.icon;
            const isActive = activeTab === type.key;
            return (
              <motion.button
                key={type.key}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setActiveTab(type.key as typeof activeTab)}
                className={`flex flex-col items-center justify-center p-4 rounded-xl border-2 transition-all cursor-pointer ${
                  isActive 
                    ? `${type.bgColor} ${type.borderColor} shadow-lg` 
                    : 'bg-white border-slate-200 hover:border-slate-300 hover:shadow-md'
                }`}
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${type.color} flex items-center justify-center shadow-md mb-2`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <span className="text-sm font-semibold text-gray-700">{type.title}</span>
              </motion.button>
            );
          })}
        </div>

        {/* Dashboard Content - 显示在卡片下方 */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          {/* Institution Name Header */}
          <div className="mb-6 pb-4 border-b border-gray-200">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                {(() => {
                  const typeConfig = institutionTypes.find(t => t.key === activeTab) || institutionTypes[0];
                  const Icon = typeConfig.icon;
                  return <Icon className="w-5 h-5 text-white" />;
                })()}
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900">
                  {institutionConfigs[activeTab === 'education-bureau' ? 'bureau' : activeTab].title}
                </h2>
                <p className="text-sm text-gray-500">
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
            className="mt-8"
          >
            {activeTab === 'training' && (
              <DashboardLayout config={institutionConfigs['training']} activeMenu={activeMenu}>
                <TrainingDashboardPage config={institutionConfigs['training']} />
              </DashboardLayout>
            )}
            {activeTab === 'k12' && (
              <DashboardLayout config={institutionConfigs['k12']} activeMenu={activeMenu}>
                <K12DashboardPage config={institutionConfigs['k12']} />
              </DashboardLayout>
            )}
            {activeTab === 'vocational' && (
              <DashboardLayout config={institutionConfigs['vocational']} activeMenu={activeMenu}>
                <VocationalDashboardPage config={institutionConfigs['vocational']} />
              </DashboardLayout>
            )}
            {activeTab === 'education-bureau' && (
              <DashboardLayout config={institutionConfigs['bureau']} activeMenu={activeMenu}>
                <BureauDashboardPage config={institutionConfigs['bureau']} />
              </DashboardLayout>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

        {/* Footer Info */}
        <div className="mt-12 text-center text-slate-500 text-sm">
          <p>MatuX STEM 教育平台 © 2026</p>
          <p className="mt-2">支持培训机构、K12学校、职业学校、教育局四种机构类型</p>
        </div>
      </div>
    </div>
  );
}
