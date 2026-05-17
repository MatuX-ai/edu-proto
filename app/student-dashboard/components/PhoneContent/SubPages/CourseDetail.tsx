'use client';

import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

interface CourseDetailProps {
  onNavigate: (page: string) => void;
}

export function CourseDetail({ onNavigate }: CourseDetailProps) {
  return (
    <div className="space-y-4">
      <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 text-white">
        <div className="text-4xl mb-3">🐍</div>
        <h4 className="text-xl font-bold mb-2">Python 编程基础</h4>
        <p className="text-sm text-blue-100">掌握 Python 核心语法和编程思维</p>
      </div>
      <div className="bg-white rounded-xl p-4 border">
        <h5 className="font-bold mb-3">课程进度</h5>
        <div className="mb-2">
          <div className="flex justify-between text-xs mb-1">
            <span>总体进度</span>
            <span className="font-semibold text-blue-600">75%</span>
          </div>
          <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
            <div className="h-full bg-blue-600 rounded-full" style={{ width: '75%' }}></div>
          </div>
        </div>
        <p className="text-xs text-slate-500">已完成 15/20 课时</p>
      </div>
      <div className="space-y-2">
        <h5 className="font-bold text-sm">课程章节</h5>
        {[
          { title: '变量与数据类型', duration: '15分钟', completed: true },
          { title: '条件判断', duration: '20分钟', completed: true },
          { title: '循环结构', duration: '25分钟', completed: true },
          { title: '函数定义', duration: '30分钟', completed: false, current: true },
          { title: '列表与字典', duration: '25分钟', completed: false }
        ].map((chapter, i) => (
          <motion.div
            key={i}
            whileTap={{ scale: 0.98 }}
            onClick={() => chapter.current && onNavigate('代码编辑器')}
            className={`bg-white rounded-xl p-3 border flex items-center justify-between ${chapter.current ? 'border-blue-500 bg-blue-50 cursor-pointer' : ''}`}
          >
            <div className="flex items-center gap-3">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs ${chapter.completed ? 'bg-green-100 text-green-600' : chapter.current ? 'bg-blue-100 text-blue-600' : 'bg-slate-100 text-slate-400'}`}>
                {chapter.completed ? '✓' : i + 1}
              </div>
              <div>
                <p className="text-xs font-medium">{chapter.title}</p>
                <p className="text-[10px] text-slate-500">{chapter.duration}</p>
              </div>
            </div>
            {chapter.current && <Play className="h-4 w-4 text-blue-600" />}
          </motion.div>
        ))}
      </div>
      <button className="w-full bg-blue-600 text-white py-3 rounded-xl font-bold text-sm hover:bg-blue-700 transition-colors">
        继续学习
      </button>
    </div>
  );
}
