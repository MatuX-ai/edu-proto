'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Home, LogOut, Wifi, Battery, Search, Bell, Settings, ChevronRight,
  ChevronLeft, ChevronRight as ChevronRightIcon
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
  const [isCollapsed, setIsCollapsed] = useState(false);

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
        {/* Sidebar - High Contrast Professional Design with Drawer */}
        <motion.div
          initial={{ x: -80 }}
          animate={{ x: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className={`absolute h-full left-0 top-0 z-50 flex flex-col shadow-2xl border-r border-gray-800 transition-all duration-300 ease-in-out ${
            isCollapsed ? 'w-16 bg-gray-950' : 'w-56 bg-gray-950'
          }`}
        >
          {/* Collapse Toggle Button */}
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="absolute -right-3 top-8 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center shadow-lg hover:bg-blue-700 transition-colors z-50"
          >
            {isCollapsed ? (
              <ChevronRightIcon className="h-3 w-3 text-white" />
            ) : (
              <ChevronLeft className="h-3 w-3 text-white" />
            )}
          </button>

          {/* Header Section */}
          <div className={`p-5 border-b border-gray-800 bg-gray-900 transition-all duration-300 ${
            isCollapsed ? 'px-3' : 'px-5'
          }`}>
            <motion.button
              whileHover={{ scale: 1.02, backgroundColor: '#1f2937' }}
              whileTap={{ scale: 0.98 }}
              onClick={() => window.location.href = '/institution-dashboard'}
              className={`flex items-center gap-3 bg-gray-800 rounded-xl border border-gray-700 shadow-lg hover:border-gray-600 transition-all group ${
                isCollapsed ? 'px-2 py-2 justify-center' : 'px-4 py-3 w-full'
              }`}
              title="返回首页"
            >
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center shadow-md shrink-0">
                <Home className="h-5 w-5 text-white" />
              </div>
              <AnimatePresence>
                {!isCollapsed && (
                  <motion.div
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: 'auto' }}
                    exit={{ opacity: 0, width: 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-left overflow-hidden"
                  >
                    <div className="text-gray-400 text-xs whitespace-nowrap">返回首页</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>

          {/* Navigation Menu */}
          <div className="flex-1 overflow-y-auto scrollbar-hide py-4">
            <div className={`space-y-1 transition-all duration-300 ${
              isCollapsed ? 'px-2' : 'px-3'
            }`}>
              {config.sidebarItems.map((item: SidebarItem, index) => {
                const IconComponent = item.icon;
                const isActive = currentActive === item.id;
                return (
                  <motion.button
                    key={`${config.type}-${item.id}`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ scale: 1.02, x: isCollapsed ? 0 : 4 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      window.dispatchEvent(new CustomEvent('menuChange', { detail: { menuId: item.id, type: config.type } }));
                    }}
                    className={`flex items-center rounded-lg transition-all duration-200 group ${
                      isActive
                        ? 'bg-blue-600 shadow-lg'
                        : 'hover:bg-gray-800'
                    } ${
                      isCollapsed ? 'justify-center p-2' : 'gap-3 px-4 py-3'
                    }`}
                    title={isCollapsed ? item.label : undefined}
                  >
                    {/* Icon Container */}
                    <div className={`rounded-lg flex items-center justify-center transition-all shrink-0 ${
                      isActive 
                        ? 'bg-white/25' 
                        : 'bg-gray-700 group-hover:bg-gray-600'
                    } ${
                      isCollapsed ? 'w-10 h-10' : 'w-9 h-9'
                    }`}>
                      <IconComponent className={`transition-colors ${
                        isActive ? 'text-white' : 'text-gray-400 group-hover:text-white'
                      } ${
                        isCollapsed ? 'h-5 w-5' : 'h-5 w-5'
                      }`} />
                    </div>
                    
                    {/* Label */}
                    <AnimatePresence>
                      {!isCollapsed && (
                        <motion.div
                          initial={{ opacity: 0, width: 0 }}
                          animate={{ opacity: 1, width: 'auto' }}
                          exit={{ opacity: 0, width: 0 }}
                          transition={{ duration: 0.2 }}
                          className="flex-1 text-left overflow-hidden"
                        >
                          <div className={`font-medium text-sm transition-colors whitespace-nowrap ${
                            isActive ? 'text-white' : 'text-gray-300 group-hover:text-white'
                          }`}>
                            {item.label}
                          </div>
                          {item.pageType && (
                            <div className={`text-xs mt-0.5 capitalize whitespace-nowrap ${
                              isActive ? 'text-blue-100' : 'text-gray-500'
                            }`}>
                              {item.pageType.replace('-', ' ')}
                            </div>
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>
                    
                    {/* Active Indicator */}
                    {!isCollapsed && isActive && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="w-1 h-8 bg-white rounded-full"
                      />
                    )}
                  </motion.button>
                );
              })}
            </div>
          </div>

          {/* Footer Actions */}
          <div className={`border-t border-gray-800 bg-gray-900 space-y-2 transition-all duration-300 ${
            isCollapsed ? 'p-2' : 'p-4'
          }`}>
            {/* Settings */}
            <motion.button
              whileHover={{ scale: 1.02, backgroundColor: '#1f2937' }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                window.dispatchEvent(new CustomEvent('menuChange', { detail: { menuId: 'settings', type: config.type } }));
              }}
              className={`flex items-center rounded-lg hover:bg-gray-800 transition-all border border-transparent hover:border-gray-700 group ${
                isCollapsed ? 'justify-center p-2' : 'gap-3 px-4 py-3 w-full'
              }`}
              title={isCollapsed ? '系统设置' : undefined}
            >
              <div className={`rounded-lg flex items-center justify-center group-hover:bg-gray-600 transition-colors shrink-0 ${
                isCollapsed ? 'w-10 h-10 bg-gray-700' : 'w-9 h-9 bg-gray-700'
              }`}>
                <Settings className={`text-gray-400 group-hover:text-white ${
                  isCollapsed ? 'h-5 w-5' : 'h-5 w-5'
                }`} />
              </div>
              <AnimatePresence>
                {!isCollapsed && (
                  <motion.div
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: 'auto' }}
                    exit={{ opacity: 0, width: 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex-1 text-left overflow-hidden"
                  >
                    <div className="text-gray-300 group-hover:text-white font-medium text-sm whitespace-nowrap">系统设置</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
            
            {/* Logout */}
            <motion.button
              whileHover={{ scale: 1.02, backgroundColor: '#450a0a' }}
              whileTap={{ scale: 0.98 }}
              className={`flex items-center rounded-lg hover:bg-red-950 transition-all border border-transparent hover:border-red-900 group ${
                isCollapsed ? 'justify-center p-2' : 'gap-3 px-4 py-3 w-full'
              }`}
              title={isCollapsed ? '退出登录' : undefined}
            >
              <div className={`rounded-lg flex items-center justify-center group-hover:bg-red-900/50 transition-colors shrink-0 ${
                isCollapsed ? 'w-10 h-10 bg-red-950/50' : 'w-9 h-9 bg-red-950/50'
              }`}>
                <LogOut className={`group-hover:text-red-300 ${
                  isCollapsed ? 'h-5 w-5 text-red-400' : 'h-5 w-5 text-red-400'
                }`} />
              </div>
              <AnimatePresence>
                {!isCollapsed && (
                  <motion.div
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: 'auto' }}
                    exit={{ opacity: 0, width: 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex-1 text-left overflow-hidden"
                  >
                    <div className="text-red-400 group-hover:text-red-300 font-medium text-sm whitespace-nowrap">退出登录</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </motion.div>

        {/* Main Content Area */}
        <motion.div 
          className={`h-full overflow-y-auto p-8 bg-gradient-to-br from-${config.themeColor}-50/40 via-white to-slate-50/50 transition-all duration-300 ${
            isCollapsed ? 'ml-16' : 'ml-56'
          }`}
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
