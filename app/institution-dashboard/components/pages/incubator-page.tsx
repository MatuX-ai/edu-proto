'use client';

import { motion } from 'framer-motion';
import { Lightbulb, Users, Target, Rocket, ChevronRight } from 'lucide-react';

interface IncubatorProject {
  id: string;
  name: string;
  team: string;
  stage: '创意阶段' | '原型开发' | '市场验证' | '正式成立';
  progress: number;
  mentor: string;
}

export default function IncubatorPage() {
  const projects: IncubatorProject[] = [
    { id: '1', name: '校园二手书循环平台', team: '创梦小队', stage: '原型开发', progress: 45, mentor: '张教授' },
    { id: '2', name: '智能语音助老机器人', team: '智护科技', stage: '市场验证', progress: 70, mentor: '李博士' },
    { id: '3', name: 'VR 红色文化教育基地', team: '红途视界', stage: '创意阶段', progress: 15, mentor: '王老师' },
    { id: '4', name: '基于区块链的学历认证系统', team: '链信未来', stage: '正式成立', progress: 95, mentor: '赵专家' },
  ];

  const getStageColor = (stage: string) => {
    switch (stage) {
      case '创意阶段': return 'bg-gray-100 text-gray-600';
      case '原型开发': return 'bg-blue-100 text-blue-600';
      case '市场验证': return 'bg-purple-100 text-purple-600';
      case '正式成立': return 'bg-green-100 text-green-600';
      default: return 'bg-gray-100 text-gray-600';
    }
  };

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
            <Lightbulb className="h-6 w-6 text-yellow-500" />
            创业孵化器管理
          </h2>
          <p className="text-gray-500 mt-1">从创意到落地，全方位支持学生创新创业</p>
        </div>
        <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition-colors">
          申请入驻孵化
        </button>
      </div>

      {/* Incubation Progress */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="font-bold text-gray-800 text-lg">{project.name}</h3>
                <p className="text-sm text-gray-500 flex items-center gap-1 mt-1">
                  <Users className="h-4 w-4" /> {project.team}
                </p>
              </div>
              <span className={`px-2 py-1 text-xs rounded-full ${getStageColor(project.stage)}`}>
                {project.stage}
              </span>
            </div>

            <div className="mb-4">
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-500">孵化进度</span>
                <span className="font-medium text-gray-700">{project.progress}%</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2">
                <div 
                  className="bg-yellow-500 h-2 rounded-full transition-all duration-500" 
                  style={{ width: `${project.progress}%` }}
                ></div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-gray-50">
              <span className="text-sm text-gray-500 flex items-center gap-1">
                <Target className="h-4 w-4" /> 导师: {project.mentor}
              </span>
              <button className="text-yellow-600 hover:text-yellow-800 text-sm font-medium flex items-center gap-1">
                项目管理 <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Resources Section */}
      <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-xl border border-yellow-100">
        <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
          <Rocket className="h-5 w-5 text-orange-500" />
          孵化资源支持
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: '办公场地', desc: '免费工位申请' },
            { label: '启动资金', desc: '最高5万元' },
            { label: '法律财税', desc: '专业顾问咨询' },
            { label: '路演机会', desc: '月度创投对接' }
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-3 rounded-lg text-center shadow-sm">
              <p className="font-medium text-gray-800 text-sm">{item.label}</p>
              <p className="text-xs text-gray-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
