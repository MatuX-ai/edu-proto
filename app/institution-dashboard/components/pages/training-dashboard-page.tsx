
'use client';

import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import type { InstitutionConfig } from '../../config/institution-config';

interface TrainingDashboardPageProps {
  config: InstitutionConfig;
}

export default function TrainingDashboardPage({ config }: TrainingDashboardPageProps) {
  return (
    <div className="space-y-8">
      {/* 核心指标 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {config.stats.map((stat, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-medium text-gray-500 uppercase tracking-wider">{stat.label}</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
              </div>
              <div className={`p-2.5 rounded-lg bg-${config.themeColor}-50`}>
                <stat.icon className={`w-5 h-5 text-${config.themeColor}-600`} />
              </div>
            </div>
          </motion.div>
        ))}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl p-5 text-white shadow-lg hover:shadow-xl transition-shadow cursor-pointer group"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-100 text-xs font-medium uppercase tracking-wider">本月消课率</p>
              <p className="text-2xl font-bold mt-1">92%</p>
            </div>
            <Calendar className="w-5 h-5 text-blue-200 group-hover:scale-110 transition-transform" />
          </div>
        </motion.div>
      </div>

      {/* 快捷工具与功能卡片 */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-4">
          <h3 className="text-base font-semibold text-gray-900 flex items-center gap-2">
            <span className="w-1 h-4 bg-blue-600 rounded-full"></span>
            常用功能
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {config.functionCards.map((card, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.02, y: -2 }}
                className={`bg-gradient-to-r ${card.color} rounded-xl p-5 text-white cursor-pointer shadow-md hover:shadow-lg transition-all`}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="font-bold text-base">{card.title}</h4>
                    <p className="text-white/80 text-xs mt-1">{card.subtitle}</p>
                  </div>
                  <card.icon className="w-6 h-6 text-white/80" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-base font-semibold text-gray-900 flex items-center gap-2">
            <span className="w-1 h-4 bg-blue-600 rounded-full"></span>
            快捷操作
          </h3>
          <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 space-y-2">
            {config.quickTools.map((tool, idx) => (
              <button
                key={idx}
                className="w-full flex items-center gap-3 p-2.5 rounded-lg hover:bg-gray-50 transition-colors group"
              >
                <div className={`w-8 h-8 rounded-lg ${tool.color} flex items-center justify-center text-white shadow-sm group-hover:scale-110 transition-transform`}>
                  <tool.icon className="w-4 h-4" />
                </div>
                <span className="font-medium text-gray-700 text-sm">{tool.title}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 媒体资源中心 */}
      <div>
        <h3 className="text-base font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-4 bg-blue-600 rounded-full"></span>
          教学资源中心
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {config.mediaCards.map((card, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -4 }}
              className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm hover:shadow-md transition-all cursor-pointer group"
            >
              <div className={`w-10 h-10 rounded-lg bg-${config.themeColor}-50 flex items-center justify-center mb-3 group-hover:bg-${config.themeColor}-100 transition-colors`}>
                <card.icon className={`w-5 h-5 text-${config.themeColor}-600`} />
              </div>
              <h4 className="font-bold text-gray-900 text-sm">{card.title}</h4>
              <p className="text-xs text-gray-500 mt-1">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
