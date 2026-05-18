'use client';

import { motion } from 'framer-motion';
import { Search, Plus, Filter, Users, Briefcase, Target, Calendar, ChevronRight } from 'lucide-react';
import { useState } from 'react';

interface Project {
  id: string;
  name: string;
  company: string;
  students: number;
  progress: number;
  status: '进行中' | '已完成' | '待开始' | '暂停';
  startDate: string;
  endDate: string;
  category: string;
}

export default function ProjectWorkshopPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState<string>('全部');

  // 模拟项目数据
  const projects: Project[] = [
    { id: '1', name: '智能仓储系统', company: '华为技术', students: 12, progress: 75, status: '进行中', startDate: '2026-03-01', endDate: '2026-06-30', category: '物联网' },
    { id: '2', name: '电商数据分析', company: '阿里巴巴', students: 8, progress: 40, status: '进行中', startDate: '2026-04-01', endDate: '2026-07-31', category: '大数据' },
    { id: '3', name: '移动应用开发', company: '腾讯科技', students: 15, progress: 90, status: '进行中', startDate: '2026-02-15', endDate: '2026-05-30', category: '移动开发' },
    { id: '4', name: 'AI客服系统', company: '百度智能云', students: 10, progress: 100, status: '已完成', startDate: '2026-01-10', endDate: '2026-04-10', category: '人工智能' },
    { id: '5', name: '区块链溯源平台', company: '京东数科', students: 6, progress: 20, status: '待开始', startDate: '2026-06-01', endDate: '2026-09-30', category: '区块链' },
    { id: '6', name: 'VR教育应用', company: '字节跳动', students: 9, progress: 55, status: '进行中', startDate: '2026-03-15', endDate: '2026-08-15', category: '虚拟现实' },
  ];

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.company.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === '全部' || project.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case '进行中': return 'bg-blue-100 text-blue-800';
      case '已完成': return 'bg-green-100 text-green-800';
      case '待开始': return 'bg-gray-100 text-gray-800';
      case '暂停': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getProgressColor = (progress: number) => {
    if (progress >= 80) return 'bg-green-500';
    if (progress >= 50) return 'bg-blue-500';
    if (progress >= 30) return 'bg-yellow-500';
    return 'bg-gray-400';
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
          <h2 className="text-2xl font-bold text-gray-800">企业项目工坊</h2>
          <p className="text-gray-500 mt-1">校企合作项目，真实商业场景实战</p>
        </div>
        <button className="flex items-center gap-2 bg-gradient-to-r from-orange-600 to-orange-700 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all">
          <Plus className="h-4 w-4" />
          <span>新建项目</span>
        </button>
      </div>

      {/* Filters */}
      <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex flex-wrap gap-4">
        <div className="relative flex-1 min-w-[200px] max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="搜索项目名称或企业..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-gray-50 rounded-lg border-none focus:ring-2 focus:ring-orange-100 outline-none"
          />
        </div>
        
        <div className="flex items-center gap-2">
          <Filter className="h-4 w-4 text-gray-400" />
          <select 
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="border border-gray-200 rounded-lg px-3 py-2 outline-none focus:border-orange-400"
          >
            <option value="全部">全部状态</option>
            <option value="进行中">进行中</option>
            <option value="已完成">已完成</option>
            <option value="待开始">待开始</option>
            <option value="暂停">暂停</option>
          </select>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl p-4 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-orange-100 text-sm">总项目数</p>
              <p className="text-2xl font-bold">{projects.length}</p>
            </div>
            <Briefcase className="h-8 w-8 text-orange-200" />
          </div>
        </div>
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-4 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-100 text-sm">进行中</p>
              <p className="text-2xl font-bold">{projects.filter(p => p.status === '进行中').length}</p>
            </div>
            <Target className="h-8 w-8 text-blue-200" />
          </div>
        </div>
        <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-4 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-purple-100 text-sm">参与学生</p>
              <p className="text-2xl font-bold">{projects.reduce((sum, p) => sum + p.students, 0)}</p>
            </div>
            <Users className="h-8 w-8 text-purple-200" />
          </div>
        </div>
        <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-4 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-green-100 text-sm">合作企业</p>
              <p className="text-2xl font-bold">{new Set(projects.map(p => p.company)).size}</p>
            </div>
            <Briefcase className="h-8 w-8 text-green-200" />
          </div>
        </div>
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all overflow-hidden"
          >
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="font-bold text-gray-800 text-lg mb-1">{project.name}</h3>
                  <p className="text-sm text-gray-500">{project.category}</p>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                  {project.status}
                </span>
              </div>
              
              <div className="space-y-3 mb-4">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Briefcase className="h-4 w-4" />
                  <span>{project.company}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Users className="h-4 w-4" />
                  <span>{project.students} 名学生参与</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Calendar className="h-4 w-4" />
                  <span>{project.startDate} 至 {project.endDate}</span>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mb-4">
                <div className="flex items-center justify-between text-sm mb-2">
                  <span className="text-gray-600">项目进度</span>
                  <span className="font-medium text-gray-800">{project.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className={`${getProgressColor(project.progress)} h-2 rounded-full transition-all duration-500`}
                    style={{ width: `${project.progress}%` }}
                  ></div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <button className="text-orange-600 hover:text-orange-800 font-medium text-sm flex items-center gap-1">
                  查看详情
                  <ChevronRight className="h-4 w-4" />
                </button>
                <button className="px-3 py-1 bg-orange-100 text-orange-700 rounded-lg text-sm hover:bg-orange-200 transition-colors">
                  管理
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-12">
          <Target className="h-12 w-12 text-gray-300 mx-auto mb-4" />
          <p className="text-gray-500">没有找到匹配的项目</p>
        </div>
      )}
    </motion.div>
  );
}
