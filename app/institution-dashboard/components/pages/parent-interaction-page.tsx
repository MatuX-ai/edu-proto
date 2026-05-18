'use client';

import { motion } from 'framer-motion';
import { Handshake, MessageSquare, Bell, Users, Search, Filter, Plus } from 'lucide-react';

export default function ParentInteractionPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">家校互动平台</h2>
          <p className="text-sm text-gray-500 mt-1">加强家长与学校的沟通，共同关注学生STEM成长</p>
        </div>
        <button className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
          <Plus className="h-4 w-4" />
          <span>发送通知</span>
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { label: '活跃家长', value: '298', icon: Users, color: 'green' },
          { label: '消息通知', value: '156', icon: MessageSquare, color: 'blue' },
          { label: '作品分享', value: '89', icon: Bell, color: 'purple' },
          { label: '反馈收集', value: '45', icon: Handshake, color: 'orange' },
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

      {/* Notifications Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden"
      >
        <div className="p-6 border-b border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-gray-800">家长通知记录</h3>
            <div className="flex items-center gap-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="搜索通知..."
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
        <table className="w-full text-left">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase">通知标题</th>
              <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase">类型</th>
              <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase">发送时间</th>
              <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase">接收人数</th>
              <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase">状态</th>
              <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase">操作</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {[
              { title: 'STEM课程报名开始通知', type: '课程通知', time: '2024-05-15 10:00', recipients: '298', status: '已送达' },
              { title: '机器人竞赛培训安排', type: '活动通知', time: '2024-05-14 14:30', recipients: '45', status: '已送达' },
              { title: '学生作品展示邀请', type: '作品分享', time: '2024-05-13 09:00', recipients: '298', status: '已送达' },
              { title: '实验室安全须知', type: '安全通知', time: '2024-05-12 16:00', recipients: '298', status: '已送达' },
              { title: '家长开放日邀请函', type: '活动通知', time: '2024-05-10 11:00', recipients: '298', status: '已送达' },
            ].map((notification, i) => (
              <tr key={i} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 text-sm font-medium text-gray-800">{notification.title}</td>
                <td className="px-6 py-4">
                  <span className="px-2 py-1 bg-green-50 text-green-600 rounded-full text-xs">
                    {notification.type}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">{notification.time}</td>
                <td className="px-6 py-4 text-sm text-gray-600">{notification.recipients}人</td>
                <td className="px-6 py-4">
                  <span className="px-2 py-1 bg-green-50 text-green-600 rounded-full text-xs">
                    {notification.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <button className="text-green-600 hover:text-green-700 text-sm font-medium mr-3">
                    查看
                  </button>
                  <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                    重发
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </motion.div>

      {/* Recent Feedback */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-white rounded-xl border border-gray-100 shadow-sm p-6"
      >
        <h3 className="text-lg font-bold text-gray-800 mb-4">家长反馈</h3>
        <div className="space-y-4">
          {[
            { parent: '李明家长', content: '孩子对Arduino课程非常感兴趣，希望能增加课时。', time: '2小时前', reply: '感谢您的反馈，我们会考虑增加课时安排。' },
            { parent: '王芳家长', content: '3D打印课程很有趣，孩子回家一直在分享学到的知识。', time: '5小时前', reply: '很高兴听到这样的反馈！' },
            { parent: '张伟家长', content: '希望能有更多关于AI的课程，孩子对这个领域很感兴趣。', time: '1天前', reply: '我们正在规划AI相关课程，敬请期待。' },
            { parent: '赵丽家长', content: '课程安排合理，老师很负责任。', time: '2天前', reply: '谢谢您的认可！' },
          ].map((feedback, i) => (
            <div key={i} className="border border-gray-200 rounded-lg p-4 hover:border-green-300 hover:shadow-md transition-all">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <div className="font-medium text-gray-800">{feedback.parent}</div>
                  <div className="text-xs text-gray-500">{feedback.time}</div>
                </div>
              </div>
              <div className="text-sm text-gray-700 mb-2">{feedback.content}</div>
              {feedback.reply && (
                <div className="text-sm text-green-600 bg-green-50 p-3 rounded-lg">
                  <span className="font-medium">回复：</span>{feedback.reply}
                </div>
              )}
            </div>
          ))}
        </div>
      </motion.div>

      {/* Upcoming Events for Parents */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-white rounded-xl border border-gray-100 shadow-sm p-6"
      >
        <h3 className="text-lg font-bold text-gray-800 mb-4">近期家长活动</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { date: '2024-05-25', name: 'STEM家长开放日', type: '开放日', location: '学校创客空间' },
            { date: '2024-06-01', name: '学生作品展示会', type: '展示会', location: '学校礼堂' },
            { date: '2024-06-15', name: '亲子编程工作坊', type: '工作坊', location: 'STEM-101' },
          ].map((event, i) => (
            <div key={i} className="border border-gray-200 rounded-lg p-4 hover:border-green-300 hover:shadow-md transition-all">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-bold text-green-600">{event.date}</span>
                <span className="px-2 py-1 bg-green-50 text-green-600 rounded-full text-xs">
                  {event.type}
                </span>
              </div>
              <div className="font-medium text-gray-800 mb-1">{event.name}</div>
              <div className="text-xs text-gray-500">{event.location}</div>
              <button className="mt-3 w-full py-2 bg-green-50 text-green-600 rounded-lg text-sm hover:bg-green-100 transition-colors">
                报名参加
              </button>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
