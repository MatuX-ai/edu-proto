'use client';

import { notFound } from 'next/navigation';
import DashboardLayout from '../../components/dashboard-layout';
import DashboardContent from '../../components/dashboard-content';
import DataTablePage from '../../components/pages/data-table-page';
import EnhancedStatsPage from '../../components/pages/enhanced-stats-page';
import LiveControlPage from '../../components/pages/live-control-page';
import ScheduleFormPage from '../../components/pages/schedule-form-page';
import { institutionConfigs, InstitutionType } from '../../config/institution-config';

export default function TrainingMenuPage({ params }: { params: { menuId: string } }) {
  const type: InstitutionType = 'training';
  const config = institutionConfigs[type];
  const menuId = params.menuId;

  // 查找当前菜单配置
  const menuItem = config.sidebarItems.find(item => item.id === menuId);
  if (!menuItem) return notFound();

  // 获取模拟数据
  const mockData = config.mockData?.[menuId];

  return (
    <DashboardLayout config={config} activeMenu={menuId}>
      {menuId === 'dashboard' ? (
        <DashboardContent config={config} />
      ) : menuItem.pageType === 'table' && mockData ? (
        <DataTablePage 
          title={mockData.title} 
          columns={mockData.columns} 
          rows={mockData.rows} 
        />
      ) : menuItem.pageType === 'stats' ? (
        <EnhancedStatsPage title={menuItem.label} type="bar" />
      ) : menuItem.pageType === 'live' ? (
        <LiveControlPage />
      ) : menuItem.pageType === 'form' && menuId === 'schedule' ? (
        <ScheduleFormPage />
      ) : (
        <div className="flex items-center justify-center h-64 text-gray-500">
          该功能页面正在开发中...
        </div>
      )}
    </DashboardLayout>
  );
}
