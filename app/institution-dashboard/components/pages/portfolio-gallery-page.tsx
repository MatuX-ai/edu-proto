'use client';

import { motion } from 'framer-motion';
import { FileText, Heart, Eye, Star, Search, Filter, Plus, Award } from 'lucide-react';

export default function PortfolioGalleryPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">学生作品库</h2>
          <p className="text-sm text-gray-500 mt-1">展示学生在STEM课程中的优秀项目和创意作品</p>
        </div>
        <button className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
          <Plus className="h-4 w-4" />
          <span>上传作品</span>
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { label: '作品总数', value: '248', icon: FileText, color: 'green' },
          { label: '本月新增', value: '32', icon: Star, color: 'blue' },
          { label: '总点赞数', value: '3,456', icon: Heart, color: 'purple' },
          { label: '精选作品', value: '45', icon: Award, color: 'orange' },
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

      {/* Featured Works Gallery */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-white rounded-xl border border-gray-100 shadow-sm p-6"
      >
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-bold text-gray-800">精选作品展示</h3>
          <div className="flex items-center gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="搜索作品..."
                className="pl-10 pr-4 py-2 bg-gray-50 rounded-lg border-none focus:ring-2 focus:ring-green-100 outline-none text-sm"
              />
            </div>
            <button className="flex items-center gap-2 px-3 py-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <Filter className="h-4 w-4 text-gray-600" />
              <span className="text-sm text-gray-600">筛选</span>
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { 
              title: '智能浇花系统', 
              author: '李明', 
              class: '初一(2)班',
              type: '硬件项目',
              image: '🌱',
              likes: 45,
              views: 234,
              description: '基于Arduino的自动浇花系统，包含土壤湿度传感器和水泵控制',
              status: '精选'
            },
            { 
              title: 'Python贪吃蛇游戏', 
              author: '王芳', 
              class: '初二(1)班',
              type: '软件项目',
              image: '🐍',
              likes: 38,
              views: 189,
              description: '使用Pygame开发的经典贪吃蛇游戏，支持难度调节和排行榜',
              status: '已展示'
            },
            { 
              title: '人脸识别门禁', 
              author: '陈强', 
              class: '高二(2)班',
              type: 'AI项目',
              image: '🤖',
              likes: 67,
              views: 456,
              description: '基于OpenCV的人脸识别门禁系统，支持多人脸库管理',
              status: '精选'
            },
            { 
              title: '3D打印笔筒', 
              author: '张伟', 
              class: '初三(3)班',
              type: '设计作品',
              image: '✏️',
              likes: 52,
              views: 312,
              description: '创意几何造型笔筒，使用Fusion 360设计并3D打印制作',
              status: '已展示'
            },
            { 
              title: '机器人避障车', 
              author: '刘洋', 
              class: '高一(1)班',
              type: '机器人',
              image: '🚗',
              likes: 41,
              views: 278,
              description: '超声波避障机器人，支持自动导航和手动遥控双模式',
              status: '已展示'
            },
            { 
              title: '智能家居控制面板', 
              author: '赵丽', 
              class: '初一(1)班',
              type: '物联网',
              image: '🏠',
              likes: 33,
              views: 198,
              description: '基于ESP32的智能家居控制系统，可控制灯光、风扇等设备',
              status: '已展示'
            },
          ].map((work, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="border border-gray-200 rounded-xl overflow-hidden hover:border-green-300 hover:shadow-lg transition-all group"
            >
              <div className="h-48 bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center text-6xl group-hover:scale-105 transition-transform">
                {work.image}
              </div>
              <div className="p-4">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">{work.title}</h4>
                    <p className="text-xs text-gray-500">{work.author} · {work.class}</p>
                  </div>
                  {work.status === '精选' && (
                    <span className="px-2 py-1 bg-yellow-50 text-yellow-600 rounded-full text-xs flex items-center gap-1">
                      <Award className="h-3 w-3" />
                      精选
                    </span>
                  )}
                </div>
                <p className="text-sm text-gray-600 mb-3 line-clamp-2">{work.description}</p>
                <div className="flex items-center justify-between">
                  <span className="px-2 py-1 bg-green-50 text-green-600 rounded-full text-xs">
                    {work.type}
                  </span>
                  <div className="flex items-center gap-3 text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <Heart className="h-3 w-3" />
                      {work.likes}
                    </span>
                    <span className="flex items-center gap-1">
                      <Eye className="h-3 w-3" />
                      {work.views}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* All Works Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden"
      >
        <div className="p-6 border-b border-gray-100">
          <h3 className="text-lg font-bold text-gray-800">全部作品</h3>
        </div>
        <table className="w-full text-left">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase">作品名称</th>
              <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase">作者</th>
              <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase">类型</th>
              <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase">完成时间</th>
              <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase">点赞数</th>
              <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase">状态</th>
              <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase">操作</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {[
              { name: '智能浇花系统', author: '李明', type: '硬件项目', date: '2024-05-10', likes: '45', status: '已展示' },
              { name: 'Python贪吃蛇游戏', author: '王芳', type: '软件项目', date: '2024-05-08', likes: '38', status: '已展示' },
              { name: '3D打印笔筒', author: '张伟', type: '设计作品', date: '2024-05-05', likes: '52', status: '已展示' },
              { name: '人脸识别门禁', author: '陈强', type: 'AI项目', date: '2024-05-03', likes: '67', status: '精选' },
              { name: '机器人避障车', author: '刘洋', type: '机器人', date: '2024-04-28', likes: '41', status: '已展示' },
              { name: '智能家居控制面板', author: '赵丽', type: '物联网', date: '2024-04-25', likes: '33', status: '已展示' },
            ].map((work, i) => (
              <tr key={i} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 text-sm font-medium text-gray-800">{work.name}</td>
                <td className="px-6 py-4 text-sm text-gray-600">{work.author}</td>
                <td className="px-6 py-4">
                  <span className="px-2 py-1 bg-green-50 text-green-600 rounded-full text-xs">
                    {work.type}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">{work.date}</td>
                <td className="px-6 py-4">
                  <span className="flex items-center gap-1 text-sm text-gray-600">
                    <Heart className="h-4 w-4 text-red-500" />
                    {work.likes}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    work.status === '精选' ? 'bg-yellow-50 text-yellow-600' :
                    'bg-green-50 text-green-600'
                  }`}>
                    {work.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <button className="text-green-600 hover:text-green-700 text-sm font-medium mr-3">
                    查看
                  </button>
                  <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                    编辑
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </motion.div>
    </motion.div>
  );
}
