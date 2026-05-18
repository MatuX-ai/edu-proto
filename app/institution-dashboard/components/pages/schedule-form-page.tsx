'use client';

import { motion } from 'framer-motion';
import { Calendar, Clock, Users, BookOpen, Save } from 'lucide-react';

export default function ScheduleFormPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-4xl mx-auto"
    >
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800">智能排课系统</h2>
        <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
          <Save className="h-4 w-4" />
          <span>保存排课</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Form Section */}
        <div className="md:col-span-2 bg-white p-6 rounded-xl border border-gray-100 shadow-sm space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">课程名称</label>
              <div className="relative">
                <BookOpen className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input type="text" className="w-full pl-9 pr-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-100 outline-none" placeholder="例如：Python 进阶班" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">授课教师</label>
              <select className="w-full px-3 py-2 border rounded-lg outline-none">
                <option>张老师</option>
                <option>李老师</option>
                <option>王老师</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">上课日期</label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input type="date" className="w-full pl-9 pr-3 py-2 border rounded-lg outline-none" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">时间段</label>
              <div className="relative">
                <Clock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <select className="w-full pl-9 pr-3 py-2 border rounded-lg outline-none">
                  <option>09:00 - 10:30</option>
                  <option>10:45 - 12:15</option>
                  <option>14:00 - 15:30</option>
                </select>
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">教室选择</label>
            <div className="grid grid-cols-3 gap-3">
              {['A-101 (多媒体)', 'B-205 (实验室)', 'C-301 (画室)'].map((room) => (
                <button key={room} className="px-3 py-2 border rounded-lg text-sm hover:border-blue-400 hover:bg-blue-50 transition-all">
                  {room}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">备注说明</label>
            <textarea rows={3} className="w-full px-3 py-2 border rounded-lg outline-none resize-none" placeholder="请输入排课备注..." />
          </div>
        </div>

        {/* Sidebar Info */}
        <div className="space-y-6">
          <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
            <h3 className="font-semibold text-blue-800 mb-2 flex items-center gap-2">
              <Users className="h-4 w-4" />
              冲突检测
            </h3>
            <p className="text-sm text-blue-600">当前时间段教室与教师均无冲突，可以安排。</p>
          </div>
          
          <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
            <h3 className="font-semibold text-gray-800 mb-3">本周已排课时</h3>
            <div className="space-y-2">
              {[1, 2, 3].map((i) => (
                <div key={i} className="text-xs p-2 bg-gray-50 rounded border-l-2 border-blue-400">
                  <div className="font-medium">周六 09:00</div>
                  <div className="text-gray-500">Python 基础班 - A-101</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
