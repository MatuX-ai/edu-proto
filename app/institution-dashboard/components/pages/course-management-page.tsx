'use client';

import { motion } from 'framer-motion';
import { Search, Plus, Filter, MoreHorizontal, Star, Users, Clock, BookOpen } from 'lucide-react';
import { useState } from 'react';

interface Course {
  id: string;
  name: string;
  instructor: string;
  students: number;
  status: '进行中' | '已完结' | '报名中' | '待开始';
  rating: number;
  duration: string;
  category: string;
}

export default function CourseManagementPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState<string>('全部');

  // 模拟课程数据
  const courses: Course[] = [
    { id: '1', name: 'Python 基础入门', instructor: '张老师', students: 128, status: '进行中', rating: 4.8, duration: '8周', category: '编程开发' },
    { id: '2', name: 'AI 绘画实战', instructor: '李老师', students: 85, status: '已完结', rating: 4.9, duration: '6周', category: '人工智能' },
    { id: '3', name: 'Web 前端开发', instructor: '王老师', students: 210, status: '报名中', rating: 4.7, duration: '10周', category: '编程开发' },
    { id: '4', name: '数据分析与可视化', instructor: '赵老师', students: 156, status: '进行中', rating: 4.6, duration: '8周', category: '数据科学' },
    { id: '5', name: '机器学习基础', instructor: '孙老师', students: 92, status: '待开始', rating: 4.9, duration: '12周', category: '人工智能' },
    { id: '6', name: 'UI/UX 设计原理', instructor: '周老师', students: 178, status: '进行中', rating: 4.5, duration: '6周', category: '设计' },
  ];

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.instructor.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === '全部' || course.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case '进行中': return 'bg-green-100 text-green-800';
      case '已完结': return 'bg-blue-100 text-blue-800';
      case '报名中': return 'bg-yellow-100 text-yellow-800';
      case '待开始': return 'bg-gray-100 text-gray-800';
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
          <h2 className="text-2xl font-bold text-gray-800">课程管理中心</h2>
          <p className="text-gray-500 mt-1">管理所有培训课程，监控学习进度</p>
        </div>
        <button className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all">
          <Plus className="h-4 w-4" />
          <span>新建课程</span>
        </button>
      </div>

      {/* Filters */}
      <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex flex-wrap gap-4">
        <div className="relative flex-1 min-w-[200px] max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="搜索课程名称或讲师..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-gray-50 rounded-lg border-none focus:ring-2 focus:ring-blue-100 outline-none"
          />
        </div>
        
        <div className="flex items-center gap-2">
          <Filter className="h-4 w-4 text-gray-400" />
          <select 
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="border border-gray-200 rounded-lg px-3 py-2 outline-none focus:border-blue-400"
          >
            <option value="全部">全部状态</option>
            <option value="进行中">进行中</option>
            <option value="已完结">已完结</option>
            <option value="报名中">报名中</option>
            <option value="待开始">待开始</option>
          </select>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-4 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-100 text-sm">总课程数</p>
              <p className="text-2xl font-bold">{courses.length}</p>
            </div>
            <BookOpen className="h-8 w-8 text-blue-200" />
          </div>
        </div>
        <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-4 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-green-100 text-sm">进行中</p>
              <p className="text-2xl font-bold">{courses.filter(c => c.status === '进行中').length}</p>
            </div>
            <Clock className="h-8 w-8 text-green-200" />
          </div>
        </div>
        <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl p-4 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-yellow-100 text-sm">总学员数</p>
              <p className="text-2xl font-bold">{courses.reduce((sum, c) => sum + c.students, 0)}</p>
            </div>
            <Users className="h-8 w-8 text-yellow-200" />
          </div>
        </div>
        <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-4 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-purple-100 text-sm">平均评分</p>
              <p className="text-2xl font-bold">{(courses.reduce((sum, c) => sum + c.rating, 0) / courses.length).toFixed(1)}</p>
            </div>
            <Star className="h-8 w-8 text-purple-200" />
          </div>
        </div>
      </div>

      {/* Course Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCourses.map((course, index) => (
          <motion.div
            key={course.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all overflow-hidden"
          >
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="font-bold text-gray-800 text-lg mb-1">{course.name}</h3>
                  <p className="text-sm text-gray-500">{course.category}</p>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(course.status)}`}>
                  {course.status}
                </span>
              </div>
              
              <div className="space-y-3 mb-4">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Users className="h-4 w-4" />
                  <span>{course.students} 名学员</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Clock className="h-4 w-4" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                  <span>{course.rating} 分</span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">{course.instructor[0]}</span>
                  </div>
                  <span className="text-sm text-gray-700">{course.instructor}</span>
                </div>
                <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                  <MoreHorizontal className="h-4 w-4 text-gray-400" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {filteredCourses.length === 0 && (
        <div className="text-center py-12">
          <BookOpen className="h-12 w-12 text-gray-300 mx-auto mb-4" />
          <p className="text-gray-500">没有找到匹配的课程</p>
        </div>
      )}
    </motion.div>
  );
}
