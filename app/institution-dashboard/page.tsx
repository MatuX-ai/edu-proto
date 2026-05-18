'use client';

import { useRouter } from 'next/navigation';
import { InstitutionType } from './config/institution-config';

export default function InstitutionDashboardPage() {
  const router = useRouter();
  // 默认跳转到培训机构 dashboard
  const currentType: InstitutionType = 'training'; 
  
  // 自动跳转到默认机构类型的 dashboard
  if (typeof window !== 'undefined') {
    router.push(`/institution-dashboard/${currentType}/dashboard`);
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 flex flex-col items-center justify-center py-8 px-4">
      {/* Header */}
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-700 to-blue-900 bg-clip-text text-transparent mb-2">
          MatuX 机构管理后台
        </h1>
        <p className="text-slate-600">正在跳转...</p>
      </div>
    </div>
  );
}
