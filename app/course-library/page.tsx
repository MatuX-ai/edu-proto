'use client';

import { motion } from 'framer-motion';
import { BookOpen, Download, Search, Filter, Star, Clock, Users, FileText, Cpu, Zap, Network, Layers } from 'lucide-react';
import { useState } from 'react';

export default function CourseLibraryPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: '全部' },
    { id: 'tutorial', name: '教程库' },
    { id: 'transition', name: '过渡项目' },
    { id: 'courseware', name: '课件库' },
    { id: 'hardware', name: '硬件项目' }
  ];

  const courses = [
    {
      title: '生态系统能量流动 - OpenSciEd 单元',
      category: 'tutorial',
      author: 'OpenSciEd 团队',
      downloads: 2580,
      rating: 4.9,
      updated: '2026-05-10',
      description: '6周现象驱动探究项目，通过实验理解生态系统中的能量传递规律',
      tags: ['生物学', '生态', '实验'],
      duration: '6周',
      price: '免费'
    },
    {
      title: '欧姆定律可视化模拟 - Blockly 编程',
      category: 'transition',
      author: 'MatuX 团队',
      downloads: 1850,
      rating: 4.8,
      updated: '2026-05-08',
      description: '用图形化编程模拟物理公式，变量控制电压电流，直观理解抽象概念',
      tags: ['物理', '编程', '可视化'],
      duration: '2周',
      price: '免费'
    },
    {
      title: '大学物理：微积分推导 - OpenStax',
      category: 'courseware',
      author: 'OpenStax 团队',
      downloads: 3200,
      rating: 4.9,
      updated: '2026-05-12',
      description: '深入讲解运动学、动力学的微积分推导，掌握核心理论基础',
      tags: ['物理', '数学', '理论'],
      duration: '8周',
      price: '免费'
    },
    {
      title: '智能气象站 - ESP32 + 传感器',
      category: 'hardware',
      author: '陈老师',
      downloads: 1560,
      rating: 4.9,
      updated: '2026-05-15',
      description: '预算¥35，ESP32采集温湿度数据，Python绘制实时曲线，手机WebUSB烧录',
      tags: ['物联网', '传感器', '数据分析'],
      duration: '3周',
      price: '¥35'
    },
    {
      title: '光合作用模拟器 - Arduino 项目',
      category: 'hardware',
      author: '李老师',
      downloads: 1280,
      rating: 4.8,
      updated: '2026-05-13',
      description: '预算¥42，光敏电阻+LED模拟氧气释放，Arduino采集光照数据并分析',
      tags: ['生物', 'Arduino', '实验'],
      duration: '2周',
      price: '¥42'
    },
    {
      title: '化学方程式平衡 - 知识图谱关联',
      category: 'courseware',
      author: '王老师',
      downloads: 2100,
      rating: 4.7,
      updated: '2026-05-11',
      description: '基于 Neo4j 知识图谱，关联化学反应原理与数学配平方法',
      tags: ['化学', '知识图谱', 'AI'],
      duration: '4周',
      price: '免费'
    },
    {
      title: '智能避障小车 - 综合硬件项目',
      category: 'hardware',
      author: '张老师',
      downloads: 1920,
      rating: 4.9,
      updated: '2026-05-14',
      description: '预算¥48，Arduino Uno+超声波+舵机，整合物理传感+编程控制+工程设计',
      tags: ['机器人', 'Arduino', '工程'],
      duration: '4周',
      price: '¥48'
    },
    {
      title: '统计数据分析 - Python 实战',
      category: 'transition',
      author: '赵老师',
      downloads: 1650,
      rating: 4.8,
      updated: '2026-05-09',
      description: '从气象站数据出发，学习 Pandas 数据处理和 Matplotlib 可视化',
      tags: ['数学', 'Python', '数据科学'],
      duration: '3周',
      price: '免费'
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

      {/* Learning Path Visualization */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25 }}
        className="mb-12 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 rounded-xl p-8 border"
      >
        <h2 className="text-2xl font-bold text-center mb-6">连贯学习路径</h2>
        <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
          基于知识图谱与 AI 的 STEM 教育创新方案，从现象驱动到理论深度的完整学习链路
        </p>
        
        <div className="grid gap-4 md:grid-cols-4">
          {[
            { step: '1', icon: BookOpen, title: '教程库单元', desc: '现象驱动实践', subdesc: 'OpenSciEd 6周探究项目', color: 'blue' },
            { step: '2', icon: Zap, title: '过渡项目', desc: 'Blockly 编程模拟', subdesc: '可视化理解抽象概念', color: 'purple' },
            { step: '3', icon: Layers, title: '课件库章节', desc: '理论深化', subdesc: 'OpenStax 大学教材预习', color: 'pink' },
            { step: '4', icon: Cpu, title: '硬件综合项目', desc: '跨学科应用', subdesc: 'Arduino/ESP32 实战', color: 'green' }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.1 }}
              className="relative bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all"
            >
              <div className={`absolute -top-3 -left-3 w-8 h-8 bg-${item.color}-500 rounded-full flex items-center justify-center text-white font-bold`}>
                {item.step}
              </div>
              <item.icon className={`h-10 w-10 mx-auto mb-3 text-${item.color}-500`} />
              <h3 className="font-bold text-center mb-2">{item.title}</h3>
              <p className="text-sm text-center text-gray-700 font-medium mb-1">{item.desc}</p>
              <p className="text-xs text-center text-gray-500">{item.subdesc}</p>
            </motion.div>
          ))}
        </div>

        {/* Knowledge Graph Features */}
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <div className="bg-white/80 backdrop-blur rounded-lg p-4 flex items-start gap-3">
            <Network className="h-6 w-6 text-blue-500 flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-semibold text-sm mb-1">知识图谱驱动</h4>
              <p className="text-xs text-gray-600">Neo4j 构建关联网络，跨学科准确率 ≥90%</p>
            </div>
          </div>
          <div className="bg-white/80 backdrop-blur rounded-lg p-4 flex items-start gap-3">
            <Zap className="h-6 w-6 text-purple-500 flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-semibold text-sm mb-1">AI 自适应路径</h4>
              <p className="text-xs text-gray-600">PPO 强化学习推荐，MiniCPM 虚拟导师实时解答</p>
            </div>
          </div>
          <div className="bg-white/80 backdrop-blur rounded-lg p-4 flex items-start gap-3">
            <Cpu className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-semibold text-sm mb-1">低成本硬件联动</h4>
              <p className="text-xs text-gray-600">预算 ≤¥50，WebUSB 手机直连烧录</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35 }}
        className="grid gap-6 md:grid-cols-4 mb-12"
      >
        {[
          { icon: BookOpen, label: '资源总数', value: '500+', color: 'blue' },
          { icon: Download, label: '总下载量', value: '25K+', color: 'green' },
          { icon: Users, label: '贡献者', value: '120+', color: 'purple' },
          { icon: Star, label: 'GitHub Stars', value: '1000+', color: 'yellow' }
        ].map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 + i * 0.1 }}
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
                <span>{course.duration}</span>
              </div>
            </div>
            
            <div className="flex items-center justify-between pt-4 border-t">
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-1 text-sm text-gray-600">
                  <Download className="h-4 w-4" />
                  <span>{course.downloads} 次下载</span>
                </div>
                <div className="text-xs font-medium text-accent">{course.price}</div>
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
                  <span className="text-sm font-medium">开源项目推荐</span>
                </div>
                <h2 className="text-3xl font-bold mb-3">OpenMTSciEd - STEM连贯学习路径引擎</h2>
                <p className="text-lg opacity-90 mb-4">
                  全球共建&quot;STEM 知识地图&quot;，让资源匮乏地区的学生也能享受前沿教育
                </p>
                <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm">
                    🕸️ 知识图谱驱动
                  </span>
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm">
                    🤖 AI 自适应路径
                  </span>
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm">
                    🔌 低成本硬件联动
                  </span>
                </div>
              </div>
              <div className="flex-shrink-0">
                <div className="bg-white/20 backdrop-blur-sm rounded-full p-6 group-hover:bg-white/30 transition-colors">
                  <Network className="h-12 w-12" />
                </div>
              </div>
            </div>
            <div className="mt-6 flex items-center justify-center md:justify-start gap-2 text-sm font-medium">
              <span>访问开源项目</span>
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
