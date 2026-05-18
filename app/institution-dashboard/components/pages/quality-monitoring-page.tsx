'use client';

import { motion } from 'framer-motion';
import { TrendingUp, Activity, Target, AwardIcon } from 'lucide-react';

export default function QualityMonitoringPage() {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
            <TrendingUp className="h-6 w-6 text-blue-600" />
            STEM 教育质量监测大屏
          </h2>
          <p className="text-gray-500 mt-1">实时数据驱动，精准把脉区域教育发展</p>
        </div>
        <select className="border border-gray-200 rounded-lg px-3 py-2 outline-none focus:border-indigo-400">
          <option>2025-2026 学年第一学期</option>
          <option>2025-2026 学年第二学期</option>
        </select>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { label: '课程开设率', value: '92%', icon: Activity, color: 'text-green-500' },
          { label: '学生参与率', value: '72%', icon: Target, color: 'text-blue-500' },
          { label: '设备利用率', value: '85%', icon: TrendingUp, color: 'text-purple-500' },
          { label: '师资达标率', value: '68%', icon: AwardIcon, color: 'text-orange-500' },
        ].map((item, idx) => (
          <div key={idx} className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-center gap-4">
            <div className={`p-3 bg-gray-50 rounded-full ${item.color}`}>
              <item.icon className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm text-gray-500">{item.label}</p>
              <p className="text-xl font-bold text-gray-800">{item.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Visualization Area */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm min-h-[300px]">
          <h3 className="font-bold text-gray-800 mb-4">各校 STEM 参与度排名</h3>
          <div className="space-y-4">
            {[
              { name: '第三高级中学', score: 95 },
              { name: '第一实验小学', score: 88 },
              { name: '第四完全中学', score: 82 },
              { name: '第二中学', score: 76 },
            ].map((school, idx) => (
              <div key={idx}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600">{school.name}</span>
                  <span className="font-medium text-gray-800">{school.score} 分</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2">
                  <div 
                    className="bg-indigo-500 h-2 rounded-full transition-all duration-500" 
                    style={{ width: `${school.score}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm min-h-[300px]">
          <h3 className="font-bold text-gray-800 mb-4">STEM 课程类型分布</h3>
          <div className="grid grid-cols-2 gap-4">
            {[
              { type: '人工智能', percent: '35%' },
              { type: '机器人技术', percent: '28%' },
              { type: '编程开发', percent: '22%' },
              { type: '工程设计', percent: '15%' },
            ].map((item, idx) => (
              <div key={idx} className="p-4 bg-gray-50 rounded-lg text-center">
                <p className="text-xs text-gray-500 mb-1">{item.type}</p>
                <p className="text-xl font-bold text-indigo-600">{item.percent}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
