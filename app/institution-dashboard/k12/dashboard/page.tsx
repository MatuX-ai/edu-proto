'use client';

import DashboardLayout from '../../components/dashboard-layout';
import DashboardContent from '../../components/dashboard-content';
import { institutionConfigs } from '../../config/institution-config';

export default function K12Dashboard() {
  const config = institutionConfigs['k12'];

  return (
    <DashboardLayout config={config} activeMenu="dashboard">
      <DashboardContent config={config} />
    </DashboardLayout>
  );
}
