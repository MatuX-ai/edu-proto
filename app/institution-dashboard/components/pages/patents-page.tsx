'use client';

import { motion } from 'framer-motion';
import { FileText, Plus, Search, Award, Calendar, Users } from 'lucide-react';

export default function PatentsPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">专利管理中心</h2>
          <p className="text-sm text-gray-500 mt-1">知识产权申报与管理</p>
        </div>
        <button className="flex items-center gap-2 bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors">
          <Plus className="h-4 w-4" />
          <span>新增专利</span>
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { label: '专利申请中', value: '28', icon: FileText, color: 'orange' },
          { label: '已授权专利', value: '45', icon: Award, color: 'green' },
          { label: '本月新增', value: '6', icon: Calendar, color: 'blue' },
          { label: '参与教师', value: '32', icon: Users, color: 'purple' },
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

      {/* Patent Application Form Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-white rounded-xl border border-gray-100 shadow-sm p-6"
      >
        <h3 className="text-lg font-bold text-gray-800 mb-6">快速申报专利</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              专利名称 <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="请输入专利名称"
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-100 focus:border-orange-400 outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              专利类型 <span className="text-red-500">*</span>
            </label>
            <select className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-100 focus:border-orange-400 outline-none">
              <option>发明专利</option>
              <option>实用新型</option>
              <option>外观设计</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              申请人/团队
            </label>
            <input
              type="text"
              placeholder="请输入申请人姓名或团队名称"
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-100 focus:border-orange-400 outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              所属领域
            </label>
            <select className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-100 focus:border-orange-400 outline-none">
              <option>人工智能</option>
              <option>物联网</option>
              <option>智能制造</option>
              <option>新能源</option>
              <option>其他</option>
            </select>
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              专利摘要
            </label>
            <textarea
              rows={4}
              placeholder="请简要描述专利的核心创新点..."
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-100 focus:border-orange-400 outline-none resize-none"
            />
          </div>
        </div>
        <div className="mt-6 flex justify-end gap-3">
          <button className="px-6 py-2 border border-gray-200 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
            保存草稿
          </button>
          <button className="px-6 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors">
            提交申请
          </button>
        </div>
      </motion.div>

      {/* Patent List */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden"
      >
        <div className="p-6 border-b border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-gray-800">专利列表</h3>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="搜索专利..."
                className="pl-10 pr-4 py-2 bg-gray-50 rounded-lg border-none focus:ring-2 focus:ring-orange-100 outline-none text-sm"
              />
            </div>
          </div>
        </div>
        <table className="w-full text-left">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase">专利名称</th>
              <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase">类型</th>
              <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase">申请人</th>
              <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase">申请日期</th>
              <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase">状态</th>
              <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase">操作</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {[
              { name: '基于AI的智能教学系统', type: '发明专利', applicant: '张老师团队', date: '2026-05-10', status: '审核中' },
              { name: '物联网环境监测装置', type: '实用新型', applicant: '李老师', date: '2026-04-28', status: '已授权' },
              { name: '虚拟现实实训平台', type: '发明专利', applicant: '王老师团队', date: '2026-04-15', status: '审核中' },
              { name: '智能机器人控制系统', type: '发明专利', applicant: '赵老师', date: '2026-03-20', status: '已授权' },
              { name: '3D打印优化算法', type: '发明专利', applicant: '孙老师团队', date: '2026-03-05', status: '驳回' },
            ].map((patent, i) => (
              <tr key={i} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 text-sm font-medium text-gray-800">{patent.name}</td>
                <td className="px-6 py-4">
                  <span className="px-2 py-1 bg-orange-50 text-orange-600 rounded-full text-xs">
                    {patent.type}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">{patent.applicant}</td>
                <td className="px-6 py-4 text-sm text-gray-600">{patent.date}</td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    patent.status === '已授权' ? 'bg-green-50 text-green-600' :
                    patent.status === '审核中' ? 'bg-blue-50 text-blue-600' :
                    'bg-red-50 text-red-600'
                  }`}>
                    {patent.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <button className="text-orange-600 hover:text-orange-700 text-sm font-medium mr-3">
                    查看
                  </button>
                  <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                    编辑
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
