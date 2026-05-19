'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

interface StatsOverviewPageProps {
  title: string;
  type?: 'bar' | 'pie';
}

const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6'];

const mockBarData = [
  { name: '周一', value: 40 },
  { name: '周二', value: 30 },
  { name: '周三', value: 20 },
  { name: '周四', value: 27 },
  { name: '周五', value: 18 },
  { name: '周六', value: 23 },
  { name: '周日', value: 34 },
];

const mockPieData = [
  { name: '已完成', value: 400 },
  { name: '进行中', value: 300 },
  { name: '待开始', value: 300 },
  { name: '已取消', value: 200 },
];

export default function EnhancedStatsPage({ title, type = 'bar' }: StatsOverviewPageProps) {
  const [currentTime] = useState(() => new Date().toLocaleTimeString());
  const [randomValues] = useState(() => [1, 2, 3].map(() => Math.floor(Math.random() * 100)));

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
        <div className="flex gap-2">
          <button className="px-3 py-1 text-sm bg-blue-50 text-blue-600 rounded-lg">本周</button>
          <button className="px-3 py-1 text-sm text-gray-500 hover:bg-gray-50 rounded-lg">本月</button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Chart Card */}
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm h-96">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">趋势分析</h3>
          <ResponsiveContainer width="100%" height="85%">
            {type === 'bar' ? (
              <BarChart data={mockBarData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" axisLine={false} tickLine={false} />
                <YAxis axisLine={false} tickLine={false} />
                <Tooltip cursor={{ fill: '#f3f4f6' }} contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                <Bar dataKey="value" fill="#3b82f6" radius={[4, 4, 0, 0]} />
              </BarChart>
            ) : (
              <PieChart>
                <Pie
                  data={mockPieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {mockPieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            )}
          </ResponsiveContainer>
        </div>

        {/* Summary Card */}
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">关键指标</h3>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className={`w-2 h-2 rounded-full ${i === 1 ? 'bg-blue-500' : i === 2 ? 'bg-green-500' : 'bg-orange-500'}`} />
                  <span className="text-sm text-gray-600">指标项目 {i}</span>
                </div>
                <span className="font-bold text-gray-800">{randomValues[i - 1] || 0}%</span>
              </div>
            ))}
          </div>
          <div className="mt-6 pt-6 border-t border-gray-100">
            <p className="text-sm text-gray-500">数据更新于: {currentTime}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
