'use client';

import { motion } from 'framer-motion';
import { Briefcase, DollarSign, Users, Clock, ChevronRight } from 'lucide-react';

interface CoopProject {
  id: string;
  title: string;
  company: string;
  reward: string;
  deadline: string;
  applicants: number;
  tags: string[];
}

export default function IndustryCoopPage() {
  const projects: CoopProject[] = [
    { 
      id: '1', 
      title: '智能仓储物流机器人视觉系统开发', 
      company: '华为技术', 
      reward: '¥50,000', 
      deadline: '2026-06-30', 
      applicants: 8,
      tags: ['AI视觉', '嵌入式']
    },
    { 
      id: '2', 
      title: '跨境电商数据分析与可视化平台', 
      company: '阿里巴巴', 
      reward: '¥35,000', 
      deadline: '2026-07-15', 
      applicants: 12,
      tags: ['大数据', '前端开发']
    },
    { 
      id: '3', 
      title: '工业物联网设备远程监控系统', 
      company: '西门子', 
      reward: '¥42,000', 
      deadline: '2026-08-01', 
      applicants: 5,
      tags: ['IoT', '云平台']
    },
  ];

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
            <Briefcase className="h-6 w-6 text-orange-600" />
            产学研合作与企业悬赏
          </h2>
          <p className="text-gray-500 mt-1">对接企业真实需求，实战提升专业技能</p>
        </div>
        <button className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors">
          发布项目需求
        </button>
      </div>

      {/* Project List */}
      <div className="grid grid-cols-1 gap-6">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            whileHover={{ scale: 1.01 }}
            className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-1 bg-orange-100 text-orange-700 text-xs rounded-full">{project.company}</span>
                  <span className="flex items-center gap-1 text-green-600 text-sm font-medium">
                    <DollarSign className="h-4 w-4" /> {project.reward}
                  </span>
                </div>
                <h3 className="font-bold text-gray-800 text-lg mb-2">{project.title}</h3>
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded">{tag}</span>
                  ))}
                </div>
                <div className="flex items-center gap-6 text-sm text-gray-500">
                  <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> 截止: {project.deadline}</span>
                  <span className="flex items-center gap-1"><Users className="h-4 w-4" /> {project.applicants} 组报名</span>
                </div>
              </div>
              <button className="flex items-center gap-1 text-orange-600 hover:text-orange-800 font-medium whitespace-nowrap">
                立即认领 <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
