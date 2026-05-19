import { notFound } from 'next/navigation';
import DashboardLayout from '../../components/dashboard-layout';
import DashboardContent from '../../components/dashboard-content';
import DataTablePage from '../../components/pages/data-table-page';
import EnhancedStatsPage from '../../components/pages/enhanced-stats-page';
import PolicyDraftPage from '../../components/pages/policy-draft-page';
import SchoolManagementPage from '../../components/pages/school-management-page';
import ReportsPage from '../../components/pages/reports-page';
import SettingsPage from '../../components/pages/settings-page';
import StemCompetitionsPage from '../../components/pages/stem-competitions-page';
import AwardsEvaluationPage from '../../components/pages/awards-evaluation-page';
import QualityMonitoringPage from '../../components/pages/quality-monitoring-page';
import { institutionConfigs, InstitutionType } from '../../config/institution-config';

// 生成静态参数，确保 Vercel 部署时路由正常工作
export function generateStaticParams() {
  const config = institutionConfigs['bureau'];
  return config.sidebarItems.map((item) => ({
    menuId: item.id,
  }));
}

export default function BureauMenuPage({ params }: { params: { menuId: string } }) {
  const type: InstitutionType = 'bureau';
  const config = institutionConfigs[type];
  const menuId = params.menuId;

  const menuItem = config.sidebarItems.find(item => item.id === menuId);
  if (!menuItem) return notFound();

  const mockData = config.mockData?.[menuId];

  return (
    <DashboardLayout config={config} activeMenu={menuId}>
      {menuId === 'dashboard' ? (
        <DashboardContent config={config} />
      ) : menuId === 'stem-competitions' ? (
        <StemCompetitionsPage />
      ) : menuId === 'awards-evaluation' ? (
        <AwardsEvaluationPage />
      ) : menuId === 'quality-monitoring' ? (
        <QualityMonitoringPage />
      ) : menuId === 'schools' ? (
        <SchoolManagementPage />
      ) : menuItem.pageType === 'table' && mockData ? (
        <DataTablePage title={mockData.title} columns={mockData.columns} rows={mockData.rows} />
      ) : menuItem.pageType === 'stats' ? (
        <EnhancedStatsPage title={menuItem.label} type="pie" />
      ) : menuItem.pageType === 'policy' ? (
        <PolicyDraftPage />
      ) : menuId === 'reports' ? (
        <ReportsPage institutionType="教育局" />
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
