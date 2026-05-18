'use client';

import { motion } from 'framer-motion';
import { AwardIcon, Users, School, FileText, ChevronRight } from 'lucide-react';

interface EvaluationCategory {
  id: string;
  title: string;
  type: '组织奖' | '个人奖';
  applicants: number;
  deadline: string;
  status: '申报中' | '评审中' | '已公示';
}

export default function AwardsEvaluationPage() {
  const categories: EvaluationCategory[] = [
    { id: '1', title: '区域 STEM 教育示范学校', type: '组织奖', applicants: 12, deadline: '2026-06-30', status: '申报中' },
    { id: '2', title: 'STEM 骨干教师评选', type: '个人奖', applicants: 45, deadline: '2026-07-15', status: '申报中' },
    { id: '3', title: '优秀 STEM 课程设计奖', type: '个人奖', applicants: 89, deadline: '2026-05-20', status: '评审中' },
    { id: '4', title: '科技创新优秀指导教师', type: '个人奖', applicants: 32, deadline: '2026-04-30', status: '已公示' },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case '申报中': return 'bg-blue-100 text-blue-700';
      case '评审中': return 'bg-purple-100 text-purple-700';
      case '已公示': return 'bg-green-100 text-green-700';
      default: return 'bg-gray-100 text-gray-600';
    }
  };

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
            <AwardIcon className="h-6 w-6 text-indigo-600" />
            评选表彰系统
          </h2>
          <p className="text-gray-500 mt-1">树立标杆，激励 STEM 教育创新与实践</p>
        </div>
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
          启动新一轮评选
        </button>
      </div>

      {/* Evaluation Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {categories.map((cat) => (
          <motion.div
            key={cat.id}
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all"
          >
            <div className="flex justify-between items-start mb-4">
              <span className={`px-2 py-1 text-xs rounded-full ${cat.type === '组织奖' ? 'bg-orange-100 text-orange-700' : 'bg-cyan-100 text-cyan-700'}`}>
                {cat.type}
              </span>
              <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(cat.status)}`}>
                {cat.status}
              </span>
            </div>
            <h3 className="font-bold text-gray-800 text-lg mb-4">{cat.title}</h3>
            
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                {cat.type === '组织奖' ? <School className="h-4 w-4" /> : <Users className="h-4 w-4" />}
                <span>当前申报数: <strong>{cat.applicants}</strong></span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <FileText className="h-4 w-4" />
                <span>截止日期: {cat.deadline}</span>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-50 flex justify-end">
              <button className="text-indigo-600 hover:text-indigo-800 text-sm font-medium flex items-center gap-1">
                查看详情 <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Recent Winners */}
      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-xl border border-indigo-100">
        <h3 className="font-bold text-gray-800 mb-4">近期获奖名单公示</h3>
        <div className="space-y-2">
          {[
            { name: '李明', award: 'STEM 骨干教师', school: '第一实验小学' },
            { name: '张伟团队', award: '优秀课程设计', school: '第二中学' },
            { name: '王芳', award: '科技创新指导', school: '第三高级中学' }
          ].map((winner, idx) => (
            <div key={idx} className="flex items-center justify-between bg-white p-3 rounded-lg shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 font-bold text-xs">
                  {idx + 1}
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-800">{winner.name}</p>
                  <p className="text-xs text-gray-500">{winner.school}</p>
                </div>
              </div>
              <span className="text-xs font-medium text-indigo-600 bg-indigo-50 px-2 py-1 rounded">{winner.award}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
