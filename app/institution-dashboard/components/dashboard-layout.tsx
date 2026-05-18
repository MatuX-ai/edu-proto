'use client';

import { motion } from 'framer-motion';
import { 
  Home, LogOut, Wifi, Battery, Search, Bell, Settings, ChevronRight
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { InstitutionConfig, SidebarItem } from '../config/institution-config';

interface DashboardLayoutProps {
  config: InstitutionConfig;
  children: React.ReactNode;
  activeMenu?: string;
}

export default function DashboardLayout({ config, children, activeMenu }: DashboardLayoutProps) {
  const pathname = usePathname();
  const currentActive = activeMenu || pathname?.split('/').pop() || 'dashboard';

  return (
    <motion.div
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className="relative w-full max-w-[1280px] bg-black rounded-[2rem] shadow-2xl border-[12px] border-slate-800 overflow-hidden"
    >
      {/* Status Bar */}
      <div className="h-8 w-full bg-slate-900 flex justify-between items-center px-6 text-xs font-medium text-white">
        <span>{new Date().toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' })}</span>
        <div className="flex items-center space-x-2">
          <Wifi className="h-3 w-3" />
          <Battery className="h-3 w-3" />
          <span>85%</span>
        </div>
      </div>

      {/* Main Dashboard Content */}
      <div className="w-full bg-gradient-to-br from-blue-50 via-white to-slate-50 relative overflow-hidden" style={{ height: 'calc(100vh - 200px)', minHeight: '700px' }}>
        {/* Sidebar */}
        <motion.div
          initial={{ x: -80 }}
          animate={{ x: 0 }}
          className={`absolute w-20 bg-gradient-to-b from-${config.themeColor}-600 to-${config.themeColor}-800 h-full left-0 top-0 z-50 flex flex-col items-center py-6 shadow-2xl`}
        >
          <div className="mb-8">
            <div className="w-12 h-12 bg-white/20 backdrop-blur rounded-xl flex items-center justify-center">
              <Home className="h-6 w-6 text-white" />
            </div>
          </div>

          <div className="flex-1 flex flex-col gap-3 w-full px-3">
            {config.sidebarItems.map((item: SidebarItem) => {
              const IconComponent = item.icon;
              const isActive = currentActive === item.id;
              return (
                <Link
                  key={item.id}
                  href={`/institution-dashboard/${config.type}/${item.id}`}
                  className={`relative w-full aspect-square rounded-xl flex items-center justify-center transition-all duration-300 ${
                    isActive
                      ? 'bg-white/25 shadow-lg scale-105'
                      : 'hover:bg-white/10'
                  }`}
                >
                  <IconComponent className={`h-5 w-5 ${isActive ? 'text-white' : 'text-white/70'}`} />
                  {isActive && (
                    <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-1 h-8 bg-white rounded-full" />
                  )}
                </Link>
              );
            })}
          </div>

          <div className="mt-auto px-3 w-full">
            <button className="w-full aspect-square rounded-xl hover:bg-white/10 flex items-center justify-center transition-all">
              <LogOut className="h-5 w-5 text-white/70" />
            </button>
          </div>
        </motion.div>

        {/* Main Content Area */}
        <motion.div 
          className="ml-20 h-full overflow-y-auto p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="搜索功能、课程、教师..."
                  className="w-full pl-10 pr-4 py-2.5 bg-white rounded-lg border border-gray-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                />
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <button className="relative p-2 bg-white rounded-lg border border-gray-200 hover:border-blue-300 transition-all">
                <Settings className="h-5 w-5 text-gray-600" />
              </button>
              <button className="relative p-2 bg-white rounded-lg border border-gray-200 hover:border-blue-300 transition-all">
                <Bell className="h-5 w-5 text-gray-600" />
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-white text-xs flex items-center justify-center">3</span>
              </button>
              <div className="flex items-center gap-3 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <div className={`w-8 h-8 bg-gradient-to-br from-${config.themeColor}-400 to-${config.themeColor}-600 rounded-full flex items-center justify-center`}>
                  <span className="text-white text-xs font-bold">管</span>
                </div>
                <span className="text-sm font-medium text-gray-700">管理员</span>
                <ChevronRight className="h-4 w-4 text-gray-400" />
              </div>
            </div>
          </div>

          {children}
        </motion.div>
      </div>
    </motion.div>
  );
}
