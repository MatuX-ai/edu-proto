'use client';

import { motion } from 'framer-motion';
import type { InstitutionConfig } from '../../config/institution-config';

interface VocationalDashboardPageProps {
  config: InstitutionConfig;
}

export default function VocationalDashboardPage({ config }: VocationalDashboardPageProps) {
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
      </div>

      {/* 快捷功能 */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">常用功能</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
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

      {/* 媒体资源 */}
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
