'use client';

import DashboardLayout from '../../components/dashboard-layout';
import TrainingDashboardPage from '../../components/pages/training-dashboard-page';
import { institutionConfigs } from '../../config/institution-config';

export default function TrainingDashboard() {
  const config = institutionConfigs['training'];

  return (
    <DashboardLayout config={config} activeMenu="dashboard">
      <TrainingDashboardPage config={config} />
    </DashboardLayout>
  );
}
