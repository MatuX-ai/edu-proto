'use client';

import { motion } from 'framer-motion';
import { Monitor, Box, Package, BookOpen, Search, Filter, Plus } from 'lucide-react';

export default function ResourceEquipmentPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">资源设备管理</h2>
          <p className="text-sm text-gray-500 mt-1">管理STEM实验室设备、耗材和数字教学资源</p>
        </div>
        <button className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
          <Plus className="h-4 w-4" />
          <span>添加资源</span>
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { label: '硬件设备', value: '125', icon: Monitor, color: 'green' },
          { label: '耗材库存', value: '48', icon: Package, color: 'blue' },
          { label: '数字资源', value: '256', icon: BookOpen, color: 'purple' },
          { label: '实验室', value: '15', icon: Box, color: 'orange' },
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

      {/* Equipment and Resources Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden"
      >
        <div className="p-6 border-b border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-gray-800">资源设备清单</h3>
            <div className="flex items-center gap-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="搜索资源..."
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
              <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase">资源名称</th>
              <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase">类型</th>
              <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase">数量</th>
              <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase">可用状态</th>
              <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase">存放位置</th>
              <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase">操作</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {[
              { name: 'Arduino Uno开发板', type: '硬件设备', quantity: '25', available: '20可用', location: 'STEM-101' },
              { name: '树莓派4B', type: '硬件设备', quantity: '15', available: '12可用', location: 'STEM-102' },
              { name: '3D打印机耗材', type: '耗材', quantity: '50卷', available: '充足', location: '创客空间' },
              { name: 'Python编程教程', type: '数字资源', quantity: '不限', available: '在线', location: '云平台' },
              { name: '机器人套件', type: '硬件设备', quantity: '10套', available: '8可用', location: 'STEM-103' },
              { name: '传感器模块套装', type: '硬件设备', quantity: '30套', available: '25可用', location: 'STEM-101' },
              { name: '激光切割机', type: '大型设备', quantity: '2台', available: '1可用', location: '创客空间' },
            ].map((resource, i) => (
              <tr key={i} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 text-sm font-medium text-gray-800">{resource.name}</td>
                <td className="px-6 py-4">
                  <span className="px-2 py-1 bg-green-50 text-green-600 rounded-full text-xs">
                    {resource.type}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">{resource.quantity}</td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    resource.available === '充足' || resource.available === '在线' ? 'bg-green-50 text-green-600' :
                    resource.available.includes('可用') ? 'bg-blue-50 text-blue-600' :
                    'bg-yellow-50 text-yellow-600'
                  }`}>
                    {resource.available}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">{resource.location}</td>
                <td className="px-6 py-4">
                  <button className="text-green-600 hover:text-green-700 text-sm font-medium mr-3">
                    借用
                  </button>
                  <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                    详情
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </motion.div>

      {/* Lab Reservation Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-white rounded-xl border border-gray-100 shadow-sm p-6"
      >
        <h3 className="text-lg font-bold text-gray-800 mb-4">实验室预约情况</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { name: 'STEM-101', status: '可用', next: '周一 15:30' },
            { name: 'STEM-102', status: '使用中', next: '周二 15:30' },
            { name: 'STEM-103', status: '可用', next: '周三 15:30' },
            { name: '创客空间', status: '维护中', next: '周五 09:00' },
            { name: 'AI实验室', status: '可用', next: '周四 15:30' },
          ].map((lab, i) => (
            <div key={i} className="border border-gray-200 rounded-lg p-4 hover:border-green-300 hover:shadow-md transition-all">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-bold text-gray-800">{lab.name}</span>
                <span className={`px-2 py-1 rounded-full text-xs ${
                  lab.status === '可用' ? 'bg-green-50 text-green-600' :
                  lab.status === '使用中' ? 'bg-blue-50 text-blue-600' :
                  'bg-yellow-50 text-yellow-600'
                }`}>
                  {lab.status}
                </span>
              </div>
              <div className="text-xs text-gray-500">下次可用: {lab.next}</div>
              <button className="mt-3 w-full py-2 bg-green-50 text-green-600 rounded-lg text-sm hover:bg-green-100 transition-colors">
                预约
              </button>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
