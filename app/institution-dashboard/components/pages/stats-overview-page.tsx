'use client';

import { motion } from 'framer-motion';
import { BarChart3, TrendingUp, Users, DollarSign } from 'lucide-react';
import { useState, useEffect } from 'react';

interface StatsOverviewPageProps {
  title: string;
}

export default function StatsOverviewPage({ title }: StatsOverviewPageProps) {
  const [stats, setStats] = useState([
    { label: '总收入', value: 128450, icon: DollarSign, color: 'text-green-500' },
    { label: '活跃用户', value: 1234, icon: Users, color: 'text-blue-500' },
    { label: '增长率', value: 12.5, icon: TrendingUp, color: 'text-purple-500' },
    { label: '完成率', value: 85, icon: BarChart3, color: 'text-orange-500' },
  ]);

  // 模拟数据动态变化
  useEffect(() => {
    const interval = setInterval(() => {
      setStats(prev => prev.map(stat => ({
        ...stat,
        value: stat.value + (Math.random() > 0.5 ? 1 : -1) * (stat.value * 0.01)
      })));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <h2 className="text-2xl font-bold text-gray-800">{title}</h2>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {stats.map((item, i) => (
          <motion.div 
            key={i} 
            layout
            className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex items-center justify-between"
          >
            <div>
              <p className="text-sm text-gray-500 mb-1">{item.label}</p>
              <p className="text-2xl font-bold text-gray-800 font-mono">
                {item.label === '总收入' ? '¥' : item.label === '增长率' ? '+' : ''}
                {typeof item.value === 'number' && item.value % 1 !== 0 ? item.value.toFixed(1) : Math.floor(item.value).toLocaleString()}
                {item.label === '完成率' || item.label === '增长率' ? '%' : ''}
              </p>
            </div>
            <item.icon className={`h-8 w-8 ${item.color} opacity-80`} />
          </motion.div>
        ))}
      </div>

      {/* Charts Area */}
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm h-80 flex flex-col">
          <h3 className="font-semibold text-gray-700 mb-4">数据趋势分析</h3>
          <div className="flex-1 bg-gray-50 rounded-lg flex items-center justify-center text-gray-400">
            [图表区域 - 模拟折线图]
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm h-80 flex flex-col">
          <h3 className="font-semibold text-gray-700 mb-4">分布占比统计</h3>
          <div className="flex-1 bg-gray-50 rounded-lg flex items-center justify-center text-gray-400">
            [图表区域 - 模拟饼图]
          </div>
        </div>
      </div>
    </motion.div>
  );
}
