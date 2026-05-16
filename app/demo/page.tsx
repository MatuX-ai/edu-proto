'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, School, Building2, GraduationCap, Code, BookOpen, Activity, Zap } from 'lucide-react';

const roles = [
  { id: 'teacher', name: '教师端', icon: Users },
  { id: 'institution', name: '机构管理员', icon: Building2 },
  { id: 'school', name: '学校管理员', icon: School },
  { id: 'bureau', name: '教育局', icon: GraduationCap },
];

export default function DemoPage() {
  const [activeRole, setActiveRole] = useState('teacher');
  const [teacherTab, setTeacherTab] = useState<'overview' | 'students' | 'courses' | 'analytics'>('overview');

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-primary mb-4">多角色智能管理中枢</h1>
        <p className="max-w-[700px] mx-auto text-gray-500">
          为不同教育场景提供定制化的数据看板与决策支持。
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <a href="/student-dashboard" className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-accent text-white hover:bg-accent/90 h-10 px-6">
            查看学生端演示
          </a>
        </div>
      </div>

      {/* Role Switcher */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {roles.map((role) => (
          <button
            key={role.id}
            onClick={() => setActiveRole(role.id)}
            className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all ${
              activeRole === role.id
                ? 'bg-primary text-white shadow-lg scale-105'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            <role.icon className="h-5 w-5" />
            <span>{role.name}</span>
          </button>
        ))}
      </div>

      {/* Dashboard Preview */}
      <motion.div
        key={activeRole}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="rounded-xl border bg-card text-card-foreground shadow-sm overflow-hidden"
      >
        <div className="p-6 bg-slate-50 border-b flex justify-between items-center">
          <h2 className="text-xl font-semibold">{roles.find(r => r.id === activeRole)?.name} - 实时概览</h2>
          <span className="text-xs font-mono text-green-600 bg-green-100 px-2 py-1 rounded">Live Data</span>
        </div>

        {/* Teacher Dashboard Tabs */}
        {activeRole === 'teacher' && (
          <div className="border-b px-6">
            <div className="flex gap-6">
              {[
                { id: 'overview', label: '总览' },
                { id: 'students', label: '学生管理' },
                { id: 'courses', label: '课程备课' },
                { id: 'analytics', label: '数据分析' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setTeacherTab(tab.id as 'overview' | 'students' | 'courses' | 'analytics')}
                  className={`py-3 text-sm font-medium border-b-2 transition-colors ${
                    teacherTab === tab.id
                      ? 'border-accent text-accent'
                      : 'border-transparent text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="p-6">
          {/* Teacher Overview Tab */}
          {activeRole === 'teacher' && teacherTab === 'overview' && (
            <div className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {[
                  { label: '我的班级', value: '3', sub: '个班级', color: 'blue' },
                  { label: '学生总数', value: '128', sub: '人', color: 'green' },
                  { label: '本周课程', value: '15', sub: '节课', color: 'purple' },
                  { label: '待批改作业', value: '23', sub: '份', color: 'orange' }
                ].map((stat, i) => (
                  <div key={i} className="p-4 rounded-lg border bg-white">
                    <div className="text-sm text-slate-600 mb-1">{stat.label}</div>
                    <div className="text-3xl font-bold text-slate-900">{stat.value}</div>
                    <div className="text-xs text-slate-500 mt-1">{stat.sub}</div>
                  </div>
                ))}
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="p-5 rounded-lg border bg-white">
                  <h3 className="font-bold mb-4">今日课程安排</h3>
                  <div className="space-y-3">
                    {[
                      { time: '08:00-09:30', course: 'Python 编程基础', class: '三年级1班', room: '机房A' },
                      { time: '10:00-11:30', course: 'Arduino 硬件开发', class: '四年级2班', room: '实验室B' },
                      { time: '14:00-15:30', course: '机器人编程', class: '五年级1班', room: '创客空间' }
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-4 p-3 bg-slate-50 rounded-lg">
                        <div className="text-xs font-mono text-slate-600 min-w-[100px]">{item.time}</div>
                        <div className="flex-1">
                          <div className="text-sm font-medium">{item.course}</div>
                          <div className="text-xs text-slate-500">{item.class} · {item.room}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-5 rounded-lg border bg-white">
                  <h3 className="font-bold mb-4">最近动态</h3>
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
            </div>
          )}

          {/* Students Management Tab */}
          {activeRole === 'teacher' && teacherTab === 'students' && (
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="font-bold text-lg">学生列表</h3>
                <input
                  type="text"
                  placeholder="搜索学生..."
                  className="px-4 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>
              <div className="overflow-x-auto">
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
                      <tr key={i} className="hover:bg-slate-50">
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
            </div>
          )}

          {/* Courses Tab */}
          {activeRole === 'teacher' && teacherTab === 'courses' && (
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="font-bold text-lg">我的课程</h3>
                <button className="px-4 py-2 bg-accent text-white rounded-lg text-sm font-medium hover:bg-accent/90">
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
                  <div key={i} className="p-5 rounded-lg border bg-white hover:shadow-md transition-shadow">
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
                      <button className="flex-1 py-2 bg-slate-100 rounded-lg text-sm font-medium hover:bg-slate-200">
                        编辑课程
                      </button>
                      <button className="flex-1 py-2 bg-accent text-white rounded-lg text-sm font-medium hover:bg-accent/90">
                        查看详情
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Analytics Tab */}
          {activeRole === 'teacher' && teacherTab === 'analytics' && (
            <div className="space-y-6">
              <h3 className="font-bold text-lg">学习数据分析</h3>
              <div className="grid gap-6 md:grid-cols-3">
                <div className="p-5 rounded-lg border bg-white">
                  <h4 className="text-sm text-slate-600 mb-2">平均完成率</h4>
                  <div className="text-3xl font-bold text-accent">78.5%</div>
                  <p className="text-xs text-green-600 mt-2">↑ 5.2% 较上月</p>
                </div>
                <div className="p-5 rounded-lg border bg-white">
                  <h4 className="text-sm text-slate-600 mb-2">平均学习时长</h4>
                  <div className="text-3xl font-bold text-purple-600">4.2h</div>
                  <p className="text-xs text-green-600 mt-2">↑ 0.8h 较上月</p>
                </div>
                <div className="p-5 rounded-lg border bg-white">
                  <h4 className="text-sm text-slate-600 mb-2">作业提交率</h4>
                  <div className="text-3xl font-bold text-green-600">92%</div>
                  <p className="text-xs text-green-600 mt-2">↑ 3% 较上月</p>
                </div>
              </div>

              <div className="p-5 rounded-lg border bg-white">
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
            </div>
          )}

          {/* Other Roles Placeholder */}
          {activeRole !== 'teacher' && (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="p-4 rounded-lg border bg-white">
                <div className="text-sm font-medium text-muted-foreground">STEM 课程完成率</div>
                <div className="text-2xl font-bold mt-1">87.5%</div>
                <div className="text-xs text-green-500 mt-1">+12% 较上月</div>
              </div>
              <div className="p-4 rounded-lg border bg-white">
                <div className="text-sm font-medium text-muted-foreground">AI 辅助实验次数</div>
                <div className="text-2xl font-bold mt-1">1,240</div>
                <div className="text-xs text-blue-500 mt-1">活跃度高</div>
              </div>
              <div className="p-4 rounded-lg border bg-white">
                <div className="text-sm font-medium text-muted-foreground">硬件设备在线数</div>
                <div className="text-2xl font-bold mt-1">356 / 400</div>
                <div className="text-xs text-orange-500 mt-1">维护中: 12</div>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}
