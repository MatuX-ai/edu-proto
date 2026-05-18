'use client';

import { motion } from 'framer-motion';
import { ChevronRight, Zap } from 'lucide-react';
import { InstitutionConfig } from '../config/institution-config';

interface DashboardContentProps {
  config: InstitutionConfig;
}

export default function DashboardContent({ config }: DashboardContentProps) {
  return (
    <>
      {/* Banner Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-6 rounded-2xl bg-gradient-to-r from-amber-100 via-yellow-50 to-orange-100 p-6 shadow-sm border border-amber-200/50"
      >
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-amber-800 mb-2">{config.title}</h1>
            <p className="text-sm text-amber-700/80 mb-4">{config.subtitle}</p>
            <div className="flex gap-4">
              {config.stats.map((stat, i) => (
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
              {config.mediaCards.map((card, i) => {
                const IconComponent = card.icon;
                const isActive = i === 1;
                return (
                  <button
                    key={i}
                    className={`relative p-4 rounded-xl transition-all ${
                      isActive
                        ? 'bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-200'
                        : 'bg-gray-50 hover:bg-blue-50 border border-gray-200'
                    }`}
                  >
                    <IconComponent className={`h-6 w-6 mb-3 ${isActive ? 'text-white' : 'text-blue-500'}`} />
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
                <Zap className="h-5 w-5 text-blue-500" />
                数据中心
              </h3>
              <select className="text-sm border border-gray-200 rounded-lg px-3 py-1.5 outline-none focus:border-blue-400">
                <option>企业概览</option>
                <option>数据分析</option>
              </select>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative w-64 h-64">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="40" fill="none" stroke="#f3f4f6" strokeWidth="8" />
                  <circle
                    cx="50" cy="50" r="40" fill="none" stroke="url(#gradient)" strokeWidth="8"
                    strokeLinecap="round" strokeDasharray="251.2" strokeDashoffset="62.8"
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
                  <span className="text-4xl font-bold text-gray-800">25°C</span>
                  <span className="text-sm text-gray-500 mt-1">当前温度</span>
                </div>
              </div>
              <div className="ml-12 space-y-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-500">15°C</div>
                  <div className="text-xs text-gray-500">实时温度</div>
                </div>
                <div className="flex gap-8">
                  <div className="text-center">
                    <div className="text-xl font-bold text-blue-500">0°C</div>
                    <div className="text-xs text-gray-500">最低</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold text-red-500">25°C</div>
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
              {config.functionCards.map((card, i) => {
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
              {config.quickTools.map((tool, i) => {
                const IconComponent = tool.icon;
                return (
                  <button key={i} className="flex flex-col items-center gap-2 group">
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
                  fill="none" stroke="#f97316" strokeWidth="2"
                />
              </svg>
              <div className="absolute bottom-2 left-2 text-xs text-gray-500">
                监管信息发布趋势
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
