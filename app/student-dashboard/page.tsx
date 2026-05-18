'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot } from 'lucide-react';
import { DeviceMode, PhoneSubPage } from './types';
import { useChat } from './hooks/useChat';
import { DeviceFrame, BottomNav, AIChatModal, HomePage, LearnPage, CommunityPage, ProfilePage, ARLabPage, PointsShopPage, BlockchainCertPage, StreakSystem, SensorMonitorPage, DeviceConnectPage } from './components';
import * as PhoneSubPages from './components/PhoneContent/SubPages';

export default function StudentDashboard() {
  const [deviceMode, setDeviceMode] = useState<DeviceMode>('phone');
  const [activeTab, setActiveTab] = useState('home');
  const [phoneSubPage, setPhoneSubPage] = useState<PhoneSubPage>(null);
  
  // AI Chat
  const { chatMessages, inputMessage, setInputMessage, handleSendMessage } = useChat();
  const [showAIAssistant, setShowAIAssistant] = useState(false);

  // 处理导航
  const handleNavigate = (page: string) => {
    if (deviceMode === 'phone') {
      setPhoneSubPage(page as PhoneSubPage);
    } else {
      setActiveTab(page);
    }
  };

  // 渲染手机子页面
  const renderPhoneSubPage = () => {
    if (!phoneSubPage) return null;
    
    const ComponentMap: Record<string, React.ComponentType<{ onNavigate: (page: string) => void }>> = {
      '课程详情': PhoneSubPages.CourseDetail,
      '项目详情': PhoneSubPages.ProjectDetail,
      '成就详情': PhoneSubPages.AchievementDetail,
      '代码编辑器': PhoneSubPages.CodeEditor,
      '系统设置': PhoneSubPages.Settings,
      '知识图谱': PhoneSubPages.KnowledgeGraph,
      '每日挑战': PhoneSubPages.DailyChallenge
    };

    const Component = ComponentMap[phoneSubPage];
    if (!Component) return null;

    return <Component onNavigate={handleNavigate} />;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex flex-col items-center justify-center py-12 px-4">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
          MatuX 移动端体验
        </h1>
        <p className="text-slate-600 text-lg">随时随地探索 STEM 世界</p>

        {/* Device Switcher */}
        <div className="mt-6 inline-flex bg-white rounded-2xl p-1.5 shadow-lg border border-slate-200">
          <button
            onClick={() => setDeviceMode('phone')}
            className={`px-8 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
              deviceMode === 'phone'
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md scale-105'
                : 'text-slate-600 hover:text-blue-600 hover:bg-slate-50'
            }`}
          >
            📱 手机模式
          </button>
          <button
            onClick={() => setDeviceMode('tablet')}
            className={`px-8 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
              deviceMode === 'tablet'
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md scale-105'
                : 'text-slate-600 hover:text-blue-600 hover:bg-slate-50'
            }`}
          >
            📟 平板模式
          </button>
        </div>
      </div>

      {/* Device Frame */}
      <DeviceFrame mode={deviceMode}>
        {/* 手机模式内容 */}
        {deviceMode === 'phone' && (
          <>
            {/* App Header */}
            <div className="px-5 py-4 flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Hi, 李明 👋
                </h2>
                <p className="text-xs text-slate-500 mt-1">准备好开始今天的实验了吗？</p>
              </div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg cursor-pointer"
              >
                <span className="text-white text-xl">👤</span>
              </motion.div>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 overflow-y-auto pb-24 pr-1">
              {/* Sub Page Display */}
              <AnimatePresence>
                {phoneSubPage && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="absolute inset-0 bg-slate-50 z-40 overflow-y-auto pb-20"
                  >
                    <div className="sticky top-0 bg-white border-b px-5 py-3 flex items-center gap-3 z-10">
                      <button onClick={() => setPhoneSubPage(null)} className="p-2 hover:bg-slate-100 rounded-full">
                        ←
                      </button>
                      <h3 className="font-bold text-lg">{phoneSubPage}</h3>
                    </div>
                    <div className="p-5">
                      {renderPhoneSubPage()}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Tab Content */}
              {!phoneSubPage && (
                <>
                  {activeTab === 'home' && <HomePage mode="phone" onNavigate={handleNavigate} />}
                  {activeTab === 'learn' && <LearnPage mode="phone" onNavigate={handleNavigate} />}
                  {activeTab === 'community' && <CommunityPage mode="phone" />}
                  {activeTab === 'profile' && <ProfilePage mode="phone" onNavigate={(page) => page && handleNavigate(page)} />}
                </>
              )}
            </div>

            {/* Floating AI Button */}
            <motion.button
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setShowAIAssistant(true)}
              className="absolute bottom-24 right-4 w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full shadow-xl flex items-center justify-center text-white z-30"
            >
              <Bot className="h-6 w-6" />
            </motion.button>
          </>
        )}

        {/* 平板模式内容 */}
        {deviceMode === 'tablet' && (
          <>
            {activeTab === 'home' && <HomePage mode="tablet" onNavigate={handleNavigate} />}
            {activeTab === 'courses' && <LearnPage mode="tablet" />}
            {activeTab === 'ar-lab' && <ARLabPage mode="tablet" />}
            {activeTab === 'projects' && <CommunityPage mode="tablet" />}
            {activeTab === 'shop' && <PointsShopPage mode="tablet" />}
            {activeTab === 'achievements' && <ProfilePage mode="tablet" onNavigate={(page) => page && handleNavigate(page)} />}
            {activeTab === 'streak' && <StreakSystem mode="tablet" />}
            {activeTab === 'certificates' && <BlockchainCertPage mode="tablet" />}
            {activeTab === 'devices' && <DeviceConnectPage mode="tablet" />}
            {activeTab === 'sensors' && <SensorMonitorPage mode="tablet" />}
            
            {/* Floating AI Button */}
            <motion.button
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setShowAIAssistant(true)}
              className="absolute bottom-24 right-8 w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full shadow-2xl flex items-center justify-center text-white z-30"
            >
              <Bot className="h-7 w-7" />
            </motion.button>
          </>
        )}
        
        {/* Bottom Navigation - 移到DeviceFrame内部 */}
        <BottomNav 
          mode={deviceMode} 
          activeTab={deviceMode === 'phone' ? activeTab : activeTab}
          onTabChange={(tab) => {
            setActiveTab(tab);
            if (deviceMode === 'phone') setPhoneSubPage(null);
          }}
        />
      </DeviceFrame>

      {/* AI Chat Modal */}
      <AIChatModal
        show={showAIAssistant}
        onClose={() => setShowAIAssistant(false)}
        messages={chatMessages}
        inputMessage={inputMessage}
        onInputChange={setInputMessage}
        onSendMessage={handleSendMessage}
        mode={deviceMode}
      />
    </div>
  );
}
