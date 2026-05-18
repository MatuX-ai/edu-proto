'use client';

import { motion } from 'framer-motion';
import { Award, ShieldCheck, TrendingUp } from 'lucide-react';

export default function SkillWalletPage() {
  // 模拟技能雷达图数据点 (5维)
  const skills = [
    { name: '编程开发', value: 85 },
    { name: '机械工程', value: 70 },
    { name: '数据分析', value: 60 },
    { name: '团队协作', value: 90 },
    { name: '创新思维', value: 75 },
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
          <Award className="h-6 w-6 text-yellow-500" />
          技能钱包与微证书
        </h2>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Radar Chart Area */}
        <div className="lg:col-span-1 bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex flex-col items-center justify-center min-h-[300px]">
          <h3 className="font-semibold text-gray-700 mb-4 w-full text-left">能力素质模型</h3>
          <div className="relative w-48 h-48">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              {/* Background Pentagon */}
              <polygon points="50,5 95,35 80,90 20,90 5,35" fill="#f3f4f6" stroke="#e5e7eb" strokeWidth="1" />
              {/* Data Polygon */}
              <motion.polygon 
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5 }}
                points="50,15 85,40 70,80 30,80 15,40" 
                fill="rgba(59, 130, 246, 0.2)" 
                stroke="#3b82f6" 
                strokeWidth="2" 
              />
            </svg>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-2 w-full text-xs text-gray-500">
            {skills.map((s, i) => (
              <div key={i} className="flex items-center gap-1">
                <div className="w-2 h-2 bg-blue-500 rounded-full" />
                {s.name}: {s.value}
              </div>
            ))}
          </div>
        </div>

        {/* Certificates List */}
        <div className="lg:col-span-2 space-y-4">
          <h3 className="font-semibold text-gray-700">已获认证</h3>
          {[
            { name: 'Python 程序设计 (二级)', org: '全国计算机等级考试', date: '2023-12' },
            { name: '物联网嵌入式开发', org: '华为 HCIA-IoT', date: '2024-01' },
            { name: 'STEM 教育指导师', org: '中国电子学会', date: '2024-03' },
          ].map((cert, i) => (
            <motion.div 
              key={i}
              whileHover={{ scale: 1.01 }}
              className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-center justify-between"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-yellow-50 rounded-full flex items-center justify-center">
                  <ShieldCheck className="h-6 w-6 text-yellow-600" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">{cert.name}</h4>
                  <p className="text-xs text-gray-500">{cert.org} · {cert.date}</p>
                </div>
              </div>
              <button className="text-blue-600 text-sm font-medium hover:underline">查看原件</button>
            </motion.div>
          ))}

          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-xl border border-blue-100 mt-6">
            <div className="flex items-start gap-3">
              <TrendingUp className="h-5 w-5 text-blue-600 mt-0.5" />
              <div>
                <h4 className="font-medium text-blue-900">AI 学习建议</h4>
                <p className="text-sm text-blue-700/80 mt-1">根据您的技能模型，建议加强“数据分析”模块的学习，以匹配当前高薪的智能制造岗位需求。</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
