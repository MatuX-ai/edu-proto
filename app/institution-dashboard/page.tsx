'use client';

import { useRouter } from 'next/navigation';
import { Briefcase, School, GraduationCap, Landmark } from 'lucide-react';
import { motion } from 'framer-motion';

const institutionTypes = [
  {
    key: 'training',
    title: '培训机构',
    subtitle: 'STEM 教育培训管理',
    icon: Briefcase,
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200'
  },
  {
    key: 'k12',
    title: 'K12 学校',
    subtitle: '智慧校园管理系统',
    icon: School,
    color: 'from-green-500 to-green-600',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-200'
  },
  {
    key: 'vocational',
    title: '职业学校',
    subtitle: '职业教育管理平台',
    icon: GraduationCap,
    color: 'from-purple-500 to-purple-600',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-200'
  },
  {
    key: 'education-bureau',
    title: '教育局',
    subtitle: '区域教育监管中心',
    icon: Landmark,
    color: 'from-orange-500 to-orange-600',
    bgColor: 'bg-orange-50',
    borderColor: 'border-orange-200'
  }
];

export default function InstitutionDashboardPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <div className="bg-white border-b border-slate-200 px-8 py-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
            MatuX 机构管理后台
          </h1>
          <p className="text-slate-500 mt-2">选择您的机构类型以进入管理系统</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {institutionTypes.map((type, index) => {
            const Icon = type.icon;
            return (
              <motion.div
                key={type.key}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => router.push(`/institution-dashboard/${type.key}/dashboard`)}
                className={`
                  ${type.bgColor} ${type.borderColor} border-2 rounded-xl p-8 
                  cursor-pointer hover:shadow-xl transition-all duration-300
                  hover:scale-105 group
                `}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className={`
                    w-16 h-16 rounded-xl bg-gradient-to-br ${type.color}
                    flex items-center justify-center shadow-lg
                    group-hover:shadow-xl transition-shadow
                  `}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="text-slate-400 group-hover:text-slate-600"
                  >
                    →
                  </motion.div>
                </div>
                
                <h2 className="text-2xl font-bold text-slate-800 mb-2">
                  {type.title}
                </h2>
                <p className="text-slate-600">
                  {type.subtitle}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Footer Info */}
        <div className="mt-12 text-center text-slate-500 text-sm">
          <p>MatuX STEM 教育平台 © 2026</p>
          <p className="mt-2">支持培训机构、K12学校、职业学校、教育局四种机构类型</p>
        </div>
      </div>
    </div>
  );
}
