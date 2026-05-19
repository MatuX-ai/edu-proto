import { notFound } from 'next/navigation';
import DashboardLayout from '../../components/dashboard-layout';
import DashboardContent from '../../components/dashboard-content';
import DataTablePage from '../../components/pages/data-table-page';
import EnhancedStatsPage from '../../components/pages/enhanced-stats-page';
import LiveControlPage from '../../components/pages/live-control-page';
import ScheduleFormPage from '../../components/pages/schedule-form-page';
import ReportsPage from '../../components/pages/reports-page';
import SettingsPage from '../../components/pages/settings-page';
import TrainingDashboardPage from '../../components/pages/training-dashboard-page';
import { institutionConfigs, InstitutionType } from '../../config/institution-config';

// 生成静态参数，确保 Vercel 部署时路由正常工作
export function generateStaticParams() {
  const config = institutionConfigs['training'];
  return config.sidebarItems.map((item) => ({
    menuId: item.id,
  }));
}

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
        <TrainingDashboardPage config={config} />
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
      ) : menuId === 'reports' ? (
        <ReportsPage institutionType="培训机构" />
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
