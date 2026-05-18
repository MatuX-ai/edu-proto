'use client';

import { notFound } from 'next/navigation';
import DashboardLayout from '../../components/dashboard-layout';
import DashboardContent from '../../components/dashboard-content';
import DataTablePage from '../../components/pages/data-table-page';
import EnhancedStatsPage from '../../components/pages/enhanced-stats-page';
import StemCourseManagementPage from '../../components/pages/stem-course-management-page';
import StudentParticipationPage from '../../components/pages/student-participation-page';
import PortfolioGalleryPage from '../../components/pages/portfolio-gallery-page';
import LearningCommunityPage from '../../components/pages/learning-community-page';
import CompetitionManagementPage from '../../components/pages/competition-management-page';
import ResourceEquipmentPage from '../../components/pages/resource-equipment-page';
import ParentInteractionPage from '../../components/pages/parent-interaction-page';
import ReportsPage from '../../components/pages/reports-page';
import SettingsPage from '../../components/pages/settings-page';
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
      ) : menuId === 'stem-courses' ? (
        <StemCourseManagementPage />
      ) : menuId === 'student-participation' ? (
        <StudentParticipationPage />
      ) : menuId === 'portfolio-gallery' ? (
        <PortfolioGalleryPage />
      ) : menuId === 'learning-community' ? (
        <LearningCommunityPage />
      ) : menuId === 'competitions' ? (
        <CompetitionManagementPage />
      ) : menuId === 'resources' ? (
        <ResourceEquipmentPage />
      ) : menuId === 'parent-interaction' ? (
        <ParentInteractionPage />
      ) : menuId === 'reports' ? (
        <ReportsPage institutionType="K12学校" />
      ) : menuId === 'settings' ? (
        <SettingsPage />
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
