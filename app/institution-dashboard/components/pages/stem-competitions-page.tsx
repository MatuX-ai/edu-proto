'use client';

import { motion } from 'framer-motion';
import { Trophy, Calendar, Users, MapPin, ChevronRight } from 'lucide-react';

interface Competition {
  id: string;
  name: string;
  level: '市级' | '省级' | '国家级' | '区级';
  startDate: string;
  participants: number;
  status: '报名中' | '进行中' | '已结束';
}

export default function StemCompetitionsPage() {
  const competitions: Competition[] = [
    { id: '1', name: '2026 区域青少年科技创新大赛', level: '市级', startDate: '2026-05-20', participants: 128, status: '报名中' },
    { id: '2', name: '中小学生机器人奥林匹克竞赛', level: '省级', startDate: '2026-06-15', participants: 85, status: '报名中' },
    { id: '3', name: '校园 STEM 创客马拉松', level: '区级', startDate: '2026-04-10', participants: 240, status: '进行中' },
    { id: '4', name: '人工智能应用挑战赛', level: '国家级', startDate: '2026-07-01', participants: 45, status: '已结束' },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case '报名中': return 'bg-green-100 text-green-700';
      case '进行中': return 'bg-blue-100 text-blue-700';
      case '已结束': return 'bg-gray-100 text-gray-600';
      default: return 'bg-gray-100 text-gray-600';
    }
  };

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
            <Trophy className="h-6 w-6 text-yellow-500" />
            区域 STEM 赛事管理中心
          </h2>
          <p className="text-gray-500 mt-1">统筹规划，打造高水平 STEM 竞技舞台</p>
        </div>
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
          发布新赛事
        </button>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-center gap-4">
          <div className="p-3 bg-yellow-50 rounded-full"><Trophy className="h-6 w-6 text-yellow-500" /></div>
          <div><p className="text-sm text-gray-500">年度赛事总数</p><p className="text-xl font-bold text-gray-800">5 场</p></div>
        </div>
        <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-center gap-4">
          <div className="p-3 bg-blue-50 rounded-full"><Users className="h-6 w-6 text-blue-500" /></div>
          <div><p className="text-sm text-gray-500">累计参赛学生</p><p className="text-xl font-bold text-gray-800">1,240 人</p></div>
        </div>
        <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-center gap-4">
          <div className="p-3 bg-green-50 rounded-full"><MapPin className="h-6 w-6 text-green-500" /></div>
          <div><p className="text-sm text-gray-500">覆盖学校</p><p className="text-xl font-bold text-gray-800">86 所</p></div>
        </div>
      </div>

      {/* Competition List */}
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-gray-50 text-gray-600 text-sm uppercase">
              <tr>
                <th className="px-6 py-4">赛事名称</th>
                <th className="px-6 py-4">级别</th>
                <th className="px-6 py-4">开始时间</th>
                <th className="px-6 py-4">报名人数</th>
                <th className="px-6 py-4">状态</th>
                <th className="px-6 py-4">操作</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {competitions.map((comp) => (
                <tr key={comp.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 font-medium text-gray-800">{comp.name}</td>
                  <td className="px-6 py-4 text-sm text-gray-500">{comp.level}</td>
                  <td className="px-6 py-4 text-sm text-gray-500 flex items-center gap-1"><Calendar className="h-4 w-4" /> {comp.startDate}</td>
                  <td className="px-6 py-4 text-sm text-gray-500">{comp.participants}</td>
                  <td className="px-6 py-4"><span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(comp.status)}`}>{comp.status}</span></td>
                  <td className="px-6 py-4">
                    <button className="text-indigo-600 hover:text-indigo-900 text-sm font-medium flex items-center gap-1">
                      管理详情 <ChevronRight className="h-4 w-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </motion.div>
  );
}
