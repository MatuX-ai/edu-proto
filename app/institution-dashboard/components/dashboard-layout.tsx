'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Home, LogOut, Wifi, Battery, Search, Bell, Settings, ChevronRight
} from 'lucide-react';
import { InstitutionConfig, SidebarItem } from '../config/institution-config';

interface DashboardLayoutProps {
  config: InstitutionConfig;
  children: React.ReactNode;
  activeMenu?: string;
}

export default function DashboardLayout({ config, children, activeMenu }: DashboardLayoutProps) {
  const currentActive = activeMenu || 'dashboard';
  const [currentTime, setCurrentTime] = useState('00:00');

  useEffect(() => {
    const updateTime = () => {
      setCurrentTime(new Date().toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' }));
    };
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className="relative w-full max-w-[1280px] bg-black rounded-[2rem] shadow-2xl border-[12px] border-slate-800 overflow-hidden"
    >
      {/* Status Bar */}
      <div className="h-8 w-full bg-slate-900 flex justify-between items-center px-6 text-xs font-medium text-white">
        <span>{currentTime}</span>
        <div className="flex items-center space-x-2">
          <Wifi className="h-3 w-3" />
          <Battery className="h-3 w-3" />
          <span>85%</span>
        </div>
      </div>

      {/* Main Dashboard Content */}
      <div className="w-full bg-gradient-to-br from-blue-50 via-white to-slate-50 relative overflow-hidden" style={{ height: 'calc(100vh - 200px)', minHeight: '700px' }}>
        {/* Sidebar - Premium Glassmorphism Design */}
        <motion.div
          initial={{ x: -80 }}
          animate={{ x: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className={`absolute w-24 bg-gradient-to-b from-${config.themeColor}-800 via-${config.themeColor}-900 to-${config.themeColor}-950 h-full left-0 top-0 z-50 flex flex-col items-center py-6 shadow-2xl backdrop-blur-2xl border-r border-white/5`}
        >
          {/* Logo / Home Button */}
          <div className="mb-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-14 h-14 bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/10 shadow-lg hover:shadow-xl hover:border-white/20 transition-all group"
            >
              <Home className="h-6 w-6 text-white/90 group-hover:text-white transition-colors" />
            </motion.button>
          </div>

          {/* Navigation Items */}
          <div className="flex-1 flex flex-col gap-3 w-full px-3 overflow-y-auto scrollbar-hide">
            {config.sidebarItems.map((item: SidebarItem, index) => {
              const IconComponent = item.icon;
              const isActive = currentActive === item.id;
              return (
                <motion.button
                  key={`${config.type}-${item.id}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.08, x: 2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    window.dispatchEvent(new CustomEvent('menuChange', { detail: { menuId: item.id, type: config.type } }));
                  }}
                  className={`relative w-full aspect-square rounded-xl flex items-center justify-center transition-all duration-300 group ${
                    isActive
                      ? 'bg-gradient-to-br from-white/25 to-white/10 shadow-lg shadow-black/20 border border-white/20'
                      : 'hover:bg-white/10 hover:border hover:border-white/10'
                  }`}
                >
                  {/* Icon */}
                  <IconComponent 
                    className={`h-6 w-6 transition-all duration-300 ${
                      isActive 
                        ? 'text-white drop-shadow-lg' 
                        : 'text-white/50 group-hover:text-white/80'
                    }`} 
                  />
                  
                  {/* Active Indicator */}
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute -right-[18px] top-1/2 -translate-y-1/2"
                    >
                      <div className="w-1 h-10 bg-gradient-to-b from-white via-white/90 to-white/70 rounded-full shadow-lg shadow-white/50" />
                    </motion.div>
                  )}
                  
                  {/* Tooltip on Hover */}
                  <div className="absolute left-full ml-3 px-3 py-1.5 bg-slate-900/95 backdrop-blur-md text-white text-xs font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-xl border border-white/10 z-50">
                    {item.label}
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/* Bottom Actions */}
          <div className="mt-auto px-3 w-full space-y-3 pb-2">
            {/* Settings */}
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="w-full aspect-square rounded-xl hover:bg-white/10 flex items-center justify-center transition-all border border-transparent hover:border-white/10 group"
            >
              <Settings className="h-6 w-6 text-white/50 group-hover:text-white/80 transition-colors" />
            </motion.button>
            
            {/* Logout */}
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="w-full aspect-square rounded-xl hover:bg-red-500/20 flex items-center justify-center transition-all border border-transparent hover:border-red-400/30 group"
            >
              <LogOut className="h-6 w-6 text-white/50 group-hover:text-red-400 transition-colors" />
            </motion.button>
          </div>
        </motion.div>

        {/* Main Content Area */}
        <motion.div 
          className={`ml-24 h-full overflow-y-auto p-8 bg-gradient-to-br from-${config.themeColor}-50/40 via-white to-slate-50/50`}
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
