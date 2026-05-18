'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ChevronRight, Zap } from 'lucide-react';
import { InstitutionConfig } from '../config/institution-config';

interface DashboardContentProps {
  config: InstitutionConfig;
}

export default function DashboardContent({ config }: DashboardContentProps) {
  return (
    <>
      {/* Banner Card - Enhanced */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className={`mb-8 rounded-3xl bg-gradient-to-br from-${config.themeColor}-50 via-white to-${config.themeColor}-50 p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-${config.themeColor}-100 relative overflow-hidden group`}
      >
        <div className="flex items-start justify-between relative z-10">
          <div className="flex-1">
            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-${config.themeColor}-100 text-${config.themeColor}-700 text-xs font-bold mb-4`}>
              <span className={`w-2 h-2 rounded-full bg-${config.themeColor}-500 animate-pulse`}></span>
              实时运营数据
            </div>
            <h1 className={`text-3xl font-extrabold text-gray-900 mb-3 tracking-tight`}>{config.title}</h1>
            <p className={`text-base text-gray-500 mb-6 max-w-xl leading-relaxed`}>{config.subtitle}</p>
            <div className="flex flex-wrap gap-4">
              {config.stats.map((stat, i) => (
                <div key={i} className={`flex items-center gap-3 bg-white/80 backdrop-blur-md px-4 py-3 rounded-2xl shadow-sm border border-gray-100 transition-transform hover:-translate-y-1`}>
                  <div className={`p-2 rounded-xl bg-${config.themeColor}-50 text-${config.themeColor}-600`}>
                    <stat.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className={`text-xl font-bold text-gray-800`}>{stat.value}</div>
                    <div className={`text-xs font-medium text-gray-400 uppercase tracking-wider`}>{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="hidden lg:block w-72 h-48 relative ml-8">
            <Image 
              src={config.bannerImage} 
              alt="Banner" 
              fill
              className="object-contain drop-shadow-2xl transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </div>
        {/* Abstract Background Shapes */}
        <div className={`absolute -right-20 -top-20 w-64 h-64 bg-${config.themeColor}-200/20 rounded-full blur-3xl`} />
        <div className={`absolute -left-20 -bottom-20 w-64 h-64 bg-blue-200/20 rounded-full blur-3xl`} />
      </motion.div>

      {/* Main Grid Layout */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Left Column - Media & Dashboard */}
        <div className="lg:col-span-2 space-y-6">
          {/* Media Brand Section - Refined */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-3xl p-8 shadow-[0_2px_20px_rgb(0,0,0,0.03)] border border-gray-100/80"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-gray-900">媒体品牌中心</h3>
              <span className="text-xs font-medium px-2.5 py-1 bg-gray-100 text-gray-500 rounded-full">已发布 12 篇</span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
              {config.mediaCards.map((card, i) => {
                const IconComponent = card.icon;
                const isActive = i === 1;
                return (
                  <button
                    key={i}
                    className={`group relative p-5 rounded-2xl transition-all duration-300 ${
                      isActive
                        ? `bg-gradient-to-br from-${config.themeColor}-500 to-${config.themeColor}-600 text-white shadow-lg shadow-${config.themeColor}-200 scale-[1.02]`
                        : 'bg-gray-50 hover:bg-white hover:shadow-md hover:border-gray-200 border border-transparent'
                    }`}
                  >
                    <IconComponent className={`h-7 w-7 mb-4 transition-transform group-hover:scale-110 ${isActive ? 'text-white' : `text-${config.themeColor}-600`}`} />
                    <div className={`text-sm font-bold mb-1.5 ${isActive ? 'text-white' : 'text-gray-800'}`}>
                      {card.title}
                    </div>
                    <div className={`text-xs leading-relaxed ${isActive ? 'text-white/90' : 'text-gray-400'}`}>
                      {card.desc}
                    </div>
                  </button>
                );
              })}
            </div>
          </motion.div>

          {/* Dashboard Center - Dynamic based on type */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-3xl p-8 shadow-[0_2px_20px_rgb(0,0,0,0.03)] border border-gray-100/80"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                <Zap className={`h-5 w-5 text-${config.themeColor}-500`} />
                {config.type === 'training' ? '本周消课统计' : config.type === 'k12' ? 'STEM 数据中心' : '运营概览'}
              </h3>
              <select className="text-sm border border-gray-200 rounded-lg px-3 py-1.5 outline-none focus:border-blue-400">
                <option>{config.type === 'training' ? '按课程统计' : config.type === 'k12' ? '实验室概览' : '月度报表'}</option>
                <option>{config.type === 'training' ? '按教师统计' : config.type === 'k12' ? '项目进度' : '季度分析'}</option>
              </select>
            </div>
            
            {config.type === 'training' ? (
              // Training Institution Specific View
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-2xl p-5 border border-blue-200/50 hover:shadow-md transition-shadow">
                  <div className="text-sm text-blue-600 mb-2 font-medium">本周总课时</div>
                  <div className="text-4xl font-bold text-blue-800">128<span className="text-lg font-normal ml-1 text-blue-600">节</span></div>
                  <div className="mt-3 flex items-center gap-1 text-xs text-blue-500">
                    <span className="inline-block w-2 h-2 bg-green-500 rounded-full"></span>
                    环比增长 +12%
                  </div>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-green-100/50 rounded-2xl p-5 border border-green-200/50 hover:shadow-md transition-shadow">
                  <div className="text-sm text-green-600 mb-2 font-medium">满班率</div>
                  <div className="text-4xl font-bold text-green-800">85<span className="text-lg font-normal ml-1 text-green-600">%</span></div>
                  <div className="mt-3 flex items-center gap-1 text-xs text-green-500">
                    <span className="inline-block w-2 h-2 bg-green-500 rounded-full"></span>
                    资源利用率极高
                  </div>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-purple-100/50 rounded-2xl p-5 border border-purple-200/50 hover:shadow-md transition-shadow">
                  <div className="text-sm text-purple-600 mb-2 font-medium">学员出勤率</div>
                  <div className="text-4xl font-bold text-purple-800">96<span className="text-lg font-normal ml-1 text-purple-600">%</span></div>
                  <div className="mt-3 flex items-center gap-1 text-xs text-purple-500">
                    <span className="inline-block w-2 h-2 bg-yellow-500 rounded-full"></span>
                    仅 3 人请假
                  </div>
                </div>
              </div>
            ) : config.type === 'k12' ? (
              // K12 STEM Data Center
              <div className="flex items-center justify-center">
                <div className="relative w-64 h-64">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="40" fill="none" stroke="#f3f4f6" strokeWidth="8" />
                    <circle
                      cx="50" cy="50" r="40" fill="none" stroke={`url(#gradient-${config.themeColor})`} strokeWidth="8"
                      strokeLinecap="round" strokeDasharray="251.2" strokeDashoffset="62.8"
                      className="transition-all duration-1000"
                    />
                    <defs>
                      <linearGradient id={`gradient-${config.themeColor}`} x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#10b981" />
                        <stop offset="100%" stopColor="#059669" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-4xl font-bold text-gray-800">85%</span>
                    <span className="text-sm text-gray-500 mt-1">实验完成率</span>
                  </div>
                </div>
                <div className="ml-12 space-y-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-500">24</div>
                    <div className="text-xs text-gray-500">进行中项目</div>
                  </div>
                  <div className="flex gap-8">
                    <div className="text-center">
                      <div className="text-xl font-bold text-blue-500">8</div>
                      <div className="text-xs text-gray-500">硬件设备</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xl font-bold text-red-500">12</div>
                      <div className="text-xs text-gray-500">开源软件</div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              // Vocational & Bureau Overview
              <div className="flex items-center justify-center">
                <div className="relative w-64 h-64">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="40" fill="none" stroke="#f3f4f6" strokeWidth="8" />
                    <circle
                      cx="50" cy="50" r="40" fill="none" stroke={`url(#gradient-${config.themeColor})`} strokeWidth="8"
                      strokeLinecap="round" strokeDasharray="251.2" strokeDashoffset="25.12"
                      className="transition-all duration-1000"
                    />
                    <defs>
                      <linearGradient id={`gradient-${config.themeColor}`} x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor={config.themeColor === 'orange' ? '#f97316' : '#6366f1'} />
                        <stop offset="100%" stopColor={config.themeColor === 'orange' ? '#ea580c' : '#4f46e5'} />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-4xl font-bold text-gray-800">92%</span>
                    <span className="text-sm text-gray-500 mt-1">目标达成</span>
                  </div>
                </div>
                <div className="ml-12 space-y-4">
                  <div className="text-center">
                    <div className={`text-2xl font-bold text-${config.themeColor}-500`}>18</div>
                    <div className="text-xs text-gray-500">进行中项目</div>
                  </div>
                  <div className="flex gap-8">
                    <div className="text-center">
                      <div className="text-xl font-bold text-blue-500">156</div>
                      <div className="text-xs text-gray-500">{config.type === 'vocational' ? '合作企业' : '管辖学校'}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xl font-bold text-red-500">45</div>
                      <div className="text-xs text-gray-500">{config.type === 'vocational' ? '实训基地' : '在职教师'}</div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Function Center - Polished */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15 }}
            className="bg-white rounded-3xl p-8 shadow-[0_2px_20px_rgb(0,0,0,0.03)] border border-gray-100/80"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-gray-900">{config.type === 'training' ? '运营中心' : config.type === 'k12' ? 'STEM 创客中心' : '业务中心'}</h3>
              <ChevronRight className="h-5 w-5 text-gray-300 hover:text-gray-600 transition-colors cursor-pointer" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              {config.functionCards.map((card, i) => {
                const IconComponent = card.icon;
                return (
                  <button
                    key={i}
                    className={`group bg-gradient-to-br ${card.color} p-5 rounded-2xl text-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-left relative overflow-hidden`}
                  >
                    <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -mr-10 -mt-10 blur-xl group-hover:scale-150 transition-transform duration-500" />
                    <IconComponent className="h-7 w-7 mb-3 relative z-10" />
                    <div className="text-sm font-bold mb-1 relative z-10">{card.title}</div>
                    <div className="text-xs opacity-90 font-medium relative z-10">{card.subtitle}</div>
                  </button>
                );
              })}
            </div>
          </motion.div>

          {/* Quick Tools - Modernized */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.25 }}
            className="bg-white rounded-3xl p-8 shadow-[0_2px_20px_rgb(0,0,0,0.03)] border border-gray-100/80"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-gray-900">{config.type === 'training' ? '常用工具' : '创客工具箱'}</h3>
              <ChevronRight className="h-5 w-5 text-gray-300 hover:text-gray-600 transition-colors cursor-pointer" />
            </div>
            <div className="grid grid-cols-5 gap-4">
              {config.quickTools.map((tool, i) => {
                const IconComponent = tool.icon;
                return (
                  <button key={i} className="flex flex-col items-center gap-3 group">
                    <div className={`w-14 h-14 ${tool.color} rounded-2xl flex items-center justify-center shadow-lg shadow-gray-200/50 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <span className="text-xs font-medium text-gray-600 text-center group-hover:text-gray-900 transition-colors">{tool.title}</span>
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
              <h3 className="text-lg font-bold text-gray-800">教学监控数据</h3>
              <div className="flex items-center gap-2">
                <select className="text-xs border border-gray-200 rounded px-2 py-1 outline-none">
                  <option>项目进度</option>
                </select>
                <ChevronRight className="h-4 w-4 text-gray-400" />
              </div>
            </div>
            <div className="h-48 bg-gradient-to-t from-green-100 to-white rounded-xl relative overflow-hidden">
              <svg className="absolute bottom-0 left-0 w-full h-full" viewBox="0 0 200 100" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#10b981" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path
                  d="M 0 80 Q 20 70, 40 65 T 80 50 T 120 60 T 160 30 T 200 40 L 200 100 L 0 100 Z"
                  fill="url(#chartGradient)"
                />
                <path
                  d="M 0 80 Q 20 70, 40 65 T 80 50 T 120 60 T 160 30 T 200 40"
                  fill="none" stroke="#10b981" strokeWidth="2"
                />
              </svg>
              <div className="absolute bottom-2 left-2 text-xs text-gray-500">
                STEM 项目参与度趋势
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
