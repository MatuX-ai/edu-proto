'use client';

import { motion } from 'framer-motion';
import { Building2, Users, BookOpen, TrendingUp, DollarSign, Award, AlertCircle, GraduationCap, School, Briefcase, Landmark } from 'lucide-react';
import { useState } from 'react';

export default function InstitutionDashboardPage() {
  const [activeTab, setActiveTab] = useState<'training' | 'k12' | 'vocational' | 'education-bureau'>('training');

  // 不同机构类型的数据配置
  const institutionTypes = {
    training: {
      title: '培训机构',
      icon: Briefcase,
      stats: [
        { label: '活跃校区', value: '5', sub: '个校区', icon: Building2, color: 'blue' },
        { label: '教师总数', value: '48', sub: '人', icon: Users, color: 'green' },
        { label: '在读学生', value: '1,256', sub: '人', icon: Users, color: 'purple' },
        { label: '本月营收', value: '¥128K', sub: '元', icon: DollarSign, color: 'orange' }
      ],
      campuses: [
        { name: '朝阳校区', students: 320, teachers: 12, courses: 45, satisfaction: 92 },
        { name: '海淀校区', students: 285, teachers: 10, courses: 38, satisfaction: 89 },
        { name: '西城校区', students: 245, teachers: 9, courses: 32, satisfaction: 94 },
        { name: '东城校区', students: 218, teachers: 8, courses: 28, satisfaction: 87 },
        { name: '丰台校区', students: 188, teachers: 9, courses: 25, satisfaction: 91 }
      ],
      courses: [
        { name: 'Python 编程基础', enrollments: 456, completion: 85, revenue: '¥45.6K' },
        { name: 'Arduino 硬件开发', enrollments: 389, completion: 78, revenue: '¥38.9K' },
        { name: '机器人编程进阶', enrollments: 342, completion: 72, revenue: '¥34.2K' },
        { name: 'AI 视觉识别入门', enrollments: 298, completion: 68, revenue: '¥29.8K' },
        { name: 'Scratch 创意编程', enrollments: 267, completion: 92, revenue: '¥26.7K' }
      ],
      teachers: [
        { name: '陈老师', campus: '朝阳校区', rating: 4.9, students: 156, courses: 8 },
        { name: '李老师', campus: '海淀校区', rating: 4.8, students: 142, courses: 7 },
        { name: '王老师', campus: '西城校区', rating: 4.9, students: 138, courses: 6 },
        { name: '张老师', campus: '朝阳校区', rating: 4.7, students: 125, courses: 7 }
      ]
    },
    k12: {
      title: 'K12学校',
      icon: School,
      stats: [
        { label: '教学班级', value: '24', sub: '个班级', icon: Building2, color: 'blue' },
        { label: '在职教师', value: '36', sub: '人', icon: Users, color: 'green' },
        { label: '在校学生', value: '864', sub: '人', icon: Users, color: 'purple' },
        { label: '课程覆盖率', value: '95%', sub: '', icon: BookOpen, color: 'orange' }
      ],
      campuses: [
        { name: '一年级部', students: 180, teachers: 8, courses: 12, satisfaction: 96 },
        { name: '二年级部', students: 175, teachers: 7, courses: 12, satisfaction: 94 },
        { name: '三年级部', students: 168, teachers: 7, courses: 12, satisfaction: 95 },
        { name: '四年级部', students: 172, teachers: 7, courses: 12, satisfaction: 93 },
        { name: '五年级部', students: 169, teachers: 7, courses: 12, satisfaction: 97 }
      ],
      courses: [
        { name: 'STEM 创新课程', enrollments: 320, completion: 92, revenue: '校内课程' },
        { name: '人工智能启蒙', enrollments: 280, completion: 88, revenue: '校内课程' },
        { name: '机器人竞赛培训', enrollments: 245, completion: 85, revenue: '校内课程' },
        { name: '编程思维训练', enrollments: 220, completion: 90, revenue: '校内课程' },
        { name: '科学实验课', enrollments: 198, completion: 94, revenue: '校内课程' }
      ],
      teachers: [
        { name: '刘老师', campus: '一年级部', rating: 4.9, students: 180, courses: 6 },
        { name: '赵老师', campus: '二年级部', rating: 4.8, students: 175, courses: 6 },
        { name: '孙老师', campus: '三年级部', rating: 4.9, students: 168, courses: 6 },
        { name: '周老师', campus: '四年级部', rating: 4.7, students: 172, courses: 6 }
      ]
    },
    vocational: {
      title: '职业学校',
      icon: GraduationCap,
      stats: [
        { label: '专业系部', value: '8', sub: '个系部', icon: Building2, color: 'blue' },
        { label: '双师型教师', value: '62', sub: '人', icon: Users, color: 'green' },
        { label: '在校学生', value: '2,150', sub: '人', icon: Users, color: 'purple' },
        { label: '就业率', value: '96.5%', sub: '', icon: TrendingUp, color: 'orange' }
      ],
      campuses: [
        { name: '信息技术系', students: 420, teachers: 15, courses: 28, satisfaction: 91 },
        { name: '机械工程系', students: 380, teachers: 14, courses: 25, satisfaction: 89 },
        { name: '电子商务系', students: 350, teachers: 12, courses: 22, satisfaction: 93 },
        { name: '艺术设计系', students: 310, teachers: 11, courses: 20, satisfaction: 90 },
        { name: '汽车维修系', students: 290, teachers: 10, courses: 18, satisfaction: 88 }
      ],
      courses: [
        { name: 'Web 全栈开发', enrollments: 180, completion: 82, revenue: '专业课程' },
        { name: '工业机器人应用', enrollments: 165, completion: 78, revenue: '专业课程' },
        { name: '数字媒体设计', enrollments: 152, completion: 85, revenue: '专业课程' },
        { name: '新能源汽车技术', enrollments: 145, completion: 80, revenue: '专业课程' },
        { name: '跨境电商运营', enrollments: 138, completion: 88, revenue: '专业课程' }
      ],
      teachers: [
        { name: '黄老师', campus: '信息技术系', rating: 4.8, students: 180, courses: 5 },
        { name: '吴老师', campus: '机械工程系', rating: 4.9, students: 165, courses: 5 },
        { name: '郑老师', campus: '电子商务系', rating: 4.7, students: 152, courses: 5 },
        { name: '冯老师', campus: '艺术设计系', rating: 4.8, students: 145, courses: 5 }
      ]
    },
    'education-bureau': {
      title: '教育局',
      icon: Landmark,
      stats: [
        { label: '管辖学校', value: '156', sub: '所', icon: Building2, color: 'blue' },
        { label: '教师总数', value: '3,280', sub: '人', icon: Users, color: 'green' },
        { label: '在校学生', value: '45,600', sub: '人', icon: Users, color: 'purple' },
        { label: '教育投入', value: '¥2.8M', sub: '元', icon: DollarSign, color: 'orange' }
      ],
      campuses: [
        { name: '第一中学', students: 1850, teachers: 120, courses: 45, satisfaction: 92 },
        { name: '实验小学', students: 1620, teachers: 95, courses: 38, satisfaction: 95 },
        { name: '第二中学', students: 1580, teachers: 110, courses: 42, satisfaction: 90 },
        { name: '第三小学', students: 1420, teachers: 88, courses: 35, satisfaction: 93 },
        { name: '职业高中', students: 1380, teachers: 92, courses: 40, satisfaction: 89 }
      ],
      courses: [
        { name: '区域 STEM 教育计划', enrollments: 8500, completion: 88, revenue: '政府项目' },
        { name: '教师数字化培训', enrollments: 3280, completion: 92, revenue: '政府项目' },
        { name: '人工智能普及课程', enrollments: 6200, completion: 85, revenue: '政府项目' },
        { name: '创客教育推广', enrollments: 5800, completion: 90, revenue: '政府项目' },
        { name: '素质教育评估体系', enrollments: 4500, completion: 95, revenue: '政府项目' }
      ],
      teachers: [
        { name: '马校长', campus: '第一中学', rating: 4.9, students: 1850, courses: 12 },
        { name: '朱校长', campus: '实验小学', rating: 4.8, students: 1620, courses: 10 },
        { name: '胡校长', campus: '第二中学', rating: 4.9, students: 1580, courses: 11 },
        { name: '林校长', campus: '第三小学', rating: 4.7, students: 1420, courses: 9 }
      ]
    }
  };

  const currentData = institutionTypes[activeTab];
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <div className="flex items-center gap-3 mb-4">
          <Building2 className="h-8 w-8 text-accent" />
          <div>
            <h1 className="text-3xl font-bold text-primary">机构管理员控制台</h1>
            <p className="text-gray-500 mt-1">管理多校区、教师团队和整体运营数据的综合平台</p>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex gap-2 mt-6 overflow-x-auto pb-2">
          {([
            { key: 'training', label: '培训机构', icon: Briefcase },
            { key: 'k12', label: 'K12学校', icon: School },
            { key: 'vocational', label: '职业学校', icon: GraduationCap },
            { key: 'education-bureau', label: '教育局', icon: Landmark }
          ] as const).map((tab) => {
            const TabIconComponent = tab.icon;
            return (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg whitespace-nowrap transition-all ${
                  activeTab === tab.key
                    ? 'bg-accent text-white shadow-md'
                    : 'bg-white text-slate-600 hover:bg-slate-50 border'
                }`}
              >
                <TabIconComponent className="h-4 w-4" />
                <span className="text-sm font-medium">{tab.label}</span>
              </button>
            );
          })}
        </div>
      </motion.div>

      {/* Stats Overview */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8"
      >
        {currentData.stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + i * 0.1 }}
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
      </motion.div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Campus Performance */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="p-6 rounded-lg border bg-white shadow-sm"
        >
          <h3 className="font-bold mb-4 flex items-center gap-2">
            <Building2 className="h-5 w-5 text-accent" />
            各校区运营数据
          </h3>
          <div className="space-y-4">
            {currentData.campuses.map((campus, i) => (
              <div key={i} className="p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-medium">{campus.name}</h4>
                  <span className="text-xs text-green-600">满意度 {campus.satisfaction}%</span>
                </div>
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div>
                    <div className="text-slate-500 text-xs">学生数</div>
                    <div className="font-semibold">{campus.students}</div>
                  </div>
                  <div>
                    <div className="text-slate-500 text-xs">教师数</div>
                    <div className="font-semibold">{campus.teachers}</div>
                  </div>
                  <div>
                    <div className="text-slate-500 text-xs">课程数</div>
                    <div className="font-semibold">{campus.courses}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Course Analytics */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="p-6 rounded-lg border bg-white shadow-sm"
        >
          <h3 className="font-bold mb-4 flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-accent" />
            热门课程排行
          </h3>
          <div className="space-y-3">
            {currentData.courses.map((course, i) => (
              <div key={i} className="flex items-center gap-4 p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                <div className="w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center font-bold text-sm">
                  {i + 1}
                </div>
                <div className="flex-1">
                  <div className="text-sm font-medium">{course.name}</div>
                  <div className="text-xs text-slate-500">{course.enrollments} 人报名 · 完成率 {course.completion}%</div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-semibold text-accent">{course.revenue}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Teacher Performance & Alerts */}
      <div className="grid gap-6 lg:grid-cols-3 mt-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="lg:col-span-2 p-6 rounded-lg border bg-white shadow-sm"
        >
          <h3 className="font-bold mb-4 flex items-center gap-2">
            <Award className="h-5 w-5 text-accent" />
            优秀教师榜
          </h3>
          <div className="grid gap-4 md:grid-cols-2">
            {currentData.teachers.map((teacher, i) => (
              <div key={i} className="p-4 border rounded-lg hover:border-accent transition-colors">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h4 className="font-semibold">{teacher.name}</h4>
                    <p className="text-xs text-slate-500">{teacher.campus}</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-yellow-500">★</span>
                    <span className="text-sm font-medium">{teacher.rating}</span>
                  </div>
                </div>
                <div className="flex gap-4 text-xs text-slate-600">
                  <span>学生: {teacher.students}人</span>
                  <span>课程: {teacher.courses}门</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="p-6 rounded-lg border bg-white shadow-sm"
        >
          <h3 className="font-bold mb-4 flex items-center gap-2">
            <AlertCircle className="h-5 w-5 text-orange-500" />
            系统提醒
          </h3>
          <div className="space-y-3">
            {[
              { type: 'warning', message: '丰台校区 3 台设备需要维护', time: '2小时前' },
              { type: 'info', message: '新课程"区块链入门"审核通过', time: '5小时前' },
              { type: 'success', message: '本月营收目标已达成 85%', time: '1天前' },
              { type: 'warning', message: '5 位教师合同即将到期', time: '2天前' }
            ].map((alert, i) => (
              <div key={i} className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg">
                <div className={`w-2 h-2 rounded-full mt-2 ${
                  alert.type === 'warning' ? 'bg-orange-500' :
                  alert.type === 'success' ? 'bg-green-500' : 'bg-blue-500'
                }`} />
                <div className="flex-1">
                  <p className="text-sm text-slate-900">{alert.message}</p>
                  <p className="text-xs text-slate-500 mt-1">{alert.time}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Monthly Trends */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="mt-6 p-6 rounded-lg border bg-white shadow-sm"
      >
        <h3 className="font-bold mb-4 flex items-center gap-2">
          <TrendingUp className="h-5 w-5 text-accent" />
          月度趋势分析
        </h3>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="p-4 bg-slate-50 rounded-lg">
            <h4 className="text-sm text-slate-600 mb-2">新注册学生</h4>
            <div className="text-2xl font-bold text-accent">+186</div>
            <p className="text-xs text-green-600 mt-2">↑ 12% 较上月</p>
          </div>
          <div className="p-4 bg-slate-50 rounded-lg">
            <h4 className="text-sm text-slate-600 mb-2">课程完成率</h4>
            <div className="text-2xl font-bold text-purple-600">82.3%</div>
            <p className="text-xs text-green-600 mt-2">↑ 3.5% 较上月</p>
          </div>
          <div className="p-4 bg-slate-50 rounded-lg">
            <h4 className="text-sm text-slate-600 mb-2">用户满意度</h4>
            <div className="text-2xl font-bold text-green-600">91.5%</div>
            <p className="text-xs text-green-600 mt-2">↑ 2.1% 较上月</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
