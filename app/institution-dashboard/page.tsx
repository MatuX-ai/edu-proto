'use client';

import { useState, useEffect } from 'react';
import { Briefcase, School, GraduationCap, Landmark } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import DashboardLayout from './components/dashboard-layout';
import TrainingDashboardPage from './components/pages/training-dashboard-page';
import K12DashboardPage from './components/pages/k12-dashboard-page';
import VocationalDashboardPage from './components/pages/vocational-dashboard-page';
import BureauDashboardPage from './components/pages/bureau-dashboard-page';
import DataTablePage from './components/pages/data-table-page';
import LeadsPage from './components/pages/leads-page';
import ScheduleFormPage from './components/pages/schedule-form-page';
import LiveControlPage from './components/pages/live-control-page';
import SettlementPage from './components/pages/settlement-page';
import EnhancedStatsPage from './components/pages/enhanced-stats-page';
import SettingsPage from './components/pages/settings-page';

// K12 Pages
import CourseManagementPage from './components/pages/course-management-page';
import StudentParticipationPage from './components/pages/student-participation-page';
import PortfolioGalleryPage from './components/pages/portfolio-gallery-page';
import LearningCommunityPage from './components/pages/learning-community-page';
import ParentInteractionPage from './components/pages/parent-interaction-page';
import ResourceEquipmentPage from './components/pages/resource-equipment-page';

// Vocational Pages
import StemAuxiliaryPage from './components/pages/stem-auxiliary-page';
import IndustryCoopPage from './components/pages/industry-coop-page';
import IncubatorPage from './components/pages/incubator-page';
import DigitalTwinLabPage from './components/pages/digital-twin-lab-page';
import PatentsPage from './components/pages/patents-page';
import SkillWalletPage from './components/pages/skill-wallet-page';

// Bureau Pages
import StemCompetitionsPage from './components/pages/stem-competitions-page';
import AwardsEvaluationPage from './components/pages/awards-evaluation-page';
import QualityMonitoringPage from './components/pages/quality-monitoring-page';
import SchoolManagementPage from './components/pages/school-management-page';
import PolicyDraftPage from './components/pages/policy-draft-page';
import CompetitionManagementPage from './components/pages/competition-management-page';
import ProjectKanbanPage from './components/pages/project-kanban-page';
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
      // 类型映射：将配置中的 'bureau' 映射到主页面的 'education-bureau'
      const mappedType = type === 'bureau' ? 'education-bureau' : type;
      if (mappedType === activeTab) {
        setActiveMenu(menuId);
      }
    };

    window.addEventListener('menuChange', handleMenuChange as EventListener);
    return () => window.removeEventListener('menuChange', handleMenuChange as EventListener);
  }, [activeTab]);

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col items-center py-8">
      {/* Institution Navigation Tabs - Integrated into Header */}
      <div className="w-full max-w-[1280px] mb-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 px-6 py-4">
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

      {/* Dashboard Content - Simulated Device Frame */}
      <div className="w-full max-w-[1280px]">
        <DashboardLayout config={institutionConfigs[activeTab === 'education-bureau' ? 'bureau' : (activeTab as keyof typeof institutionConfigs)]} activeMenu={activeMenu}>
          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeTab}-${activeMenu}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="space-y-6"
            >
              {renderPageContent(activeTab, activeMenu)}
            </motion.div>
          </AnimatePresence>
        </DashboardLayout>
      </div>
    </div>
  );
}

function renderPageContent(activeTab: string, activeMenu: string) {
  const config = institutionConfigs[activeTab === 'education-bureau' ? 'bureau' : activeTab as keyof typeof institutionConfigs];
  
  // Dashboard Home Pages
  if (activeMenu === 'dashboard') {
    if (activeTab === 'training') return <TrainingDashboardPage config={config} />;
    if (activeTab === 'k12') return <K12DashboardPage config={config} />;
    if (activeTab === 'vocational') return <VocationalDashboardPage config={config} />;
    if (activeTab === 'education-bureau') return <BureauDashboardPage config={config} />;
  }

  // Dynamic Page Rendering based on pageType in config
  const menuItem = config.sidebarItems.find(item => item.id === activeMenu);
  if (!menuItem) return <SettingsPage />;

  switch (menuItem.pageType) {
    case 'table': {
      const tableData = config.mockData?.[activeMenu];
      if (activeMenu === 'leads') return <LeadsPage config={config} />;
      return <DataTablePage 
        title={tableData?.title || menuItem.label} 
        columns={tableData?.columns || []} 
        rows={tableData?.rows || []} 
      />;
    }
    case 'form':
      if (activeMenu === 'schedule') return <ScheduleFormPage config={config} />;
      if (activeMenu === 'stem-courses') return <CourseManagementPage />;
      if (activeMenu === 'learning-community') return <LearningCommunityPage />;
      if (activeMenu === 'parent-interaction') return <ParentInteractionPage />;
      if (activeMenu === 'incubator') return <IncubatorPage />;
      if (activeMenu === 'awards-evaluation') return <AwardsEvaluationPage />;
      if (activeMenu === 'policy-draft') return <PolicyDraftPage />;
      return <ScheduleFormPage config={config} />; // Fallback for forms
    case 'stats':
      if (activeMenu === 'settlement') return <SettlementPage config={config} />;
      if (activeMenu === 'student-participation') return <StudentParticipationPage />;
      if (activeMenu === 'quality-monitoring') return <QualityMonitoringPage />;
      if (activeMenu === 'resource-allocation') return <EnhancedStatsPage title="资源均衡配置" type="bar" />;
      return <EnhancedStatsPage title={menuItem.label} type="bar" />;
    case 'live':
      return <LiveControlPage />;
    case 'digital-twin':
      return <DigitalTwinLabPage />;
    case 'kanban':
      if (activeMenu === 'industry-coop') return <IndustryCoopPage />;
      if (activeMenu === 'stem-competitions') return <StemCompetitionsPage />;
      return <ProjectKanbanPage />;
    case 'skill-wallet':
      return <SkillWalletPage />;
    default:
      // Specific Page Overrides
      if (activeMenu === 'portfolio-gallery') return <PortfolioGalleryPage />;
      if (activeMenu === 'competitions') return <CompetitionManagementPage />;
      if (activeMenu === 'resources') return <ResourceEquipmentPage />;
      if (activeMenu === 'stem-auxiliary') return <StemAuxiliaryPage />;
      if (activeMenu === 'patents') return <PatentsPage />;
      if (activeMenu === 'schools') return <SchoolManagementPage />;
      if (activeMenu === 'reports') return <EnhancedStatsPage title="数据报表" type="bar" />;
      if (activeMenu === 'settings') return <SettingsPage />;
      return <DataTablePage title={menuItem.label} columns={[]} rows={[]} />;
  }
}
