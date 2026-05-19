'use client';

import { motion } from 'framer-motion';
import { Calendar, Clock, Users, BookOpen, Save, AlertCircle, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';
import type { InstitutionConfig } from '../../config/institution-config';

interface ScheduleFormPageProps {
  config: InstitutionConfig;
}

export default function ScheduleFormPage({ config }: ScheduleFormPageProps) {
  const scheduleData = config.mockData?.schedule?.rows || [];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">智能排课系统</h2>
          <p className="text-sm text-gray-500 mt-1">可视化周课表管理，自动检测教室与教师冲突</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 bg-white border border-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors shadow-sm">
            <Calendar className="h-4 w-4" />
            <span>本周</span>
          </button>
          <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors shadow-md shadow-blue-200">
            <Save className="h-4 w-4" />
            <span>保存排课</span>
          </button>
        </div>
      </div>

      {/* Stats & Conflict Detection */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-xs text-gray-500">本周总课时</p>
            <p className="text-xl font-bold text-gray-900 mt-1">42 节</p>
          </div>
          <div className="p-2 rounded-lg bg-blue-50">
            <Clock className="h-5 w-5 text-blue-600" />
          </div>
        </div>
        <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-xs text-gray-500">教室利用率</p>
            <p className="text-xl font-bold text-gray-900 mt-1">85%</p>
          </div>
          <div className="p-2 rounded-lg bg-green-50">
            <CheckCircle2 className="h-5 w-5 text-green-600" />
          </div>
        </div>
        <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-xs text-gray-500">冲突预警</p>
            <p className="text-xl font-bold text-orange-600 mt-1">0 个</p>
          </div>
          <div className="p-2 rounded-lg bg-orange-50">
            <AlertCircle className="h-5 w-5 text-orange-600" />
          </div>
        </div>
      </div>

      {/* Weekly Schedule Grid (Visual Mockup) */}
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="p-4 border-b border-gray-100 flex items-center justify-between">
          <h3 className="font-semibold text-gray-900">周课表视图</h3>
          <div className="flex gap-2">
            <button className="p-1 hover:bg-gray-100 rounded"><ChevronLeft className="h-4 w-4 text-gray-500" /></button>
            <button className="p-1 hover:bg-gray-100 rounded"><ChevronRight className="h-4 w-4 text-gray-500" /></button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[800px]">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-xs font-medium text-gray-500 text-left w-20">时间</th>
                {['周一', '周二', '周三', '周四', '周五', '周六', '周日'].map(day => (
                  <th key={day} className="px-4 py-3 text-xs font-medium text-gray-500 text-center">{day}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {['09:00', '10:30', '14:00', '15:30', '17:00'].map((time, i) => (
                <tr key={time} className="hover:bg-gray-50/30">
                  <td className="px-4 py-3 text-xs text-gray-500 font-mono text-center border-r border-gray-100">{time}</td>
                  {[...Array(7)].map((_, j) => (
                    <td key={j} className="p-1 h-16 align-top border-r border-gray-50 relative group">
                      {/* Simulated Class Block */}
                      {i === 0 && j === 5 && (
                        <div className="absolute inset-1 bg-blue-100 border-l-4 border-blue-500 rounded p-1.5 cursor-pointer hover:shadow-md transition-shadow">
                          <div className="text-[10px] font-bold text-blue-900 truncate">Python基础班</div>
                          <div className="text-[9px] text-blue-600 truncate">张老师 | A-101</div>
                        </div>
                      )}
                      {i === 2 && j === 2 && (
                        <div className="absolute inset-1 bg-purple-100 border-l-4 border-purple-500 rounded p-1.5 cursor-pointer hover:shadow-md transition-shadow">
                          <div className="text-[10px] font-bold text-purple-900 truncate">创意美术</div>
                          <div className="text-[9px] text-purple-600 truncate">李老师 | B-205</div>
                        </div>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Detailed List View */}
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="p-4 border-b border-gray-100">
          <h3 className="font-semibold text-gray-900">详细课程列表</h3>
        </div>
        <table className="w-full text-left">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase">课程名称</th>
              <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase">授课教师</th>
              <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase">上课时间</th>
              <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase">教室</th>
              <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase">报名情况</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {scheduleData.map((row, idx) => (
              <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                <td className="px-6 py-4 text-sm font-medium text-gray-900">{row[0]}</td>
                <td className="px-6 py-4 text-sm text-gray-600">{row[1]}</td>
                <td className="px-6 py-4 text-sm text-gray-600">{row[2]}</td>
                <td className="px-6 py-4 text-sm text-gray-600">{row[3]}</td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <div className="w-16 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-blue-500 rounded-full" 
                        style={{ width: `${(parseInt(row[4].split('/')[0]) / parseInt(row[4].split('/')[1])) * 100}%` }}
                      ></div>
                    </div>
                    <span className="text-xs text-gray-500">{row[4]}</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}
