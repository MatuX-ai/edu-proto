'use client';

import { motion } from 'framer-motion';
import { Cpu, Award, BookOpen, CheckCircle, ChevronRight } from 'lucide-react';

interface StemCourse {
  id: string;
  name: string;
  category: string;
  credits: number;
  enrolled: number;
  status: '进行中' | '已完成' | '待开课';
}

export default function StemAuxiliaryPage() {
  const courses: StemCourse[] = [
    { id: '1', name: 'Python 数据分析基础', category: '数据科学', credits: 2, enrolled: 45, status: '进行中' },
    { id: '2', name: 'Arduino 智能硬件开发', category: '物联网', credits: 3, enrolled: 38, status: '进行中' },
    { id: '3', name: '3D 建模与打印技术', category: '工程设计', credits: 2, enrolled: 29, status: '待开课' },
    { id: '4', name: 'AI 视觉识别入门', category: '人工智能', credits: 3, enrolled: 52, status: '已完成' },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case '进行中': return 'text-blue-600 bg-blue-50';
      case '已完成': return 'text-green-600 bg-green-50';
      case '待开课': return 'text-orange-600 bg-orange-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
            <Cpu className="h-6 w-6 text-blue-600" />
            STEM 辅修中心
          </h2>
          <p className="text-gray-500 mt-1">跨学科技能提升，获取行业认可微证书</p>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
          查看我的技能钱包
        </button>
      </div>

      {/* Course Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <motion.div
            key={course.id}
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all"
          >
            <div className="flex justify-between items-start mb-4">
              <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">{course.category}</span>
              <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(course.status)}`}>
                {course.status}
              </span>
            </div>
            <h3 className="font-bold text-gray-800 text-lg mb-2">{course.name}</h3>
            <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
              <span className="flex items-center gap-1"><BookOpen className="h-4 w-4" /> {course.credits} 学分</span>
              <span className="flex items-center gap-1"><Award className="h-4 w-4" /> 微证书</span>
            </div>
            <div className="flex items-center justify-between pt-4 border-t border-gray-50">
              <span className="text-sm text-gray-500">{course.enrolled} 人已报名</span>
              <button className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center gap-1">
                立即报名 <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Micro-credentials Section */}
      <div className="bg-gradient-to-r from-indigo-50 to-blue-50 p-6 rounded-xl border border-indigo-100">
        <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
          <CheckCircle className="h-5 w-5 text-indigo-600" />
          已获得的微证书
        </h3>
        <div className="flex flex-wrap gap-4">
          {['Python 编程基础', '电路设计初级', '3D 打印操作员'].map((cert, idx) => (
            <div key={idx} className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm border border-indigo-50">
              <Award className="h-5 w-5 text-yellow-500" />
              <span className="text-sm font-medium text-gray-700">{cert}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
