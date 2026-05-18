'use client';

import { motion } from 'framer-motion';
import { BarChart3, TrendingUp, Users, DollarSign, Calendar, Download } from 'lucide-react';

interface ReportsPageProps {
  institutionType?: string;
}

export default function ReportsPage({ institutionType = '机构' }: ReportsPageProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">数据报表中心</h2>
          <p className="text-sm text-gray-500 mt-1">{institutionType}运营数据全景分析</p>
        </div>
        <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
          <Download className="h-4 w-4" />
          <span>导出报表</span>
        </button>
      </div>

      {/* Quick Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { label: '总用户数', value: '1,234', change: '+12%', icon: Users, color: 'blue' },
          { label: '本月营收', value: '¥45.8K', change: '+8%', icon: DollarSign, color: 'green' },
          { label: '活跃率', value: '85.6%', change: '+3%', icon: TrendingUp, color: 'purple' },
          { label: '课程总数', value: '156', change: '+5', icon: Calendar, color: 'orange' },
        ].map((stat, i) => {
          const IconComponent = stat.icon;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-lg bg-${stat.color}-50`}>
                  <IconComponent className={`h-6 w-6 text-${stat.color}-600`} />
                </div>
                <span className={`text-xs font-medium px-2 py-1 rounded-full bg-green-50 text-green-600`}>
                  {stat.change}
                </span>
              </div>
              <div className={`text-2xl font-bold text-gray-800`}>{stat.value}</div>
              <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
            </motion.div>
          );
        })}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Revenue Chart */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-gray-800">营收趋势</h3>
            <select className="text-sm border border-gray-200 rounded-lg px-3 py-1.5 outline-none">
              <option>近7天</option>
              <option>近30天</option>
              <option>近90天</option>
            </select>
          </div>
          <div className="h-64 flex items-end justify-between gap-2">
            {[65, 45, 78, 52, 90, 68, 85].map((height, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-2">
                <div
                  className="w-full bg-gradient-to-t from-blue-500 to-blue-400 rounded-t-lg transition-all hover:from-blue-600 hover:to-blue-500"
                  style={{ height: `${height}%` }}
                />
                <span className="text-xs text-gray-500">
                  {['周一', '周二', '周三', '周四', '周五', '周六', '周日'][i]}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* User Growth Chart */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-gray-800">用户增长</h3>
            <BarChart3 className="h-5 w-5 text-gray-400" />
          </div>
          <div className="h-64 relative">
            <svg className="w-full h-full" viewBox="0 0 400 200">
              <defs>
                <linearGradient id="userGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#10b981" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path
                d="M 0 150 Q 50 120, 100 100 T 200 80 T 300 50 T 400 30 L 400 200 L 0 200 Z"
                fill="url(#userGradient)"
              />
              <path
                d="M 0 150 Q 50 120, 100 100 T 200 80 T 300 50 T 400 30"
                fill="none"
                stroke="#10b981"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
            <div className="absolute bottom-0 left-0 right-0 flex justify-between text-xs text-gray-500 px-2">
              <span>1月</span>
              <span>2月</span>
              <span>3月</span>
              <span>4月</span>
              <span>5月</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Detailed Reports Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden"
      >
        <div className="p-6 border-b border-gray-100">
          <h3 className="text-lg font-bold text-gray-800">详细报表列表</h3>
        </div>
        <table className="w-full text-left">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase">报表名称</th>
              <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase">类型</th>
              <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase">生成时间</th>
              <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase">状态</th>
              <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase">操作</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {[
              { name: '月度营收报表', type: '财务', time: '2026-05-18', status: '已完成' },
              { name: '学员出勤统计', type: '教学', time: '2026-05-17', status: '已完成' },
              { name: '教师绩效评估', type: '人事', time: '2026-05-16', status: '生成中' },
              { name: '课程满意度调查', type: '质量', time: '2026-05-15', status: '已完成' },
              { name: '资源使用分析', type: '运营', time: '2026-05-14', status: '已完成' },
            ].map((report, i) => (
              <tr key={i} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 text-sm font-medium text-gray-800">{report.name}</td>
                <td className="px-6 py-4 text-sm text-gray-600">
                  <span className="px-2 py-1 bg-blue-50 text-blue-600 rounded-full text-xs">
                    {report.type}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">{report.time}</td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    report.status === '已完成' 
                      ? 'bg-green-50 text-green-600' 
                      : 'bg-yellow-50 text-yellow-600'
                  }`}>
                    {report.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                    查看
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </motion.div>
    </motion.div>
  );
}
