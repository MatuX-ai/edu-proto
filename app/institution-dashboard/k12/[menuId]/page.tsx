'use client';

import { notFound } from 'next/navigation';
import DashboardLayout from '../../components/dashboard-layout';
import DashboardContent from '../../components/dashboard-content';
import DataTablePage from '../../components/pages/data-table-page';
import EnhancedStatsPage from '../../components/pages/enhanced-stats-page';
import AcademicManagementPage from '../../components/pages/academic-management-page';
import GradeAnalysisPage from '../../components/pages/grade-analysis-page';
import { institutionConfigs, InstitutionType } from '../../config/institution-config';

export default function K12MenuPage({ params }: { params: { menuId: string } }) {
  const type: InstitutionType = 'k12';
  const config = institutionConfigs[type];
  const menuId = params.menuId;

  const menuItem = config.sidebarItems.find(item => item.id === menuId);
  if (!menuItem) return notFound();

  const mockData = config.mockData?.[menuId];

  return (
    <DashboardLayout config={config} activeMenu={menuId}>
      {menuId === 'dashboard' ? (
        <DashboardContent config={config} />
      ) : menuId === 'academic' ? (
        <AcademicManagementPage />
      ) : menuId === 'grades' ? (
        <GradeAnalysisPage />
      ) : menuItem.pageType === 'table' && mockData ? (
        <DataTablePage title={mockData.title} columns={mockData.columns} rows={mockData.rows} />
      ) : menuItem.pageType === 'stats' ? (
        <EnhancedStatsPage title={menuItem.label} type="pie" />
      ) : (
        <div className="flex items-center justify-center h-64 text-gray-500">
          该功能页面正在开发中...
        </div>
      )}
    </DashboardLayout>
  );
}
