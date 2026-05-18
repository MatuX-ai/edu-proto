'use client';

import { motion } from 'framer-motion';
import { Search, Plus, Filter, Calendar, Clock, Users, BookOpen, MapPin } from 'lucide-react';
import { useState } from 'react';

interface Course {
  id: string;
  name: string;
  teacher: string;
  time: string;
  classroom: string;
  status: '正常' | '调课' | '停课' | '考试';
  students: number;
  grade: string;
}

export default function AcademicManagementPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterGrade, setFilterGrade] = useState<string>('全部');

  // 模拟课程数据
  const courses: Course[] = [
    { id: '1', name: '高一数学', teacher: '王老师', time: '周一 08:00-09:40', classroom: 'A-101', status: '正常', students: 45, grade: '高一' },
    { id: '2', name: '高二物理', teacher: '李老师', time: '周二 10:00-11:40', classroom: 'B-205', status: '正常', students: 42, grade: '高二' },
    { id: '3', name: '高三化学', teacher: '张老师', time: '周三 14:00-15:40', classroom: 'C-301', status: '考试', students: 48, grade: '高三' },
    { id: '4', name: '初一英语', teacher: '赵老师', time: '周四 08:00-09:40', classroom: 'D-102', status: '正常', students: 50, grade: '初一' },
    { id: '5', name: '初二历史', teacher: '孙老师', time: '周五 10:00-11:40', classroom: 'E-203', status: '调课', students: 46, grade: '初二' },
    { id: '6', name: '初三政治', teacher: '周老师', time: '周一 14:00-15:40', classroom: 'F-304', status: '正常', students: 44, grade: '初三' },
  ];

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.teacher.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesGrade = filterGrade === '全部' || course.grade === filterGrade;
    return matchesSearch && matchesGrade;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case '正常': return 'bg-green-100 text-green-800';
      case '调课': return 'bg-yellow-100 text-yellow-800';
      case '停课': return 'bg-red-100 text-red-800';
      case '考试': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">教务管理中心</h2>
          <p className="text-gray-500 mt-1">管理课程安排，监控教学进度</p>
        </div>
        <button className="flex items-center gap-2 bg-gradient-to-r from-green-600 to-green-700 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all">
          <Plus className="h-4 w-4" />
          <span>新增课程</span>
        </button>
      </div>

      {/* Filters */}
      <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex flex-wrap gap-4">
        <div className="relative flex-1 min-w-[200px] max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="搜索课程名称或教师..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-gray-50 rounded-lg border-none focus:ring-2 focus:ring-green-100 outline-none"
          />
        </div>
        
        <div className="flex items-center gap-2">
          <Filter className="h-4 w-4 text-gray-400" />
          <select 
            value={filterGrade}
            onChange={(e) => setFilterGrade(e.target.value)}
            className="border border-gray-200 rounded-lg px-3 py-2 outline-none focus:border-green-400"
          >
            <option value="全部">全部年级</option>
            <option value="高一">高一</option>
            <option value="高二">高二</option>
            <option value="高三">高三</option>
            <option value="初一">初一</option>
            <option value="初二">初二</option>
            <option value="初三">初三</option>
          </select>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-4 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-green-100 text-sm">总课程数</p>
              <p className="text-2xl font-bold">{courses.length}</p>
            </div>
            <BookOpen className="h-8 w-8 text-green-200" />
          </div>
        </div>
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-4 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-100 text-sm">正常上课</p>
              <p className="text-2xl font-bold">{courses.filter(c => c.status === '正常').length}</p>
            </div>
            <Calendar className="h-8 w-8 text-blue-200" />
          </div>
        </div>
        <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-4 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-purple-100 text-sm">总学生数</p>
              <p className="text-2xl font-bold">{courses.reduce((sum, c) => sum + c.students, 0)}</p>
            </div>
            <Users className="h-8 w-8 text-purple-200" />
          </div>
        </div>
        <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl p-4 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-orange-100 text-sm">教室使用</p>
              <p className="text-2xl font-bold">{new Set(courses.map(c => c.classroom)).size}</p>
            </div>
            <MapPin className="h-8 w-8 text-orange-200" />
          </div>
        </div>
      </div>

      {/* Course List */}
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-gray-50 border-b border-gray-100">
              <tr>
                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">课程名称</th>
                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">授课教师</th>
                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">上课时间</th>
                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">教室</th>
                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">年级</th>
                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">学生数</th>
                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">状态</th>
                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">操作</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredCourses.map((course, index) => (
                <motion.tr 
                  key={course.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="hover:bg-gray-50/50 transition-colors"
                >
                  <td className="px-6 py-4">
                    <div className="font-medium text-gray-800">{course.name}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold">{course.teacher[0]}</span>
                      </div>
                      <span className="text-sm text-gray-700">{course.teacher}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Clock className="h-4 w-4" />
                      <span>{course.time}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <MapPin className="h-4 w-4" />
                      <span>{course.classroom}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">{course.grade}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Users className="h-4 w-4" />
                      <span>{course.students}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(course.status)}`}>
                      {course.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <button className="text-green-600 hover:text-green-800 font-medium text-sm">管理</button>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Pagination */}
        <div className="px-6 py-4 border-t border-gray-100 flex items-center justify-between text-sm text-gray-500">
          <span>显示 1 到 {filteredCourses.length} 条，共 {filteredCourses.length} 条</span>
          <div className="flex gap-2">
            <button className="px-3 py-1 border rounded hover:bg-gray-50 disabled:opacity-50" disabled>上一页</button>
            <button className="px-3 py-1 border rounded hover:bg-gray-50 disabled:opacity-50" disabled>下一页</button>
          </div>
        </div>
      </div>

      {filteredCourses.length === 0 && (
        <div className="text-center py-12">
          <Calendar className="h-12 w-12 text-gray-300 mx-auto mb-4" />
          <p className="text-gray-500">没有找到匹配的课程</p>
        </div>
      )}
    </motion.div>
  );
}
