'use client';

import { motion } from 'framer-motion';
import { PlayCircle, CheckCircle, Lock } from 'lucide-react';

interface CourseDetailProps {
  onNavigate: (page: string) => void;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function CourseDetail({ onNavigate }: CourseDetailProps) {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="relative h-48 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl overflow-hidden flex items-center justify-center">
        <PlayCircle className="h-16 w-16 text-white opacity-80" />
        <div className="absolute bottom-4 left-4 text-white">
          <h2 className="text-xl font-bold">Python 编程基础</h2>
          <p className="text-xs opacity-90">第 3 章：循环与逻辑</p>
        </div>
      </div>

      {/* Progress */}
      <div className="bg-white rounded-xl p-4 border shadow-sm">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-bold text-slate-900">学习进度</span>
          <span className="text-xs text-blue-600 font-medium">75%</span>
        </div>
        <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
          <div className="h-full bg-blue-600 rounded-full" style={{ width: '75%' }}></div>
        </div>
      </div>

      {/* Chapters */}
      <div>
        <h3 className="font-bold text-slate-900 mb-3">课程大纲</h3>
        <div className="space-y-2">
          {[
            { title: '变量与数据类型', duration: '15:00', completed: true },
            { title: '条件判断语句', duration: '20:00', completed: true },
            { title: 'For 循环详解', duration: '25:00', completed: false, current: true },
            { title: 'While 循环应用', duration: '18:00', completed: false },
            { title: '综合练习：猜数字', duration: '30:00', completed: false, locked: true }
          ].map((chapter, i) => (
            <motion.div
              key={i}
              whileTap={{ scale: 0.98 }}
              className={`bg-white rounded-xl p-3 border flex items-center gap-3 cursor-pointer hover:shadow-md transition-all ${
                chapter.current ? 'border-blue-500 bg-blue-50' : ''
              }`}
            >
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                chapter.completed ? 'bg-green-100 text-green-600' : 
                chapter.locked ? 'bg-slate-100 text-slate-400' : 'bg-blue-100 text-blue-600'
              }`}>
                {chapter.completed ? <CheckCircle className="h-4 w-4" /> : 
                 chapter.locked ? <Lock className="h-4 w-4" /> : <PlayCircle className="h-4 w-4" />}
              </div>
              <div className="flex-1">
                <h4 className={`text-sm font-bold ${chapter.completed ? 'text-slate-500' : 'text-slate-900'}`}>
                  {chapter.title}
                </h4>
                <p className="text-[10px] text-slate-500">{chapter.duration}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* AI Assistant Entry */}
      <motion.button
        whileTap={{ scale: 0.98 }}
        className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2"
      >
        <span>🤖</span> 向 AI 助教提问
      </motion.button>
    </div>
  );
}
