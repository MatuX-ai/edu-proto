'use client';

import { motion } from 'framer-motion';
import { Search, Plus, Phone, MessageSquare, Filter, MoreHorizontal, CheckCircle, XCircle, Clock } from 'lucide-react';
import type { InstitutionConfig } from '../../config/institution-config';

interface LeadsPageProps {
  config: InstitutionConfig;
}

export default function LeadsPage({ config }: LeadsPageProps) {
  const leadsData = config.mockData?.leads?.rows || [];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      {/* Header & Actions */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">招生线索管理</h2>
          <p className="text-sm text-gray-500 mt-1">高效跟进潜在学员，提升转化率</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 bg-white border border-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors shadow-sm">
            <Filter className="h-4 w-4" />
            <span>筛选</span>
          </button>
          <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors shadow-md shadow-blue-200">
            <Plus className="h-4 w-4" />
            <span>录入线索</span>
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { label: '今日新增', value: '12', icon: Plus, color: 'text-blue-600', bg: 'bg-blue-50' },
          { label: '待跟进', value: '28', icon: Clock, color: 'text-orange-600', bg: 'bg-orange-50' },
          { label: '已预约试听', value: '8', icon: CheckCircle, color: 'text-green-600', bg: 'bg-green-50' },
          { label: '本月转化', value: '15%', icon: CheckCircle, color: 'text-purple-600', bg: 'bg-purple-50' },
        ].map((stat, idx) => (
          <div key={idx} className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-center justify-between">
            <div>
              <p className="text-xs text-gray-500">{stat.label}</p>
              <p className="text-xl font-bold text-gray-900 mt-1">{stat.value}</p>
            </div>
            <div className={`p-2 rounded-lg ${stat.bg}`}>
              <stat.icon className={`h-5 w-5 ${stat.color}`} />
            </div>
          </div>
        ))}
      </div>

      {/* Filters Bar */}
      <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex flex-wrap gap-4 items-center">
        <div className="relative flex-1 min-w-[200px]">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="搜索姓名、电话或课程..."
            className="w-full pl-10 pr-4 py-2 bg-gray-50 rounded-lg border-none focus:ring-2 focus:ring-blue-100 outline-none text-sm"
          />
        </div>
        <select className="px-3 py-2 bg-gray-50 rounded-lg border-none text-sm text-gray-600 focus:ring-2 focus:ring-blue-100 outline-none">
          <option>所有来源</option>
          <option>朋友圈广告</option>
          <option>老带新</option>
          <option>地推活动</option>
        </select>
        <select className="px-3 py-2 bg-gray-50 rounded-lg border-none text-sm text-gray-600 focus:ring-2 focus:ring-blue-100 outline-none">
          <option>所有状态</option>
          <option>待回访</option>
          <option>待试听</option>
          <option>已报名</option>
        </select>
      </div>

      {/* Leads Table */}
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-50 border-b border-gray-100">
            <tr>
              <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase">学员信息</th>
              <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase">意向课程</th>
              <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase">来源渠道</th>
              <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase">跟进状态</th>
              <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase text-right">操作</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {leadsData.map((row, rowIndex) => (
              <tr key={rowIndex} className="hover:bg-gray-50/50 transition-colors group">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xs">
                      {row[0][0]}
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-900">{row[0]}</div>
                      <div className="text-xs text-gray-500">{row[1]}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-700">{row[2]}</td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                    {row[3]}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    row[4] === '已报名' ? 'bg-green-50 text-green-700' :
                    row[4] === '待试听' ? 'bg-blue-50 text-blue-700' :
                    'bg-orange-50 text-orange-700'
                  }`}>
                    <div className={`w-1.5 h-1.5 rounded-full ${
                      row[4] === '已报名' ? 'bg-green-500' :
                      row[4] === '待试听' ? 'bg-blue-500' :
                      'bg-orange-500'
                    }`} />
                    {row[4]}
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="p-1.5 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors" title="拨打电话">
                      <Phone className="h-4 w-4" />
                    </button>
                    <button className="p-1.5 text-gray-400 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors" title="发送微信">
                      <MessageSquare className="h-4 w-4" />
                    </button>
                    <button className="p-1.5 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                      <MoreHorizontal className="h-4 w-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        
        {/* Pagination */}
        <div className="px-6 py-4 border-t border-gray-100 flex items-center justify-between text-sm text-gray-500">
          <span>共 {leadsData.length} 条线索</span>
          <div className="flex gap-2">
            <button className="px-3 py-1 border rounded hover:bg-gray-50 disabled:opacity-50" disabled>上一页</button>
            <button className="px-3 py-1 border rounded hover:bg-gray-50 disabled:opacity-50" disabled>下一页</button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
