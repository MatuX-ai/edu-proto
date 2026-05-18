'use client';

import { motion } from 'framer-motion';
import { Trophy, Calendar, Users, Award, Plus, Search, Filter } from 'lucide-react';

export default function CompetitionManagementPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">STEM竞赛活动管理</h2>
          <p className="text-sm text-gray-500 mt-1">管理校内外STEM竞赛，组织培训和参赛团队</p>
        </div>
        <button className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
          <Plus className="h-4 w-4" />
          <span>新增竞赛</span>
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { label: '进行中竞赛', value: '3', icon: Trophy, color: 'green' },
          { label: '参赛学生', value: '45', icon: Users, color: 'blue' },
          { label: '获奖次数', value: '12', icon: Award, color: 'purple' },
          { label: ' upcoming 赛事', value: '5', icon: Calendar, color: 'orange' },
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

      {/* Competition List */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden"
      >
        <div className="p-6 border-b border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-gray-800">竞赛列表</h3>
            <div className="flex items-center gap-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="搜索竞赛..."
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
              <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase">竞赛名称</th>
              <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase">类型</th>
              <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase">时间</th>
              <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase">参赛人数</th>
              <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase">状态</th>
              <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase">操作</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {[
              { name: '全国青少年科技创新大赛', type: '综合类', date: '2024-05-20', participants: '12', status: '报名中' },
              { name: '市级机器人竞赛', type: '机器人', date: '2024-06-15', participants: '8', status: '培训中' },
              { name: '编程马拉松挑战赛', type: '编程类', date: '2024-07-10', participants: '15', status: '筹备中' },
              { name: '3D打印创意设计赛', type: '设计类', date: '2024-08-05', participants: '6', status: '未开始' },
              { name: 'AI应用创新大赛', type: '人工智能', date: '2024-09-12', participants: '10', status: '报名中' },
            ].map((competition, i) => (
              <tr key={i} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 text-sm font-medium text-gray-800">{competition.name}</td>
                <td className="px-6 py-4">
                  <span className="px-2 py-1 bg-green-50 text-green-600 rounded-full text-xs">
                    {competition.type}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">{competition.date}</td>
                <td className="px-6 py-4 text-sm text-gray-600">{competition.participants}人</td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    competition.status === '报名中' ? 'bg-blue-50 text-blue-600' :
                    competition.status === '培训中' ? 'bg-yellow-50 text-yellow-600' :
                    competition.status === '筹备中' ? 'bg-purple-50 text-purple-600' :
                    'bg-gray-50 text-gray-600'
                  }`}>
                    {competition.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <button className="text-green-600 hover:text-green-700 text-sm font-medium mr-3">
                    详情
                  </button>
                  <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                    管理
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </motion.div>

      {/* Upcoming Events */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-white rounded-xl border border-gray-100 shadow-sm p-6"
      >
        <h3 className="text-lg font-bold text-gray-800 mb-4">近期赛事日历</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { date: '2024-05-20', name: '全国青少年科技创新大赛', location: '北京', type: '综合类' },
            { date: '2024-06-15', name: '市级机器人竞赛', location: '市科技馆', type: '机器人' },
            { date: '2024-07-10', name: '编程马拉松挑战赛', location: '线上', type: '编程类' },
            { date: '2024-08-05', name: '3D打印创意设计赛', location: '创客空间', type: '设计类' },
            { date: '2024-09-12', name: 'AI应用创新大赛', location: '上海', type: '人工智能' },
          ].map((event, i) => (
            <div key={i} className="border border-gray-200 rounded-lg p-4 hover:border-green-300 hover:shadow-md transition-all">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-bold text-green-600">{event.date}</span>
                <span className="px-2 py-1 bg-green-50 text-green-600 rounded-full text-xs">
                  {event.type}
                </span>
              </div>
              <div className="font-medium text-gray-800 mb-1">{event.name}</div>
              <div className="text-xs text-gray-500">{event.location}</div>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
