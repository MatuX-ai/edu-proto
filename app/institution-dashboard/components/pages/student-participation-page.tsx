'use client';

import { motion } from 'framer-motion';
import { Users, Award, BookOpen, TrendingUp, Search, Filter } from 'lucide-react';

export default function StudentParticipationPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">学生参与跟踪</h2>
          <p className="text-sm text-gray-500 mt-1">追踪学生在STEM第二课堂中的成长和参与度</p>
        </div>
        <button className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
          <Users className="h-4 w-4" />
          <span>查看成长档案</span>
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { label: '活跃学生', value: '356', icon: Users, color: 'green' },
          { label: '平均参与度', value: '87%', icon: TrendingUp, color: 'blue' },
          { label: '完成项目', value: '1,248', icon: BookOpen, color: 'purple' },
          { label: '获得徽章', value: '2,856', icon: Award, color: 'orange' },
        ].map((stat, i) => {
          const IconComponent = stat.icon;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm"
            >
              <div className={`p-3 rounded-lg bg-${stat.color}-50 w-fit mb-3`}>
                <IconComponent className={`h-6 w-6 text-${stat.color}-600`} />
              </div>
              <div className="text-2xl font-bold text-gray-800">{stat.value}</div>
              <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
            </motion.div>
          );
        })}
      </div>

      {/* Student Participation Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden"
      >
        <div className="p-6 border-b border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-gray-800">学生参与情况</h3>
            <div className="flex items-center gap-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="搜索学生..."
                  className="pl-10 pr-4 py-2 bg-gray-50 rounded-lg border-none focus:ring-2 focus:ring-green-100 outline-none text-sm"
                />
              </div>
              <button className="flex items-center gap-2 px-3 py-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <Filter className="h-4 w-4 text-gray-600" />
                <span className="text-sm text-gray-600">筛选</span>
              </button>
            </div>
          </div>
        </div>
        <table className="w-full text-left">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase">学生姓名</th>
              <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase">年级班级</th>
              <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase">参与课程数</th>
              <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase">完成项目数</th>
              <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase">获得徽章</th>
              <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase">活跃度</th>
              <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase">操作</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {[
              { name: '李明', class: '初一(2)班', courses: '3', projects: '5', badges: '8', activity: '95%' },
              { name: '王芳', class: '初二(1)班', courses: '2', projects: '3', badges: '5', activity: '88%' },
              { name: '张伟', class: '初三(3)班', courses: '4', projects: '7', badges: '12', activity: '92%' },
              { name: '赵丽', class: '初一(1)班', courses: '1', projects: '2', badges: '3', activity: '75%' },
              { name: '陈强', class: '高二(2)班', courses: '3', projects: '4', badges: '6', activity: '85%' },
              { name: '刘洋', class: '高一(1)班', courses: '2', projects: '3', badges: '4', activity: '80%' },
            ].map((student, i) => (
              <tr key={i} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 text-sm font-medium text-gray-800">{student.name}</td>
                <td className="px-6 py-4 text-sm text-gray-600">{student.class}</td>
                <td className="px-6 py-4 text-sm text-gray-600">{student.courses}</td>
                <td className="px-6 py-4 text-sm text-gray-600">{student.projects}</td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-1">
                    <Award className="h-4 w-4 text-yellow-500" />
                    <span className="text-sm text-gray-600">{student.badges}</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <div className="w-16 bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-green-500 h-2 rounded-full" 
                        style={{ width: student.activity }}
                      ></div>
                    </div>
                    <span className="text-xs text-gray-600">{student.activity}</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <button className="text-green-600 hover:text-green-700 text-sm font-medium">
                    查看详情
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </motion.div>

      {/* Badges Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-white rounded-xl border border-gray-100 shadow-sm p-6"
      >
        <h3 className="text-lg font-bold text-gray-800 mb-4">技能徽章系统</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {[
            { name: '编程新手', icon: '💻', count: 45 },
            { name: '硬件达人', icon: '🔧', count: 32 },
            { name: '创意设计师', icon: '🎨', count: 28 },
            { name: '团队协作', icon: '🤝', count: 56 },
            { name: '问题解决者', icon: '🧩', count: 38 },
            { name: '创新思维', icon: '💡', count: 42 },
            { name: '竞赛获奖', icon: '🏆', count: 15 },
            { name: '项目完成', icon: '✅', count: 67 },
            { name: '持续学习', icon: '📚', count: 89 },
            { name: '分享精神', icon: '🌟', count: 34 },
            { name: '领导力', icon: '👑', count: 12 },
            { name: '环保先锋', icon: '🌱', count: 23 },
          ].map((badge, i) => (
            <div key={i} className="border border-gray-200 rounded-lg p-4 text-center hover:border-green-300 hover:shadow-md transition-all">
              <div className="text-3xl mb-2">{badge.icon}</div>
              <div className="text-sm font-medium text-gray-800 mb-1">{badge.name}</div>
              <div className="text-xs text-gray-500">{badge.count}人获得</div>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
