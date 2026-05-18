'use client';

import { motion } from 'framer-motion';
import { BookOpen, Calendar, Clock, Users, Plus, Search } from 'lucide-react';

export default function SecondClassroomPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">第二课堂管理</h2>
          <p className="text-sm text-gray-500 mt-1">STEM 课外活动与课程安排</p>
        </div>
        <button className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
          <Plus className="h-4 w-4" />
          <span>新增课程</span>
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { label: '活跃课程', value: '24', icon: BookOpen, color: 'green' },
          { label: '本周课时', value: '48', icon: Clock, color: 'blue' },
          { label: '参与学生', value: '356', icon: Users, color: 'purple' },
          { label: '待排课程', value: '8', icon: Calendar, color: 'orange' },
        ].map((stat, i) => {
          const IconComponent = stat.icon;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm"
            >
              <div className={`p-3 rounded-lg bg-${stat.color}-50 w-fit mb-3`}>
                <IconComponent className={`h-6 w-6 text-${stat.color}-600`} />
              </div>
              <div className="text-2xl font-bold text-gray-800">{stat.value}</div>
              <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
            </motion.div>
          );
        })}
      </div>

      {/* Course Library Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden"
      >
        <div className="p-6 border-b border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-gray-800">课程库</h3>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="搜索课程..."
                className="pl-10 pr-4 py-2 bg-gray-50 rounded-lg border-none focus:ring-2 focus:ring-green-100 outline-none text-sm"
              />
            </div>
          </div>
        </div>
        <table className="w-full text-left">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase">课程名称</th>
              <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase">类型</th>
              <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase">课时</th>
              <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase">适合年级</th>
              <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase">状态</th>
              <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase">操作</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {[
              { name: 'Arduino 基础入门', type: '硬件编程', hours: '12', grade: '初一-初二', status: '进行中' },
              { name: 'Python 创意编程', type: '软件编程', hours: '16', grade: '初二-初三', status: '进行中' },
              { name: '3D 打印设计', type: '创客制作', hours: '8', grade: '初一-初三', status: '已结课' },
              { name: '机器人竞赛培训', type: '竞赛辅导', hours: '20', grade: '初二-高三', status: '进行中' },
              { name: 'AI 视觉识别', type: '人工智能', hours: '10', grade: '高一-高二', status: '待开课' },
            ].map((course, i) => (
              <tr key={i} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 text-sm font-medium text-gray-800">{course.name}</td>
                <td className="px-6 py-4">
                  <span className="px-2 py-1 bg-green-50 text-green-600 rounded-full text-xs">
                    {course.type}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">{course.hours} 课时</td>
                <td className="px-6 py-4 text-sm text-gray-600">{course.grade}</td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    course.status === '进行中' ? 'bg-green-50 text-green-600' :
                    course.status === '已结课' ? 'bg-gray-50 text-gray-600' :
                    'bg-yellow-50 text-yellow-600'
                  }`}>
                    {course.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <button className="text-green-600 hover:text-green-700 text-sm font-medium mr-3">
                    编辑
                  </button>
                  <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                    排课
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </motion.div>

      {/* Schedule Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-white rounded-xl border border-gray-100 shadow-sm p-6"
      >
        <h3 className="text-lg font-bold text-gray-800 mb-4">本周课程安排</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { day: '周一', time: '15:30-17:00', course: 'Arduino 基础', room: 'STEM-101', teacher: '李老师' },
            { day: '周二', time: '15:30-17:00', course: 'Python 编程', room: 'STEM-102', teacher: '王老师' },
            { day: '周三', time: '15:30-17:00', course: '3D 打印设计', room: '创客空间', teacher: '张老师' },
            { day: '周四', time: '15:30-17:00', course: '机器人培训', room: 'STEM-103', teacher: '赵老师' },
            { day: '周五', time: '15:30-17:00', course: 'AI 视觉识别', room: 'STEM-101', teacher: '孙老师' },
          ].map((schedule, i) => (
            <div key={i} className="border border-gray-200 rounded-lg p-4 hover:border-green-300 hover:shadow-md transition-all">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-bold text-green-600">{schedule.day}</span>
                <span className="text-xs text-gray-500 flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {schedule.time}
                </span>
              </div>
              <div className="font-medium text-gray-800 mb-1">{schedule.course}</div>
              <div className="text-xs text-gray-500">{schedule.room} · {schedule.teacher}</div>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
