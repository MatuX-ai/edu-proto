'use client';

import { motion } from 'framer-motion';
import { Search, Plus, Filter, Building2, Users, Award, MapPin, ChevronRight } from 'lucide-react';
import { useState } from 'react';

interface School {
  id: string;
  name: string;
  type: '小学' | '初中' | '高中' | '完全中学';
  students: number;
  teachers: number;
  rating: string;
  address: string;
  established: string;
}

export default function SchoolManagementPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState<string>('全部');

  // 模拟学校数据
  const schools: School[] = [
    { id: '1', name: '第一实验小学', type: '小学', students: 1200, teachers: 68, rating: '省级示范', address: '朝阳区建国路100号', established: '1952' },
    { id: '2', name: '第二中学', type: '初中', students: 2400, teachers: 156, rating: '市级重点', address: '海淀区中关村大街200号', established: '1978' },
    { id: '3', name: '第三高级中学', type: '高中', students: 1800, teachers: 128, rating: '省级重点', address: '西城区金融街300号', established: '1985' },
    { id: '4', name: '第四完全中学', type: '完全中学', students: 3200, teachers: 210, rating: '国家级示范', address: '东城区东直门400号', established: '1960' },
    { id: '5', name: '第五实验小学', type: '小学', students: 980, teachers: 52, rating: '区级重点', address: '丰台区南苑路500号', established: '1990' },
    { id: '6', name: '第六中学', type: '初中', students: 1600, teachers: 98, rating: '市级示范', address: '石景山区鲁谷路600号', established: '1982' },
  ];

  const filteredSchools = schools.filter(school => {
    const matchesSearch = school.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         school.address.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filterType === '全部' || school.type === filterType;
    return matchesSearch && matchesType;
  });

  const getRatingColor = (rating: string) => {
    if (rating.includes('国家级')) return 'bg-red-100 text-red-800';
    if (rating.includes('省级')) return 'bg-orange-100 text-orange-800';
    if (rating.includes('市级')) return 'bg-blue-100 text-blue-800';
    return 'bg-gray-100 text-gray-800';
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
          <h2 className="text-2xl font-bold text-gray-800">区域学校名录</h2>
          <p className="text-gray-500 mt-1">管理辖区内所有学校，监控教育质量</p>
        </div>
        <button className="flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-indigo-700 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all">
          <Plus className="h-4 w-4" />
          <span>新增学校</span>
        </button>
      </div>

      {/* Filters */}
      <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex flex-wrap gap-4">
        <div className="relative flex-1 min-w-[200px] max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="搜索学校名称或地址..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-gray-50 rounded-lg border-none focus:ring-2 focus:ring-indigo-100 outline-none"
          />
        </div>
        
        <div className="flex items-center gap-2">
          <Filter className="h-4 w-4 text-gray-400" />
          <select 
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            className="border border-gray-200 rounded-lg px-3 py-2 outline-none focus:border-indigo-400"
          >
            <option value="全部">全部类型</option>
            <option value="小学">小学</option>
            <option value="初中">初中</option>
            <option value="高中">高中</option>
            <option value="完全中学">完全中学</option>
          </select>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl p-4 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-indigo-100 text-sm">学校总数</p>
              <p className="text-2xl font-bold">{schools.length}</p>
            </div>
            <Building2 className="h-8 w-8 text-indigo-200" />
          </div>
        </div>
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-4 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-100 text-sm">学生总数</p>
              <p className="text-2xl font-bold">{schools.reduce((sum, s) => sum + s.students, 0).toLocaleString()}</p>
            </div>
            <Users className="h-8 w-8 text-blue-200" />
          </div>
        </div>
        <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-4 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-purple-100 text-sm">教师总数</p>
              <p className="text-2xl font-bold">{schools.reduce((sum, s) => sum + s.teachers, 0).toLocaleString()}</p>
            </div>
            <Users className="h-8 w-8 text-purple-200" />
          </div>
        </div>
        <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-4 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-green-100 text-sm">示范学校</p>
              <p className="text-2xl font-bold">{schools.filter(s => s.rating.includes('示范')).length}</p>
            </div>
            <Award className="h-8 w-8 text-green-200" />
          </div>
        </div>
      </div>

      {/* School List */}
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-gray-50 border-b border-gray-100">
              <tr>
                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">学校名称</th>
                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">类型</th>
                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">学生数</th>
                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">教师数</th>
                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">评级</th>
                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">地址</th>
                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">操作</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredSchools.map((school, index) => (
                <motion.tr 
                  key={school.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="hover:bg-gray-50/50 transition-colors"
                >
                  <td className="px-6 py-4">
                    <div className="font-medium text-gray-800">{school.name}</div>
                    <div className="text-xs text-gray-500 mt-1">建校于 {school.established} 年</div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">{school.type}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Users className="h-4 w-4" />
                      <span>{school.students.toLocaleString()}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Users className="h-4 w-4" />
                      <span>{school.teachers.toLocaleString()}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getRatingColor(school.rating)}`}>
                      {school.rating}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <MapPin className="h-4 w-4" />
                      <span className="truncate max-w-[200px]">{school.address}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <button className="text-indigo-600 hover:text-indigo-800 font-medium text-sm flex items-center gap-1">
                      查看
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Pagination */}
        <div className="px-6 py-4 border-t border-gray-100 flex items-center justify-between text-sm text-gray-500">
          <span>显示 1 到 {filteredSchools.length} 条，共 {filteredSchools.length} 条</span>
          <div className="flex gap-2">
            <button className="px-3 py-1 border rounded hover:bg-gray-50 disabled:opacity-50" disabled>上一页</button>
            <button className="px-3 py-1 border rounded hover:bg-gray-50 disabled:opacity-50" disabled>下一页</button>
          </div>
        </div>
      </div>

      {filteredSchools.length === 0 && (
        <div className="text-center py-12">
          <Building2 className="h-12 w-12 text-gray-300 mx-auto mb-4" />
          <p className="text-gray-500">没有找到匹配的学校</p>
        </div>
      )}
    </motion.div>
  );
}
