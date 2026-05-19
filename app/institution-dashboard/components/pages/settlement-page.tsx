'use client';

import { motion } from 'framer-motion';
import { DollarSign, Users, CheckCircle, AlertCircle, FileText, Download } from 'lucide-react';
import type { InstitutionConfig } from '../../config/institution-config';

interface SettlementPageProps {
  config: InstitutionConfig;
}

export default function SettlementPage({ config }: SettlementPageProps) {
  const settlementData = config.mockData?.settlement?.rows || [];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">课时结算中心</h2>
          <p className="text-sm text-gray-500 mt-1">自动核算学员消课与教师课时费，支持批量生成账单</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 bg-white border border-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors shadow-sm">
            <FileText className="h-4 w-4" />
            <span>导出报表</span>
          </button>
          <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors shadow-md shadow-blue-200">
            <CheckCircle className="h-4 w-4" />
            <span>批量确认</span>
          </button>
        </div>
      </div>

      {/* Financial Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { label: '本月待结算', value: '¥8,450', icon: DollarSign, color: 'text-orange-600', bg: 'bg-orange-50' },
          { label: '已确认金额', value: '¥42,100', icon: CheckCircle, color: 'text-green-600', bg: 'bg-green-50' },
          { label: '涉及学员', value: '128 人', icon: Users, color: 'text-blue-600', bg: 'bg-blue-50' },
          { label: '异常单据', value: '3 笔', icon: AlertCircle, color: 'text-red-600', bg: 'bg-red-50' },
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

      {/* Settlement Table */}
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="p-4 border-b border-gray-100 flex items-center justify-between">
          <h3 className="font-semibold text-gray-900">消课明细列表</h3>
          <div className="flex gap-2">
            <select className="px-3 py-1.5 bg-gray-50 rounded-lg border-none text-sm text-gray-600 outline-none">
              <option>全部状态</option>
              <option>待确认</option>
              <option>已结算</option>
            </select>
          </div>
        </div>
        <table className="w-full text-left">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase">学员姓名</th>
              <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase">消课节数</th>
              <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase">课程单价</th>
              <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase">结算金额</th>
              <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase">剩余课时</th>
              <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase">状态</th>
              <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase text-right">操作</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {settlementData.map((row, idx) => (
              <tr key={idx} className="hover:bg-gray-50/50 transition-colors group">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold text-xs">
                      {row[0][0]}
                    </div>
                    <span className="text-sm font-medium text-gray-900">{row[0]}</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-700">{row[1]}</td>
                <td className="px-6 py-4 text-sm text-gray-700">{row[2]}</td>
                <td className="px-6 py-4 text-sm font-bold text-gray-900">{row[3]}</td>
                <td className="px-6 py-4">
                  <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">12 节</span>
                </td>
                <td className="px-6 py-4">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    row[4] === '已结算' ? 'bg-green-50 text-green-700' : 'bg-orange-50 text-orange-700'
                  }`}>
                    {row[4]}
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="text-xs text-blue-600 hover:text-blue-800 font-medium">详情</button>
                    {row[4] === '待确认' && (
                      <button className="text-xs text-green-600 hover:text-green-800 font-medium">确认</button>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        
        {/* Pagination */}
        <div className="px-6 py-4 border-t border-gray-100 flex items-center justify-between text-sm text-gray-500">
          <span>共 {settlementData.length} 条结算记录</span>
          <div className="flex gap-2">
            <button className="px-3 py-1 border rounded hover:bg-gray-50 disabled:opacity-50" disabled>上一页</button>
            <button className="px-3 py-1 border rounded hover:bg-gray-50 disabled:opacity-50" disabled>下一页</button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
