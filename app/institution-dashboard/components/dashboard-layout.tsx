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
        {/* Sidebar - Enhanced Professional Design */}
        <motion.div
          initial={{ x: -80 }}
          animate={{ x: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className={`absolute w-64 bg-gradient-to-b from-${config.themeColor}-800 via-${config.themeColor}-900 to-${config.themeColor}-950 h-full left-0 top-0 z-50 flex flex-col shadow-2xl backdrop-blur-2xl border-r border-white/10`}
        >
          {/* Header Section */}
          <div className="p-6 border-b border-white/10">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full flex items-center gap-3 px-4 py-3 bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-md rounded-xl border border-white/10 shadow-lg hover:shadow-xl hover:border-white/20 transition-all group"
            >
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                <Home className="h-5 w-5 text-white" />
              </div>
              <div className="text-left">
                <div className="text-white font-semibold text-sm">{config.title}</div>
                <div className="text-white/60 text-xs">返回首页</div>
              </div>
            </motion.button>
          </div>

          {/* Navigation Menu */}
          <div className="flex-1 overflow-y-auto scrollbar-hide py-4">
            <div className="px-4 space-y-2">
              {config.sidebarItems.map((item: SidebarItem, index) => {
                const IconComponent = item.icon;
                const isActive = currentActive === item.id;
                return (
                  <motion.button
                    key={`${config.type}-${item.id}`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ scale: 1.02, x: 4 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      window.dispatchEvent(new CustomEvent('menuChange', { detail: { menuId: item.id, type: config.type } }));
                    }}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 group ${
                      isActive
                        ? 'bg-gradient-to-r from-white/20 to-white/10 shadow-lg shadow-black/20 border border-white/20'
                        : 'hover:bg-white/10 hover:border hover:border-white/10'
                    }`}
                  >
                    {/* Icon Container */}
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all ${
                      isActive 
                        ? 'bg-white/20 shadow-md' 
                        : 'bg-white/5 group-hover:bg-white/10'
                    }`}>
                      <IconComponent className={`h-5 w-5 transition-colors ${
                        isActive ? 'text-white' : 'text-white/60 group-hover:text-white/90'
                      }`} />
                    </div>
                    
                    {/* Label */}
                    <div className="flex-1 text-left">
                      <div className={`font-medium text-sm transition-colors ${
                        isActive ? 'text-white' : 'text-white/70 group-hover:text-white/90'
                      }`}>
                        {item.label}
                      </div>
                      {item.pageType && (
                        <div className="text-xs text-white/40 mt-0.5 capitalize">
                          {item.pageType.replace('-', ' ')}
                        </div>
                      )}
                    </div>
                    
                    {/* Active Indicator */}
                    {isActive && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="w-1.5 h-8 bg-gradient-to-b from-white via-white/90 to-white/70 rounded-full shadow-lg shadow-white/50"
                      />
                    )}
                  </motion.button>
                );
              })}
            </div>
          </div>

          {/* Footer Actions */}
          <div className="p-4 border-t border-white/10 space-y-2">
            {/* Settings */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                window.dispatchEvent(new CustomEvent('menuChange', { detail: { menuId: 'settings', type: config.type } }));
              }}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/10 transition-all border border-transparent hover:border-white/10 group"
            >
              <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                <Settings className="h-5 w-5 text-white/60 group-hover:text-white/90" />
              </div>
              <div className="flex-1 text-left">
                <div className="text-white/70 group-hover:text-white/90 font-medium text-sm">系统设置</div>
              </div>
            </motion.button>
            
            {/* Logout */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-red-500/20 transition-all border border-transparent hover:border-red-400/30 group"
            >
              <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center group-hover:bg-red-500/20 transition-colors">
                <LogOut className="h-5 w-5 text-red-400/70 group-hover:text-red-400" />
              </div>
              <div className="flex-1 text-left">
                <div className="text-red-400/70 group-hover:text-red-400 font-medium text-sm">退出登录</div>
              </div>
            </motion.button>
          </div>
        </motion.div>

        {/* Main Content Area */}
        <motion.div 
          className={`ml-64 h-full overflow-y-auto p-8 bg-gradient-to-br from-${config.themeColor}-50/40 via-white to-slate-50/50`}
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
