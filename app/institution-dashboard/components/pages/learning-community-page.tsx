'use client';

import { motion } from 'framer-motion';
import { Handshake, MessageSquare, Heart, Eye, Users, Search, Filter, Plus, TrendingUp } from 'lucide-react';

export default function LearningCommunityPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">学习社区</h2>
          <p className="text-sm text-gray-500 mt-1">学生交流学习经验、分享资源、互助成长的平台</p>
        </div>
        <button className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
          <Plus className="h-4 w-4" />
          <span>发布帖子</span>
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { label: '社区成员', value: '356', icon: Users, color: 'green' },
          { label: '今日发帖', value: '28', icon: MessageSquare, color: 'blue' },
          { label: '活跃话题', value: '45', icon: TrendingUp, color: 'purple' },
          { label: '总互动数', value: '1,234', icon: Heart, color: 'orange' },
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

      {/* Hot Topics */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-white rounded-xl border border-gray-100 shadow-sm p-6"
      >
        <h3 className="text-lg font-bold text-gray-800 mb-4">热门话题</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { title: 'Arduino项目经验分享', replies: 45, views: 234, tag: '经验分享' },
            { title: 'Python学习路线讨论', replies: 38, views: 189, tag: '学习讨论' },
            { title: '机器人竞赛组队招募', replies: 52, views: 312, tag: '团队招募' },
            { title: '3D打印技巧交流', replies: 29, views: 156, tag: '技术交流' },
            { title: 'AI项目创意征集', replies: 67, views: 445, tag: '创意分享' },
            { title: '本周学习打卡', replies: 89, views: 567, tag: '学习打卡' },
          ].map((topic, i) => (
            <div key={i} className="border border-gray-200 rounded-lg p-4 hover:border-green-300 hover:shadow-md transition-all cursor-pointer">
              <div className="flex items-start justify-between mb-2">
                <span className="px-2 py-1 bg-green-50 text-green-600 rounded-full text-xs">
                  {topic.tag}
                </span>
                <TrendingUp className="h-4 w-4 text-orange-500" />
              </div>
              <h4 className="font-medium text-gray-800 mb-3">{topic.title}</h4>
              <div className="flex items-center gap-4 text-xs text-gray-500">
                <span className="flex items-center gap-1">
                  <MessageSquare className="h-3 w-3" />
                  {topic.replies}
                </span>
                <span className="flex items-center gap-1">
                  <Eye className="h-3 w-3" />
                  {topic.views}
                </span>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Community Posts */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden"
      >
        <div className="p-6 border-b border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-gray-800">最新帖子</h3>
            <div className="flex items-center gap-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="搜索帖子..."
                  className="pl-10 pr-4 py-2 bg-gray-50 rounded-lg border-none focus:ring-2 focus:ring-green-100 outline-none text-sm"
                />
              </div>
              <button className="flex items-center gap-2 px-3 py-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <Filter className="h-4 w-4 text-gray-600" />
                <span className="text-sm text-gray-600">筛选</span>
              </button>
            </div>
          </div>
        </div>
        
        <div className="divide-y divide-gray-100">
          {[
            {
              author: '李明',
              avatar: '👨‍🎓',
              class: '初一(2)班',
              title: '分享我的Arduino项目经验',
              content: '最近完成了一个智能浇花系统，想和大家分享一下开发过程中遇到的问题和解决方案...',
              time: '2小时前',
              type: '经验分享',
              likes: 24,
              replies: 12,
              views: 156,
              status: '活跃'
            },
            {
              author: '王芳',
              avatar: '👩‍🎓',
              class: '初二(1)班',
              title: '求助：Python列表问题',
              content: '在学习Python列表推导式时遇到了一些困惑，希望能得到大家的帮助...',
              time: '5小时前',
              type: '问题求助',
              likes: 8,
              replies: 8,
              views: 89,
              status: '已解决'
            },
            {
              author: '张伟',
              avatar: '👨‍💻',
              class: '初三(3)班',
              title: '推荐一个好用的3D建模软件',
              content: '发现了一款非常适合初学者的3D建模软件Tinkercad，界面友好，功能强大...',
              time: '1天前',
              type: '资源分享',
              likes: 32,
              replies: 15,
              views: 234,
              status: '活跃'
            },
            {
              author: '赵丽',
              avatar: '👩‍💻',
              class: '初一(1)班',
              title: '本周学习心得总结',
              content: '这周学习了Arduino的基础知识，感觉非常有意思，特别是传感器部分...',
              time: '2天前',
              type: '学习心得',
              likes: 18,
              replies: 6,
              views: 123,
              status: '正常'
            },
            {
              author: '陈强',
              avatar: '🧑‍🔬',
              class: '高二(2)班',
              title: '邀请组队参加机器人竞赛',
              content: '准备参加下个月的市级机器人竞赛，需要找2-3名队友，有兴趣的同学请联系我...',
              time: '3天前',
              type: '团队招募',
              likes: 45,
              replies: 20,
              views: 345,
              status: '热门'
            },
          ].map((post, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.05 }}
              className="p-6 hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-blue-100 rounded-full flex items-center justify-center text-2xl flex-shrink-0">
                  {post.avatar}
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-bold text-gray-800">{post.author}</span>
                        <span className="text-xs text-gray-500">{post.class}</span>
                        <span className="px-2 py-0.5 bg-green-50 text-green-600 rounded-full text-xs">
                          {post.type}
                        </span>
                      </div>
                      <h4 className="font-medium text-gray-800 mb-2">{post.title}</h4>
                    </div>
                    {post.status === '热门' && (
                      <span className="px-2 py-1 bg-red-50 text-red-600 rounded-full text-xs flex items-center gap-1">
                        <TrendingUp className="h-3 w-3" />
                        热门
                      </span>
                    )}
                    {post.status === '已解决' && (
                      <span className="px-2 py-1 bg-green-50 text-green-600 rounded-full text-xs">
                        ✓ 已解决
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">{post.content}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-400">{post.time}</span>
                    <div className="flex items-center gap-4 text-xs text-gray-500">
                      <button className="flex items-center gap-1 hover:text-red-500 transition-colors">
                        <Heart className="h-4 w-4" />
                        {post.likes}
                      </button>
                      <button className="flex items-center gap-1 hover:text-blue-500 transition-colors">
                        <MessageSquare className="h-4 w-4" />
                        {post.replies}
                      </button>
                      <span className="flex items-center gap-1">
                        <Eye className="h-4 w-4" />
                        {post.views}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Community Guidelines */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl border border-green-100 p-6"
      >
        <h3 className="text-lg font-bold text-gray-800 mb-3">社区规范</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
          <div className="flex items-start gap-2">
            <span className="text-green-600">✓</span>
            <span>尊重他人，友善交流</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-green-600">✓</span>
            <span>分享有价值的学习内容</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-green-600">✓</span>
            <span>提问前先搜索是否有类似问题</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-green-600">✓</span>
            <span>标注清晰的标签便于分类</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
