'use client';

import { notFound } from 'next/navigation';
import DashboardLayout from '../../components/dashboard-layout';
import DashboardContent from '../../components/dashboard-content';
import DataTablePage from '../../components/pages/data-table-page';
import StatsOverviewPage from '../../components/pages/stats-overview-page';
import DigitalTwinLabPage from '../../components/pages/digital-twin-lab-page';
import ProjectKanbanPage from '../../components/pages/project-kanban-page';
import SkillWalletPage from '../../components/pages/skill-wallet-page';
import ProjectWorkshopPage from '../../components/pages/project-workshop-page';
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
      ) : menuId === 'project-workshop' ? (
        <ProjectWorkshopPage />
      ) : menuItem.pageType === 'table' && mockData ? (
        <DataTablePage title={mockData.title} columns={mockData.columns} rows={mockData.rows} />
      ) : menuItem.pageType === 'stats' ? (
        <StatsOverviewPage title={menuItem.label} />
      ) : menuItem.pageType === 'digital-twin' ? (
        <DigitalTwinLabPage />
      ) : menuItem.pageType === 'kanban' ? (
        <ProjectKanbanPage />
      ) : menuItem.pageType === 'skill-wallet' ? (
        <SkillWalletPage />
      ) : (
        <div className="flex items-center justify-center h-64 text-gray-500">
          该功能页面正在开发中...
        </div>
      )}
    </DashboardLayout>
  );
}
