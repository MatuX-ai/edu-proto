'use client';

import { notFound } from 'next/navigation';
import DashboardLayout from '../../components/dashboard-layout';
import DashboardContent from '../../components/dashboard-content';
import DataTablePage from '../../components/pages/data-table-page';
import EnhancedStatsPage from '../../components/pages/enhanced-stats-page';
import DigitalTwinLabPage from '../../components/pages/digital-twin-lab-page';
import DigitalTwinPage from '../../components/pages/digital-twin-page';
import ProjectKanbanPage from '../../components/pages/project-kanban-page';
import SkillWalletPage from '../../components/pages/skill-wallet-page';
import ProjectWorkshopPage from '../../components/pages/project-workshop-page';
import PatentsPage from '../../components/pages/patents-page';
import ReportsPage from '../../components/pages/reports-page';
import SettingsPage from '../../components/pages/settings-page';
import StemAuxiliaryPage from '../../components/pages/stem-auxiliary-page';
import IndustryCoopPage from '../../components/pages/industry-coop-page';
import IncubatorPage from '../../components/pages/incubator-page';
import { institutionConfigs, InstitutionType } from '../../config/institution-config';

export default function VocationalMenuPage({ params }: { params: { menuId: string } }) {
  const type: InstitutionType = 'vocational';
  const config = institutionConfigs[type];
  const menuId = params.menuId;

  const menuItem = config.sidebarItems.find(item => item.id === menuId);
  if (!menuItem) return notFound();

  const mockData = config.mockData?.[menuId];

  return (
    <DashboardLayout config={config} activeMenu={menuId}>
      {menuId === 'dashboard' ? (
        <DashboardContent config={config} />
      ) : menuId === 'stem-auxiliary' ? (
        <StemAuxiliaryPage />
      ) : menuId === 'industry-coop' ? (
        <IndustryCoopPage />
      ) : menuId === 'incubator' ? (
        <IncubatorPage />
      ) : menuId === 'project-workshop' ? (
        <ProjectWorkshopPage />
      ) : menuId === 'training-base' ? (
        <DigitalTwinPage />
      ) : menuItem.pageType === 'table' && mockData ? (
        <DataTablePage title={mockData.title} columns={mockData.columns} rows={mockData.rows} />
      ) : menuItem.pageType === 'stats' ? (
        <EnhancedStatsPage title={menuItem.label} type="bar" />
      ) : menuItem.pageType === 'digital-twin' ? (
        <DigitalTwinLabPage />
      ) : menuItem.pageType === 'kanban' ? (
        <ProjectKanbanPage />
      ) : menuItem.pageType === 'skill-wallet' ? (
        <SkillWalletPage />
      ) : menuId === 'patents' ? (
        <PatentsPage />
      ) : menuId === 'reports' ? (
        <ReportsPage institutionType="职业学校" />
      ) : menuId === 'settings' ? (
        <SettingsPage />
      ) : (
        <div className="flex items-center justify-center h-64 text-gray-500">
          该功能页面正在开发中...
        </div>
      )}
    </DashboardLayout>
  );
}
