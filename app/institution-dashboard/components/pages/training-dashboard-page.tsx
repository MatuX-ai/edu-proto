
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {config.stats.map((stat, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">{stat.label}</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
              </div>
              <div className={`p-3 rounded-lg bg-${config.themeColor}-50`}>
                <stat.icon className={`w-6 h-6 text-${config.themeColor}-600`} />
              </div>
            </div>
          </motion.div>
        ))}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl p-6 text-white shadow-lg"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-100 text-sm">本月消课率</p>
              <p className="text-2xl font-bold mt-1">92%</p>
            </div>
            <Calendar className="w-6 h-6 text-blue-200" />
          </div>
        </motion.div>
      </div>

      {/* 快捷工具与功能卡片 */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <h3 className="text-lg font-semibold text-gray-900">常用功能</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {config.functionCards.map((card, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.02 }}
                className={`bg-gradient-to-r ${card.color} rounded-xl p-6 text-white cursor-pointer shadow-md`}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="font-bold text-lg">{card.title}</h4>
                    <p className="text-white/80 text-sm mt-1">{card.subtitle}</p>
                  </div>
                  <card.icon className="w-8 h-8 text-white/80" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg font-semibold text-gray-900">快捷操作</h3>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 space-y-4">
            {config.quickTools.map((tool, idx) => (
              <button
                key={idx}
                className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
              >
                <div className={`w-10 h-10 rounded-lg ${tool.color} flex items-center justify-center text-white shadow-sm group-hover:scale-110 transition-transform`}>
                  <tool.icon className="w-5 h-5" />
                </div>
                <span className="font-medium text-gray-700">{tool.title}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 媒体资源中心 */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">教学资源中心</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {config.mediaCards.map((card, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -4 }}
              className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all cursor-pointer"
            >
              <div className={`w-12 h-12 rounded-lg bg-${config.themeColor}-50 flex items-center justify-center mb-4`}>
                <card.icon className={`w-6 h-6 text-${config.themeColor}-600`} />
              </div>
              <h4 className="font-bold text-gray-900">{card.title}</h4>
              <p className="text-sm text-gray-500 mt-1">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
