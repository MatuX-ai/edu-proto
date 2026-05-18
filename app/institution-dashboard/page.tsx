'use client';

import { motion } from 'framer-motion';
import {
  Building2, Users, BookOpen, DollarSign, AlertCircle,
  GraduationCap, School, Briefcase, Landmark, Calendar,
  Trophy, Handshake, FileText, Home, LayoutDashboard,
  BarChart3, Settings, Bell, LogOut, ChevronRight, FileCheck, Video,
  Presentation, Users2, MessageSquare, LineChart, PieChart, Zap,
  Star, Search, Megaphone, ClipboardList, UserCheck, MessageCircle,
  Monitor, Lightbulb, Target as TargetIcon, Award as AwardIcon, Wifi, Battery
} from 'lucide-react';
import { useState } from 'react';

export default function InstitutionDashboardPage() {
  const [activeTab, setActiveTab] = useState<'training' | 'k12' | 'vocational' | 'education-bureau'>('training');
  const [sidebarActive, setSidebarActive] = useState('dashboard');
  const sidebarItems = [
    { id: 'dashboard', label: '控制台', icon: LayoutDashboard },
    { id: 'media', label: '媒体品牌', icon: Megaphone },
    { id: 'courses', label: '课程中心', icon: BookOpen },
    { id: 'teachers', label: '教师管理', icon: Users2 },
    { id: 'students', label: '学生管理', icon: UserCheck },
    { id: 'finance', label: '财务管理', icon: DollarSign },
    { id: 'reports', label: '数据报表', icon: BarChart3 },
    { id: 'settings', label: '系统设置', icon: Settings },
  ];

  // 机构类型数据
  const institutionTypes = {
    training: {
      title: '国家级投教基地',
      subtitle: '全覆盖教育基地覆盖全国主要城市区域，致力于国民投资教育',
      bannerImage: '/images/banner-edu.png',
      stats: [
        { label: '今日全量网活动', value: '5', icon: Zap },
        { label: '未完成任务', value: '2', icon: AlertCircle }
      ],
      functionCards: [
        { title: '发起培训', subtitle: '2位学员', icon: Presentation, color: 'from-purple-500 to-purple-600', bg: 'bg-purple-500' },
        { title: '课程管理', subtitle: '1,234节课程', icon: BookOpen, color: 'from-yellow-400 to-yellow-500', bg: 'bg-yellow-400' },
        { title: '培训活动', subtitle: '组织活动12场', icon: Users2, color: 'from-orange-400 to-orange-500', bg: 'bg-orange-400' },
        { title: '监控中心', subtitle: '连接视频源15个', icon: Monitor, color: 'from-blue-400 to-blue-500', bg: 'bg-blue-400' },
      ],
      mediaCards: [
        { title: '发布课件', icon: FileCheck, desc: '在线课程、资源库' },
        { title: '公告智能改写', icon: MessageCircle, desc: '智能编辑、发布' },
        { title: '自动分析', icon: BarChart3, desc: '数据报告、分析' },
        { title: '素材库', icon: ClipboardList, desc: '视频、图文素材' }
      ],
      dashboardData: {
        temperature: '25°C',
        minTemp: '0°C',
        maxTemp: '25°C',
        currentTemp: '15°C'
      },
      quickTools: [
        { title: '报名统计', icon: Users2, color: 'bg-purple-500' },
        { title: '查询会议', icon: Calendar, color: 'bg-orange-500' },
        { title: '远程辅导', icon: Video, color: 'bg-blue-400' },
        { title: '直播管理', icon: Monitor, color: 'bg-green-400' },
        { title: '可视化日报', icon: LineChart, color: 'bg-yellow-400' },
      ]
    },
    k12: {
      title: 'K12 智慧校园',
      subtitle: '现代化教学管理体系，覆盖全学段教学场景',
      bannerImage: '/images/banner-k12.png',
      stats: [
        { label: '教学班级', value: '24', icon: Building2 },
        { label: '在职教师', value: '36', icon: Users }
      ],
      functionCards: [
        { title: '课程编排', subtitle: '120节课程', icon: Calendar, color: 'from-purple-500 to-purple-600', bg: 'bg-purple-500' },
        { title: '学生管理', subtitle: '864名学生', icon: Users, color: 'from-yellow-400 to-yellow-500', bg: 'bg-yellow-400' },
        { title: '考试安排', subtitle: '本月3场考试', icon: FileText, color: 'from-orange-400 to-orange-500', bg: 'bg-orange-400' },
        { title: '教学监控', subtitle: '24间教室', icon: Monitor, color: 'from-blue-400 to-blue-500', bg: 'bg-blue-400' },
      ],
      mediaCards: [
        { title: '教案管理', icon: FileCheck, desc: '标准化教案库' },
        { title: '智能排课', icon: Calendar, desc: 'AI辅助排课' },
        { title: '成绩分析', icon: BarChart3, desc: '多维度分析' },
        { title: '资源中心', icon: BookOpen, desc: '教学资源共享' }
      ],
      dashboardData: {
        temperature: '22°C',
        minTemp: '18°C',
        maxTemp: '28°C',
        currentTemp: '22°C'
      },
      quickTools: [
        { title: '课程表', icon: Calendar, color: 'bg-purple-500' },
        { title: '作业管理', icon: FileText, color: 'bg-orange-500' },
        { title: '家长沟通', icon: MessageSquare, color: 'bg-blue-400' },
        { title: '校园公告', icon: Megaphone, color: 'bg-green-400' },
        { title: '教学评估', icon: Star, color: 'bg-yellow-400' },
      ]
    },
    vocational: {
      title: '职业教育中心',
      subtitle: '产教融合、校企合作，培养高素质技术技能人才',
      bannerImage: '/images/banner-vocational.png',
      stats: [
        { label: '专业系部', value: '8', icon: Building2 },
        { label: '校企合作', value: '45', icon: Handshake }
      ],
      functionCards: [
        { title: '实训管理', subtitle: '15个实训基地', icon: Monitor, color: 'from-purple-500 to-purple-600', bg: 'bg-purple-500' },
        { title: '竞赛组织', subtitle: '本月4场赛事', icon: Trophy, color: 'from-yellow-400 to-yellow-500', bg: 'bg-yellow-400' },
        { title: '校企合作', subtitle: '45家合作企业', icon: Handshake, color: 'from-orange-400 to-orange-500', bg: 'bg-orange-400' },
        { title: '专利管理', subtitle: '28项申请中', icon: FileText, color: 'from-blue-400 to-blue-500', bg: 'bg-blue-400' },
      ],
      mediaCards: [
        { title: '项目实训', icon: TargetIcon, desc: '企业真实项目' },
        { title: '技能认证', icon: AwardIcon, desc: '职业资格认证' },
        { title: '就业指导', icon: Briefcase, desc: '就业跟踪服务' },
        { title: '创新创业', icon: Lightbulb, desc: '创新项目孵化' }
      ],
      dashboardData: {
        temperature: '24°C',
        minTemp: '20°C',
        maxTemp: '30°C',
        currentTemp: '24°C'
      },
      quickTools: [
        { title: '赛事报名', icon: Trophy, color: 'bg-purple-500' },
        { title: '项目认领', icon: TargetIcon, color: 'bg-orange-500' },
        { title: '专利申报', icon: FileText, color: 'bg-blue-400' },
        { title: '企业合作', icon: Handshake, color: 'bg-green-400' },
        { title: '技能证书', icon: AwardIcon, color: 'bg-yellow-400' },
      ]
    },
    'education-bureau': {
      title: '区域教育管理中心',
      subtitle: '统筹规划区域教育发展，优化教育资源配置',
      bannerImage: '/images/banner-bureau.png',
      stats: [
        { label: '管辖学校', value: '156', icon: Building2 },
        { label: '教育投入', value: '¥2.8M', icon: DollarSign }
      ],
      functionCards: [
        { title: '学校管理', subtitle: '156所学校', icon: Building2, color: 'from-purple-500 to-purple-600', bg: 'bg-purple-500' },
        { title: '资源分配', subtitle: '均衡配置', icon: TargetIcon, color: 'from-yellow-400 to-yellow-500', bg: 'bg-yellow-400' },
        { title: '质量监控', subtitle: '全覆盖监测', icon: Monitor, color: 'from-orange-400 to-orange-500', bg: 'bg-orange-400' },
        { title: '数据统计', subtitle: '多维度分析', icon: BarChart3, color: 'from-blue-400 to-blue-500', bg: 'bg-blue-400' },
      ],
      mediaCards: [
        { title: '政策发布', icon: FileCheck, desc: '教育政策解读' },
        { title: '资源配置', icon: TargetIcon, desc: '资源均衡分配' },
        { title: '质量评估', icon: Star, desc: '学校质量评估' },
        { title: '数据分析', icon: PieChart, desc: '区域教育数据' }
      ],
      dashboardData: {
        temperature: '23°C',
        minTemp: '19°C',
        maxTemp: '27°C',
        currentTemp: '23°C'
      },
      quickTools: [
        { title: '学校档案', icon: Building2, color: 'bg-purple-500' },
        { title: '教师统计', icon: Users, color: 'bg-orange-500' },
        { title: '资金投入', icon: DollarSign, color: 'bg-blue-400' },
        { title: '质量报告', icon: FileText, color: 'bg-green-400' },
        { title: '政策文件', icon: FileCheck, color: 'bg-yellow-400' },
      ]
    }
  };

  const currentData = institutionTypes[activeTab];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 flex flex-col items-center justify-center py-8 px-4">
      {/* Header */}
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent mb-2">
          MatuX 机构管理后台
        </h1>
        <p className="text-slate-600">全功能机构运营管理平台</p>
      </div>

      {/* Tablet Device Frame */}
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
        <div className="w-full bg-gradient-to-br from-purple-50 via-white to-yellow-50 overflow-y-auto relative" style={{ height: 'calc(100vh - 200px)', minHeight: '700px' }}>
          {/* Sidebar - Fixed inside the frame */}
          <motion.div
            initial={{ x: -80 }}
            animate={{ x: 0 }}
            className="absolute w-20 bg-gradient-to-b from-purple-500 to-purple-700 h-full left-0 top-0 z-50 flex flex-col items-center py-6 shadow-2xl"
          >
            {/* Logo */}
            <div className="mb-8">
              <div className="w-12 h-12 bg-white/20 backdrop-blur rounded-xl flex items-center justify-center">
                <Home className="h-6 w-6 text-white" />
              </div>
            </div>

            {/* Navigation Items */}
            <div className="flex-1 flex flex-col gap-3 w-full px-3">
              {sidebarItems.map((item) => {
                const IconComponent = item.icon;
                const isActive = sidebarActive === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setSidebarActive(item.id)}
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
                  </button>
                );
              })}
            </div>

            {/* Logout */}
            <div className="mt-auto px-3 w-full">
              <button className="w-full aspect-square rounded-xl hover:bg-white/10 flex items-center justify-center transition-all">
                <LogOut className="h-5 w-5 text-white/70" />
              </button>
            </div>
          </motion.div>

          {/* Main Content */}
          <div className="ml-20 p-6">
          {/* Top Bar */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="搜索功能、课程、教师..."
                  className="w-full pl-10 pr-4 py-2.5 bg-white rounded-lg border border-gray-200 focus:border-purple-400 focus:ring-2 focus:ring-purple-100 outline-none transition-all"
                />
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <button className="relative p-2 bg-white rounded-lg border border-gray-200 hover:border-purple-300 transition-all">
                <Settings className="h-5 w-5 text-gray-600" />
              </button>
              <button className="relative p-2 bg-white rounded-lg border border-gray-200 hover:border-purple-300 transition-all">
                <Bell className="h-5 w-5 text-gray-600" />
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-white text-xs flex items-center justify-center">3</span>
              </button>
              <div className="flex items-center gap-3 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">管</span>
                </div>
                <span className="text-sm font-medium text-gray-700">管理员</span>
                <ChevronRight className="h-4 w-4 text-gray-400" />
              </div>
            </div>
          </div>

          {/* Banner Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 rounded-2xl bg-gradient-to-r from-amber-100 via-yellow-50 to-orange-100 p-6 shadow-sm border border-amber-200/50"
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h1 className="text-2xl font-bold text-amber-800 mb-2">{currentData.title}</h1>
                <p className="text-sm text-amber-700/80 mb-4">{currentData.subtitle}</p>
                <div className="flex gap-4">
                  {currentData.stats.map((stat, i) => (
                    <div key={i} className="flex items-center gap-2 bg-white/60 backdrop-blur px-3 py-2 rounded-lg">
                      <stat.icon className="h-4 w-4 text-amber-600" />
                      <span className="text-sm">
                        <span className="font-bold text-amber-800">{stat.value}</span>
                        <span className="text-amber-700/70 ml-1">{stat.label}</span>
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="hidden lg:block w-64 h-40 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="grid grid-cols-3 gap-2">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="w-16 h-12 bg-white/40 rounded-lg backdrop-blur-sm" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Type Selector Tabs */}
          <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
            {([
              { key: 'training', label: '培训机构', icon: Briefcase },
              { key: 'k12', label: 'K12学校', icon: School },
              { key: 'vocational', label: '职业学校', icon: GraduationCap },
              { key: 'education-bureau', label: '教育局', icon: Landmark }
            ] as const).map((tab) => {
              const TabIconComponent = tab.icon;
              return (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-lg whitespace-nowrap transition-all ${
                    activeTab === tab.key
                      ? 'bg-gradient-to-r from-purple-500 to-purple-600 text-white shadow-lg shadow-purple-200'
                      : 'bg-white text-gray-600 hover:bg-purple-50 border border-gray-200'
                  }`}
                >
                  <TabIconComponent className="h-4 w-4" />
                  <span className="text-sm font-medium">{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Main Grid Layout */}
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Left Column - Media & Dashboard */}
            <div className="lg:col-span-2 space-y-6">
              {/* Media Brand Section */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-gray-800">媒体品牌</h3>
                  <span className="text-xs text-gray-500">已发布12篇 · 3篇发布审核中</span>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {currentData.mediaCards.map((card, i) => {
                    const IconComponent = card.icon;
                    const isActive = i === 1;
                    return (
                      <button
                        key={i}
                        className={`relative p-4 rounded-xl transition-all ${
                          isActive
                            ? 'bg-gradient-to-br from-purple-500 to-purple-600 text-white shadow-lg shadow-purple-200'
                            : 'bg-gray-50 hover:bg-purple-50 border border-gray-200'
                        }`}
                      >
                        <IconComponent className={`h-6 w-6 mb-3 ${isActive ? 'text-white' : 'text-purple-500'}`} />
                        <div className={`text-sm font-medium mb-1 ${isActive ? 'text-white' : 'text-gray-800'}`}>
                          {card.title}
                        </div>
                        <div className={`text-xs ${isActive ? 'text-white/80' : 'text-gray-500'}`}>
                          {card.desc}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </motion.div>

              {/* Dashboard Center */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-bold text-gray-800 flex items-center gap-2">
                    <Zap className="h-5 w-5 text-purple-500" />
                    数据中心
                  </h3>
                  <select className="text-sm border border-gray-200 rounded-lg px-3 py-1.5 outline-none focus:border-purple-400">
                    <option>企业概览</option>
                    <option>数据分析</option>
                  </select>
                </div>
                <div className="flex items-center justify-center">
                  <div className="relative w-64 h-64">
                    {/* Circular Progress */}
                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        fill="none"
                        stroke="#f3f4f6"
                        strokeWidth="8"
                      />
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        fill="none"
                        stroke="url(#gradient)"
                        strokeWidth="8"
                        strokeLinecap="round"
                        strokeDasharray="251.2"
                        strokeDashoffset="62.8"
                        className="transition-all duration-1000"
                      />
                      <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#8b5cf6" />
                          <stop offset="100%" stopColor="#f59e0b" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-4xl font-bold text-gray-800">{currentData.dashboardData.temperature}</span>
                      <span className="text-sm text-gray-500 mt-1">当前温度</span>
                    </div>
                  </div>
                  <div className="ml-12 space-y-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-orange-500">{currentData.dashboardData.currentTemp}</div>
                      <div className="text-xs text-gray-500">实时温度</div>
                    </div>
                    <div className="flex gap-8">
                      <div className="text-center">
                        <div className="text-xl font-bold text-blue-500">{currentData.dashboardData.minTemp}</div>
                        <div className="text-xs text-gray-500">最低</div>
                      </div>
                      <div className="text-center">
                        <div className="text-xl font-bold text-red-500">{currentData.dashboardData.maxTemp}</div>
                        <div className="text-xs text-gray-500">最高</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* Function Center */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.15 }}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-gray-800">培训中心</h3>
                  <ChevronRight className="h-5 w-5 text-gray-400" />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {currentData.functionCards.map((card, i) => {
                    const IconComponent = card.icon;
                    return (
                      <button
                        key={i}
                        className={`bg-gradient-to-br ${card.color} p-4 rounded-xl text-white hover:shadow-lg transition-all text-left`}
                      >
                        <IconComponent className="h-6 w-6 mb-2" />
                        <div className="text-sm font-medium mb-1">{card.title}</div>
                        <div className="text-xs opacity-80">{card.subtitle}</div>
                      </button>
                    );
                  })}
                </div>
              </motion.div>

              {/* Quick Tools */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.25 }}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-gray-800">服务工具</h3>
                  <ChevronRight className="h-5 w-5 text-gray-400" />
                </div>
                <div className="grid grid-cols-5 gap-3">
                  {currentData.quickTools.map((tool, i) => {
                    const IconComponent = tool.icon;
                    return (
                      <button
                        key={i}
                        className="flex flex-col items-center gap-2 group"
                      >
                        <div className={`w-12 h-12 ${tool.color} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform`}>
                          <IconComponent className="h-5 w-5 text-white" />
                        </div>
                        <span className="text-xs text-gray-600 text-center">{tool.title}</span>
                      </button>
                    );
                  })}
                </div>
              </motion.div>

              {/* Monitor Data */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.35 }}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-gray-800">监管数据</h3>
                  <div className="flex items-center gap-2">
                    <select className="text-xs border border-gray-200 rounded px-2 py-1 outline-none">
                      <option>监管动态</option>
                    </select>
                    <ChevronRight className="h-4 w-4 text-gray-400" />
                  </div>
                </div>
                <div className="h-48 bg-gradient-to-t from-orange-100 to-white rounded-xl relative overflow-hidden">
                  {/* Simple Chart Visualization */}
                  <svg className="absolute bottom-0 left-0 w-full h-full" viewBox="0 0 200 100" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#f97316" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="#f97316" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M 0 80 Q 20 70, 40 65 T 80 50 T 120 60 T 160 30 T 200 40 L 200 100 L 0 100 Z"
                      fill="url(#chartGradient)"
                    />
                    <path
                      d="M 0 80 Q 20 70, 40 65 T 80 50 T 120 60 T 160 30 T 200 40"
                      fill="none"
                      stroke="#f97316"
                      strokeWidth="2"
                    />
                  </svg>
                  <div className="absolute bottom-2 left-2 text-xs text-gray-500">
                    监管信息发布趋势
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      </motion.div>
    </div>
  );
}
