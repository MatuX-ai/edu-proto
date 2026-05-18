'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Code, BookOpen, Activity, TrendingUp, Calendar, CheckCircle, AlertCircle } from 'lucide-react';

export default function TeacherDashboardPage() {
  const [activeTab, setActiveTab] = useState<'overview' | 'students' | 'courses' | 'analytics'>('overview');

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <div className="flex items-center gap-3 mb-4">
          <Users className="h-8 w-8 text-accent" />
          <div>
            <h1 className="text-3xl font-bold text-primary">教师端控制台</h1>
            <p className="text-gray-500 mt-1">管理班级、课程和学生学习的智能平台</p>
          </div>
        </div>
      </motion.div>

      {/* Navigation Tabs */}
      <div className="border-b mb-8">
        <div className="flex gap-6">
          {[
            { id: 'overview', label: '总览', icon: Activity },
            { id: 'students', label: '学生管理', icon: Users },
            { id: 'courses', label: '课程备课', icon: BookOpen },
            { id: 'analytics', label: '数据分析', icon: TrendingUp }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as 'overview' | 'students' | 'courses' | 'analytics')}
              className={`flex items-center gap-2 py-3 text-sm font-medium border-b-2 transition-colors ${
                activeTab === tab.id
                  ? 'border-accent text-accent'
                  : 'border-transparent text-slate-600 hover:text-slate-900'
              }`}
            >
              <tab.icon className="h-4 w-4" />
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Overview Tab */}
      {activeTab === 'overview' && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          {/* Stats Cards */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { label: '我的班级', value: '3', sub: '个班级', icon: Users, color: 'blue' },
              { label: '学生总数', value: '128', sub: '人', icon: Users, color: 'green' },
              { label: '本周课程', value: '15', sub: '节课', icon: Calendar, color: 'purple' },
              { label: '待批改作业', value: '23', sub: '份', icon: CheckCircle, color: 'orange' }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-lg border bg-white shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="text-sm text-slate-600">{stat.label}</div>
                  <stat.icon className={`h-5 w-5 text-${stat.color}-500`} />
                </div>
                <div className="text-3xl font-bold text-slate-900">{stat.value}</div>
                <div className="text-xs text-slate-500 mt-1">{stat.sub}</div>
              </motion.div>
            ))}
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {/* Today's Schedule */}
            <div className="p-6 rounded-lg border bg-white shadow-sm">
              <h3 className="font-bold mb-4 flex items-center gap-2">
                <Calendar className="h-5 w-5 text-accent" />
                今日课程安排
              </h3>
              <div className="space-y-3">
                {[
                  { time: '08:00-09:30', course: 'Python 编程基础', class: '三年级1班', room: '机房A' },
                  { time: '10:00-11:30', course: 'Arduino 硬件开发', class: '四年级2班', room: '实验室B' },
                  { time: '14:00-15:30', course: '机器人编程', class: '五年级1班', room: '创客空间' }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                    <div className="text-xs font-mono text-slate-600 min-w-[100px]">{item.time}</div>
                    <div className="flex-1">
                      <div className="text-sm font-medium">{item.course}</div>
                      <div className="text-xs text-slate-500">{item.class} · {item.room}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Activity */}
            <div className="p-6 rounded-lg border bg-white shadow-sm">
              <h3 className="font-bold mb-4 flex items-center gap-2">
                <Activity className="h-5 w-5 text-accent" />
                最近动态
              </h3>
              <div className="space-y-3">
                {[
                  { action: '张三 完成了 Arduino LED 实验', time: '10分钟前', type: 'success' },
                  { action: '李四 提交了 Python 作业', time: '30分钟前', type: 'info' },
                  { action: '王五 请求帮助：变量作用域问题', time: '1小时前', type: 'warning' },
                  { action: '赵六 获得了"代码大师"勋章', time: '2小时前', type: 'success' }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className={`w-2 h-2 rounded-full mt-2 ${
                      item.type === 'success' ? 'bg-green-500' :
                      item.type === 'warning' ? 'bg-orange-500' : 'bg-blue-500'
                    }`} />
                    <div className="flex-1">
                      <p className="text-sm text-slate-900">{item.action}</p>
                      <p className="text-xs text-slate-500 mt-1">{item.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Students Management Tab */}
      {activeTab === 'students' && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-4"
        >
          <div className="flex justify-between items-center">
            <h3 className="font-bold text-lg">学生列表</h3>
            <input
              type="text"
              placeholder="搜索学生..."
              className="px-4 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>
          <div className="overflow-x-auto rounded-lg border">
            <table className="w-full">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-slate-600">姓名</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-slate-600">班级</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-slate-600">学习进度</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-slate-600">完成项目</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-slate-600">状态</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {[
                  { name: '张三', class: '三年级1班', progress: 85, projects: 12, status: 'active' },
                  { name: '李四', class: '三年级1班', progress: 72, projects: 9, status: 'active' },
                  { name: '王五', class: '四年级2班', progress: 45, projects: 5, status: 'inactive' },
                  { name: '赵六', class: '四年级2班', progress: 93, projects: 15, status: 'active' },
                  { name: '孙七', class: '五年级1班', progress: 60, projects: 7, status: 'active' }
                ].map((student, i) => (
                  <tr key={i} className="hover:bg-slate-50 transition-colors">
                    <td className="px-4 py-3 text-sm font-medium">{student.name}</td>
                    <td className="px-4 py-3 text-sm text-slate-600">{student.class}</td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <div className="flex-1 h-2 bg-slate-200 rounded-full overflow-hidden max-w-[100px]">
                          <div className="h-full bg-accent rounded-full" style={{ width: `${student.progress}%` }}></div>
                        </div>
                        <span className="text-xs text-slate-600">{student.progress}%</span>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-sm">{student.projects}</td>
                    <td className="px-4 py-3">
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        student.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-slate-100 text-slate-600'
                      }`}>
                        {student.status === 'active' ? '活跃' : '不活跃'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      )}

      {/* Courses Tab */}
      {activeTab === 'courses' && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-4"
        >
          <div className="flex justify-between items-center">
            <h3 className="font-bold text-lg">我的课程</h3>
            <button className="px-4 py-2 bg-accent text-white rounded-lg text-sm font-medium hover:bg-accent/90 transition-colors">
              + 创建课程
            </button>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              { title: 'Python 编程基础', students: 45, lessons: 20, progress: 75, status: '进行中' },
              { title: 'Arduino 硬件开发', students: 38, lessons: 15, progress: 100, status: '已完成' },
              { title: '机器人编程进阶', students: 32, lessons: 18, progress: 40, status: '进行中' },
              { title: 'AI 视觉识别入门', students: 28, lessons: 12, progress: 0, status: '未开始' }
            ].map((course, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="p-5 rounded-lg border bg-white hover:shadow-md transition-shadow"
              >
                <div className="flex justify-between items-start mb-3">
                  <h4 className="font-bold text-lg">{course.title}</h4>
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    course.status === '已完成' ? 'bg-green-100 text-green-700' :
                    course.status === '进行中' ? 'bg-blue-100 text-blue-700' :
                    'bg-slate-100 text-slate-600'
                  }`}>
                    {course.status}
                  </span>
                </div>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600">学生数</span>
                    <span className="font-medium">{course.students} 人</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600">课时数</span>
                    <span className="font-medium">{course.lessons} 节</span>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-slate-600">教学进度</span>
                      <span className="font-medium text-accent">{course.progress}%</span>
                    </div>
                    <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                      <div className="h-full bg-accent rounded-full" style={{ width: `${course.progress}%` }}></div>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="flex-1 py-2 bg-slate-100 rounded-lg text-sm font-medium hover:bg-slate-200 transition-colors">
                    编辑课程
                  </button>
                  <button className="flex-1 py-2 bg-accent text-white rounded-lg text-sm font-medium hover:bg-accent/90 transition-colors">
                    查看详情
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}

      {/* Analytics Tab */}
      {activeTab === 'analytics' && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          <h3 className="font-bold text-lg">学习数据分析</h3>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="p-5 rounded-lg border bg-white shadow-sm">
              <h4 className="text-sm text-slate-600 mb-2">平均完成率</h4>
              <div className="text-3xl font-bold text-accent">78.5%</div>
              <p className="text-xs text-green-600 mt-2 flex items-center gap-1">
                <TrendingUp className="h-3 w-3" /> ↑ 5.2% 较上月
              </p>
            </div>
            <div className="p-5 rounded-lg border bg-white shadow-sm">
              <h4 className="text-sm text-slate-600 mb-2">平均学习时长</h4>
              <div className="text-3xl font-bold text-purple-600">4.2h</div>
              <p className="text-xs text-green-600 mt-2 flex items-center gap-1">
                <TrendingUp className="h-3 w-3" /> ↑ 0.8h 较上月
              </p>
            </div>
            <div className="p-5 rounded-lg border bg-white shadow-sm">
              <h4 className="text-sm text-slate-600 mb-2">作业提交率</h4>
              <div className="text-3xl font-bold text-green-600">92%</div>
              <p className="text-xs text-green-600 mt-2 flex items-center gap-1">
                <TrendingUp className="h-3 w-3" /> ↑ 3% 较上月
              </p>
            </div>
          </div>

          <div className="p-6 rounded-lg border bg-white shadow-sm">
            <h4 className="font-bold mb-4">各班级学习情况对比</h4>
            <div className="space-y-4">
              {[
                { class: '三年级1班', completion: 85, avgTime: 4.5, submissions: 95 },
                { class: '四年级2班', completion: 72, avgTime: 3.8, submissions: 88 },
                { class: '五年级1班', completion: 68, avgTime: 4.2, submissions: 90 }
              ].map((item, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">{item.class}</span>
                    <span className="text-slate-600">完成率 {item.completion}%</span>
                  </div>
                  <div className="w-full h-3 bg-slate-200 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full" style={{ width: `${item.completion}%` }}></div>
                  </div>
                  <div className="flex gap-4 text-xs text-slate-500">
                    <span>平均时长: {item.avgTime}h</span>
                    <span>提交率: {item.submissions}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
