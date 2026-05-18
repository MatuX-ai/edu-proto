'use client';

import { motion } from 'framer-motion';
import { Cpu, Battery, Wifi, Zap, Box, Code, Camera, MessageSquare, Play, Award } from 'lucide-react';
import { DeviceMode } from '../../types';

interface HomePageProps {
  mode: DeviceMode;
  onNavigate?: (page: string) => void;
}

export function HomePage({ mode, onNavigate }: HomePageProps) {
  const isPhone = mode === 'phone';

  // 手机模式内容
  if (isPhone) {
    return (
      <div className="px-5 space-y-6">
        {/* Hardware Status Card */}
        <motion.div
          whileHover={{ y: -2 }}
          className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-5 text-white shadow-xl"
        >
          <div className="flex justify-between items-start mb-3">
            <div className="flex items-center space-x-2">
              <Cpu className="h-5 w-5 text-blue-500" />
              <span className="font-bold text-sm">ESP32 开发板</span>
            </div>
            <span className="text-[10px] bg-green-500/20 text-green-400 px-2 py-0.5 rounded-full">在线</span>
          </div>
          <div className="grid grid-cols-2 gap-3 text-xs">
            <div className="bg-white/10 rounded-lg p-2 flex items-center space-x-2">
              <Battery className="h-3 w-3 text-green-400" /> <span>85%</span>
            </div>
            <div className="bg-white/10 rounded-lg p-2 flex items-center space-x-2">
              <Wifi className="h-3 w-3 text-blue-400" /> <span>-42dBm</span>
            </div>
          </div>
        </motion.div>

        {/* AI Recommendation */}
        <div>
          <h3 className="font-bold text-slate-900 text-base mb-3 flex items-center gap-2">
            <span className="w-1 h-5 bg-gradient-to-b from-blue-600 to-purple-600 rounded-full"></span>
            AI 推荐项目
          </h3>
          <motion.div
            whileTap={{ scale: 0.98 }}
            onClick={() => onNavigate?.('项目详情')}
            className="bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-2xl p-5 text-white shadow-xl relative overflow-hidden cursor-pointer group"
          >
            <Zap className="absolute -right-2 -bottom-2 h-20 w-20 text-white/10" />
            <h4 className="font-bold text-base mb-1">智能感应小夜灯</h4>
            <p className="text-[10px] text-indigo-100 mb-3 line-clamp-2">利用光敏电阻实现环境光自适应控制。</p>
            <button className="bg-white/95 backdrop-blur text-indigo-600 text-xs font-bold px-5 py-2.5 rounded-full flex items-center gap-1.5 hover:bg-white hover:shadow-lg transition-all group-hover:scale-105">
              <Play className="h-3.5 w-3.5 fill-current" /> 开始实验
            </button>
          </motion.div>
        </div>

        {/* Quick Actions Grid */}
        <div>
          <h3 className="font-bold text-slate-900 text-base mb-3 flex items-center gap-2">
            <span className="w-1 h-5 bg-gradient-to-b from-blue-600 to-purple-600 rounded-full"></span>
            常用工具
          </h3>
          <div className="grid grid-cols-4 gap-4">
            {[
              { icon: Code, label: '代码', color: 'text-blue-600', bg: 'from-blue-50 to-blue-100' },
              { icon: Box, label: '3D模型', color: 'text-orange-600', bg: 'from-orange-50 to-orange-100' },
              { icon: Camera, label: 'AR扫描', color: 'text-green-600', bg: 'from-green-50 to-green-100' },
              { icon: MessageSquare, label: 'AI助手', color: 'text-purple-600', bg: 'from-purple-50 to-purple-100' }
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.08, y: -4 }}
                whileTap={{ scale: 0.95 }}
                className="flex flex-col items-center gap-2.5 cursor-pointer"
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.bg} flex items-center justify-center shadow-md hover:shadow-xl transition-all`}>
                  <item.icon className={`h-7 w-7 ${item.color}`} />
                </div>
                <span className="text-[11px] font-semibold text-slate-700">{item.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Today's Tasks */}
        <div>
          <h3 className="font-bold text-slate-900 text-base mb-3 flex items-center gap-2">
            <span className="w-1 h-5 bg-gradient-to-b from-blue-600 to-purple-600 rounded-full"></span>
            今日学习任务
          </h3>
          <div className="space-y-2">
            {[
              { title: 'Python 基础语法', duration: '30分钟', progress: 75, completed: false, emoji: '🐍' },
              { title: 'Arduino LED实验', duration: '45分钟', progress: 100, completed: true, emoji: '💡' },
              { title: '机器学习测验', duration: '25分钟', progress: 30, completed: false, emoji: '🤖' }
            ].map((task, i) => (
              <motion.div
                key={i}
                whileTap={{ scale: 0.98 }}
                className={`bg-white rounded-xl p-3 border flex items-center gap-3 ${task.completed ? 'opacity-75' : ''}`}
              >
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-lg ${
                  task.completed ? 'bg-green-100' : 'bg-blue-50'
                }`}>
                  {task.emoji}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-1">
                    <h4 className={`text-xs font-bold ${task.completed ? 'line-through text-slate-500' : 'text-slate-900'}`}>
                      {task.title}
                    </h4>
                    <span className="text-[10px] text-slate-500">{task.duration}</span>
                  </div>
                  <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                    <div 
                      className={`h-full rounded-full ${task.completed ? 'bg-green-500' : 'bg-blue-600'}`}
                      style={{ width: `${task.progress}%` }}
                    ></div>
                  </div>
                </div>
                {task.completed && (
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Learning Stats */}
        <div>
          <h3 className="font-bold text-slate-900 text-base mb-3 flex items-center gap-2">
            <span className="w-1 h-5 bg-gradient-to-b from-blue-600 to-purple-600 rounded-full"></span>
            本周学习
          </h3>
          <div className="grid grid-cols-2 gap-3">
            {[
              { value: '12.5', label: '学习时长', unit: '小时', color: 'from-blue-500 to-blue-600' },
              { value: '8', label: '完成任务', unit: '个', color: 'from-green-500 to-green-600' },
              { value: '450', label: '获得积分', unit: '分', color: 'from-orange-500 to-orange-600' },
              { value: '3', label: '连续天数', unit: '天', color: 'from-purple-500 to-purple-600' }
            ].map((stat, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -2 }}
                className={`bg-gradient-to-br ${stat.color} rounded-xl p-3 text-white`}
              >
                <div className="text-2xl font-bold mb-0.5">{stat.value}</div>
                <div className="text-[10px] opacity-90">{stat.label} ({stat.unit})</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // 平板模式内容
  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="mb-8">
        <h2 className="text-4xl font-bold text-slate-900 mb-2">你好，同学 👋</h2>
        <p className="text-lg text-slate-600">
          {new Date().toLocaleDateString('zh-CN', { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' })}
        </p>
      </div>

      {/* Quick Actions Grid */}
      <div className="grid grid-cols-4 gap-5 mb-8">
        {[
          { icon: Code, label: '我的课程', color: 'from-blue-500 to-blue-600', emoji: '📚', page: 'courses' },
          { icon: Camera, label: 'AR 实验室', color: 'from-purple-500 to-purple-600', emoji: '🥽', page: 'ar-lab' },
          { icon: Box, label: '实战项目', color: 'from-green-500 to-green-600', emoji: '🚀', page: 'projects' },
          { icon: Award, label: '学习成就', color: 'from-orange-500 to-orange-600', emoji: '🏆', page: 'achievements' }
        ].map((item, i) => (
          <motion.button
            key={i}
            whileHover={{ scale: 1.05, y: -4 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onNavigate?.(item.page)}
            className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all flex flex-col items-center gap-3"
          >
            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-3xl`}>
              {item.emoji}
            </div>
            <span className="font-semibold text-slate-900">{item.label}</span>
          </motion.button>
        ))}
      </div>

      {/* Today's Tasks */}
      <div className="mb-8">
        <h3 className="text-xl font-bold text-slate-900 mb-4">今日学习任务</h3>
        <div className="bg-white rounded-2xl p-4 shadow-md space-y-3">
          {[
            { title: 'Python 基础语法 - 变量与数据类型', duration: '30分钟', type: '视频课程', progress: 75, completed: false },
            { title: 'Arduino 入门 - LED 控制实验', duration: '45分钟', type: '实践操作', progress: 100, completed: true },
            { title: '机器学习基础 - 监督学习概念', duration: '25分钟', type: '互动测验', progress: 30, completed: false }
          ].map((task, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.01 }}
              className={`flex items-center gap-4 p-4 rounded-xl transition-colors ${
                task.completed ? 'bg-slate-50' : 'hover:bg-blue-50 cursor-pointer'
              }`}
            >
              <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                task.completed ? 'bg-green-500 border-green-500 text-white' : 'border-slate-300'
              }`}>
                {task.completed && '✓'}
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-slate-900 text-sm mb-1">{task.title}</h4>
                <p className="text-xs text-slate-500">{task.duration} · {task.type}</p>
              </div>
              <div className="flex items-center gap-3 min-w-[120px]">
                <div className="flex-1 h-1.5 bg-slate-200 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full" style={{ width: `${task.progress}%` }}></div>
                </div>
                <span className="text-xs font-semibold text-blue-600 min-w-[35px] text-right">{task.progress}%</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Learning Stats */}
      <div className="mb-8">
        <h3 className="text-xl font-bold text-slate-900 mb-4">本周学习统计</h3>
        <div className="grid grid-cols-4 gap-4">
          {[
            { value: '12.5', label: '学习时长(小时)' },
            { value: '8', label: '完成任务' },
            { value: '450', label: '获得积分' },
            { value: '3', label: '连续天数' }
          ].map((stat, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -2 }}
              className="bg-white rounded-xl p-6 text-center shadow-md"
            >
              <div className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</div>
              <div className="text-sm text-slate-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Recommended Courses */}
      <div>
        <h3 className="text-xl font-bold text-slate-900 mb-4">为你推荐</h3>
        <div className="grid grid-cols-3 gap-5">
          {[
            { title: '机器人编程进阶', desc: '学习传感器应用和自动控制原理', level: '中级', duration: '12课时', emoji: '🤖', gradient: 'from-indigo-500 to-purple-600' },
            { title: 'AI 视觉识别', desc: '掌握图像处理和模式识别技术', level: '高级', duration: '16课时', emoji: '👁️', gradient: 'from-pink-500 to-red-500' },
            { title: '3D 建模与设计', desc: '使用 Blender 创建三维模型', level: '初级', duration: '10课时', emoji: '🎨', gradient: 'from-cyan-500 to-blue-500' }
          ].map((course, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -4 }}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all cursor-pointer"
            >
              <div className={`h-40 bg-gradient-to-br ${course.gradient} flex items-center justify-center text-6xl`}>
                {course.emoji}
              </div>
              <div className="p-5">
                <h4 className="font-bold text-slate-900 mb-2">{course.title}</h4>
                <p className="text-sm text-slate-600 mb-3 line-clamp-2">{course.desc}</p>
                <div className="flex gap-3 text-xs text-slate-500 mb-4">
                  <span>{course.level}</span>
                  <span>·</span>
                  <span>{course.duration}</span>
                </div>
                <button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-2.5 rounded-xl font-semibold text-sm hover:shadow-lg transition-all">
                  开始学习
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
