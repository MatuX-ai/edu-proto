'use client';

import { motion } from 'framer-motion';
import { BookOpen, Download, Search, Filter, Star, Clock, Users, FileText } from 'lucide-react';
import { useState } from 'react';

export default function CourseLibraryPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: '全部' },
    { id: 'programming', name: '编程开发' },
    { id: 'hardware', name: '硬件开发' },
    { id: 'ai', name: '人工智能' },
    { id: 'robotics', name: '机器人' },
    { id: 'science', name: '科学实验' }
  ];

  const courses = [
    {
      title: 'Python 编程基础教程',
      category: 'programming',
      author: 'MatuX 团队',
      downloads: 1250,
      rating: 4.8,
      updated: '2024-01-15',
      description: '适合初学者的 Python 编程入门课程，包含 20 个实践项目',
      tags: ['Python', '入门', '实战']
    },
    {
      title: 'Arduino 智能硬件开发',
      category: 'hardware',
      author: '陈老师',
      downloads: 980,
      rating: 4.9,
      updated: '2024-01-10',
      description: '从零开始学习 Arduino 硬件开发，打造智能家居系统',
      tags: ['Arduino', '物联网', '硬件']
    },
    {
      title: '机器学习入门与实践',
      category: 'ai',
      author: '李老师',
      downloads: 856,
      rating: 4.7,
      updated: '2024-01-08',
      description: '深入浅出讲解机器学习算法，配合实际案例演练',
      tags: ['AI', '机器学习', '算法']
    },
    {
      title: 'Scratch 创意编程',
      category: 'programming',
      author: '王老师',
      downloads: 1580,
      rating: 4.9,
      updated: '2024-01-12',
      description: '通过 Scratch 培养编程思维，创作互动故事和游戏',
      tags: ['Scratch', '儿童编程', '创意']
    },
    {
      title: '机器人搭建与编程',
      category: 'robotics',
      author: '张老师',
      downloads: 720,
      rating: 4.8,
      updated: '2024-01-05',
      description: '学习机器人结构设计、传感器应用和运动控制编程',
      tags: ['机器人', '机械', '控制']
    },
    {
      title: '物理化学实验课',
      category: 'science',
      author: '刘老师',
      downloads: 650,
      rating: 4.6,
      updated: '2024-01-03',
      description: '趣味物理化学实验，培养科学探究精神',
      tags: ['物理', '化学', '实验']
    },
    {
      title: 'Web 前端开发实战',
      category: 'programming',
      author: '赵老师',
      downloads: 1120,
      rating: 4.8,
      updated: '2024-01-14',
      description: 'HTML/CSS/JavaScript 完整教程，构建现代 Web 应用',
      tags: ['Web', '前端', 'JavaScript']
    },
    {
      title: '3D 打印设计与制作',
      category: 'hardware',
      author: '孙老师',
      downloads: 540,
      rating: 4.7,
      updated: '2024-01-07',
      description: '学习 3D 建模软件，设计并打印实用物品',
      tags: ['3D打印', '设计', '制造']
    }
  ];

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-primary mb-4">开源课件库</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          免费获取高质量的 STEM 教育课件资源，支持在线预览和下载
        </p>
      </motion.div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="grid gap-6 md:grid-cols-4 mb-12"
      >
        {[
          { icon: BookOpen, label: '课件总数', value: '256', color: 'blue' },
          { icon: Download, label: '总下载量', value: '15.8K', color: 'green' },
          { icon: Users, label: '贡献教师', value: '89', color: 'purple' },
          { icon: Star, label: '平均评分', value: '4.8', color: 'yellow' }
        ].map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + i * 0.1 }}
            className="p-6 rounded-lg border bg-white shadow-sm hover:shadow-md transition-shadow text-center"
          >
            <stat.icon className={`h-8 w-8 mx-auto mb-3 text-${stat.color}-500`} />
            <div className="text-3xl font-bold text-slate-900 mb-1">{stat.value}</div>
            <div className="text-sm text-slate-600">{stat.label}</div>
          </motion.div>
        ))}
      </motion.div>

      {/* Search and Filter */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-8"
      >
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="搜索课件..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>
          <div className="flex items-center gap-2">
            <Filter className="h-5 w-5 text-gray-500" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
            >
              {categories.map(cat => (
                <option key={cat.id} value={cat.id}>{cat.name}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Category Tags */}
        <div className="flex flex-wrap gap-2">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === cat.id
                  ? 'bg-accent text-white'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Course Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredCourses.map((course, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + i * 0.05 }}
            className="p-6 rounded-lg border bg-white shadow-sm hover:shadow-md transition-all hover:border-accent"
          >
            <div className="flex items-start justify-between mb-4">
              <BookOpen className="h-8 w-8 text-accent" />
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                <span className="text-sm font-medium">{course.rating}</span>
              </div>
            </div>
            
            <h3 className="text-xl font-bold mb-2">{course.title}</h3>
            <p className="text-gray-600 text-sm mb-4">{course.description}</p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {course.tags.map((tag, j) => (
                <span key={j} className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded">
                  {tag}
                </span>
              ))}
            </div>
            
            <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
              <div className="flex items-center gap-1">
                <Users className="h-4 w-4" />
                <span>{course.author}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>{course.updated}</span>
              </div>
            </div>
            
            <div className="flex items-center justify-between pt-4 border-t">
              <div className="flex items-center gap-1 text-sm text-gray-600">
                <Download className="h-4 w-4" />
                <span>{course.downloads} 次下载</span>
              </div>
              <button className="px-4 py-2 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors text-sm font-medium">
                查看详情
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Marketing Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="mt-12"
      >
        <a
          href="https://opensciedu.matux.tech/"
          target="_blank"
          rel="noopener noreferrer"
          className="block group"
        >
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-accent rounded-lg p-8 text-white shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex-1 text-center md:text-left">
                <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
                  <Star className="h-5 w-5 text-yellow-300 fill-yellow-300" />
                  <span className="text-sm font-medium">推荐资源</span>
                </div>
                <h2 className="text-3xl font-bold mb-3">OpenSciEdu 开放科学教育平台</h2>
                <p className="text-lg opacity-90 mb-4">
                  探索更多优质 STEM 教育资源，获取完整的课程体系和教学工具
                </p>
                <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm">
                    📚 完整课程体系
                  </span>
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm">
                    🎯 教学工具包
                  </span>
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm">
                    👥 教师社区
                  </span>
                </div>
              </div>
              <div className="flex-shrink-0">
                <div className="bg-white/20 backdrop-blur-sm rounded-full p-6 group-hover:bg-white/30 transition-colors">
                  <BookOpen className="h-12 w-12" />
                </div>
              </div>
            </div>
            <div className="mt-6 flex items-center justify-center md:justify-start gap-2 text-sm font-medium">
              <span>立即访问</span>
              <svg
                className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </div>
          </div>
        </a>
      </motion.div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="mt-12 bg-gradient-to-r from-purple-600 to-accent rounded-lg p-8 text-white text-center"
      >
        <h2 className="text-3xl font-bold mb-4">分享您的课件</h2>
        <p className="text-lg mb-6 opacity-90">
          如果您是教育工作者，欢迎贡献您的优质课件，帮助更多学生
        </p>
        <button className="inline-flex items-center justify-center rounded-md font-medium bg-white text-accent hover:bg-gray-100 h-12 px-6">
          <FileText className="h-5 w-5 mr-2" />
          提交课件
        </button>
      </motion.div>
    </div>
  );
}
