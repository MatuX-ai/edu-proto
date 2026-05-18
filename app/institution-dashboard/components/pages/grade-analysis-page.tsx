'use client';

import { motion } from 'framer-motion';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { TrendingUp, Users, Award } from 'lucide-react';

const gradeData = [
  { name: '第一次月考', 高一: 82, 高二: 78, 高三: 85 },
  { name: '期中考试', 高一: 85, 高二: 80, 高三: 88 },
  { name: '第二次月考', 高一: 83, 高二: 82, 高三: 90 },
  { name: '期末考试', 高一: 88, 高二: 85, 高三: 92 },
];

export default function GradeAnalysisPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-800">学业成绩分析中心</h2>
        <select className="border rounded-lg px-3 py-2 outline-none focus:border-green-400">
          <option>2025-2026学年第二学期</option>
          <option>2025-2026学年第一学期</option>
        </select>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-center gap-4">
          <div className="p-3 bg-green-100 rounded-lg text-green-600"><TrendingUp className="h-6 w-6" /></div>
          <div>
            <div className="text-sm text-gray-500">全校平均分</div>
            <div className="text-2xl font-bold text-gray-800">86.5</div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-center gap-4">
          <div className="p-3 bg-blue-100 rounded-lg text-blue-600"><Users className="h-6 w-6" /></div>
          <div>
            <div className="text-sm text-gray-500">及格率</div>
            <div className="text-2xl font-bold text-gray-800">98.2%</div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-center gap-4">
          <div className="p-3 bg-purple-100 rounded-lg text-purple-600"><Award className="h-6 w-6" /></div>
          <div>
            <div className="text-sm text-gray-500">优秀率 (≥90)</div>
            <div className="text-2xl font-bold text-gray-800">32.5%</div>
          </div>
        </div>
      </div>

      {/* Chart */}
      <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm h-[500px]">
        <h3 className="text-lg font-semibold text-gray-700 mb-6">年级成绩趋势对比</h3>
        <ResponsiveContainer width="100%" height="85%">
          <LineChart data={gradeData}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="name" axisLine={false} tickLine={false} />
            <YAxis axisLine={false} tickLine={false} domain={[60, 100]} />
            <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }} />
            <Legend />
            <Line type="monotone" dataKey="高一" stroke="#10b981" strokeWidth={3} dot={{ r: 4 }} activeDot={{ r: 6 }} />
            <Line type="monotone" dataKey="高二" stroke="#3b82f6" strokeWidth={3} dot={{ r: 4 }} activeDot={{ r: 6 }} />
            <Line type="monotone" dataKey="高三" stroke="#f59e0b" strokeWidth={3} dot={{ r: 4 }} activeDot={{ r: 6 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
}
