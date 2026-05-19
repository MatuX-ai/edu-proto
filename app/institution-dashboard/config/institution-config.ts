import type { LucideIcon } from 'lucide-react';
import { 
  Megaphone, BookOpen, Users2, DollarSign, 
  BarChart3, Calendar, FileText, Monitor, Trophy, Handshake, 
  Target as TargetIcon, AwardIcon, Building2, Briefcase, Lightbulb, Cpu,
  MapPin, GraduationCap, TrendingUp
} from 'lucide-react';

export type InstitutionType = 'training' | 'k12' | 'vocational' | 'bureau';

export interface SidebarItem {
  id: string;
  label: string;
  icon: LucideIcon;
  pageType?: 'dashboard' | 'table' | 'stats' | 'form' | 'live' | 'policy' | 'digital-twin' | 'kanban' | 'skill-wallet';
}

export interface MockTableData {
  title: string;
  columns: string[];
  rows: string[][];
}

export interface InstitutionConfig {
  type: InstitutionType;
  title: string;
  subtitle: string;
  bannerImage: string;
  themeColor: string;
  sidebarItems: SidebarItem[];
  stats: { label: string; value: string; icon: LucideIcon }[];
  functionCards: { title: string; subtitle: string; icon: LucideIcon; color: string }[];
  mediaCards: { title: string; desc: string; icon: LucideIcon }[];
  quickTools: { title: string; icon: LucideIcon; color: string }[];
  mockData?: Record<string, MockTableData>;
}

export const institutionConfigs: Record<InstitutionType, InstitutionConfig> = {
  training: {
    type: 'training',
    title: '星海机器人培训中心',
    subtitle: '专注本地化教育服务，打造高效能教学闭环',
    bannerImage: '/images/hero-bg.jpg',
    themeColor: 'blue',
    sidebarItems: [
      { id: 'leads', label: '招生线索', icon: Users2, pageType: 'table' },
      { id: 'schedule', label: '智能排课', icon: Calendar, pageType: 'form' },
      { id: 'settlement', label: '课时结算', icon: DollarSign, pageType: 'stats' },
      { id: 'live', label: '直播授课', icon: Monitor, pageType: 'live' },
      { id: 'reports', label: '数据报表', icon: BarChart3 },
    ],
    mockData: {
      leads: {
        title: '招生线索管理',
        columns: ['姓名', '联系方式', '意向课程', '来源渠道', '跟进状态'],
        rows: [
          ['李明', '138****1234', 'Python少儿编程', '朋友圈广告', '待试听'],
          ['王芳', '139****5678', '创意美术', '老带新', '已报名'],
          ['张伟', '137****9012', '机器人创客', '地推活动', '跟进中'],
          ['赵丽', '136****3456', '乐高搭建', '抖音咨询', '待回访'],
          ['陈强', '135****7890', '无人机航拍', '官网预约', '已流失'],
        ]
      },
      schedule: {
        title: '本周课程表',
        columns: ['课程名称', '授课教师', '上课时间', '教室', '报名人数'],
        rows: [
          ['Python基础班', '张老师', '周六 09:00', 'A-101', '12/15'],
          ['创意美术A班', '李老师', '周六 14:00', 'B-205', '8/10'],
          ['机器人进阶', '王老师', '周日 10:00', 'C-301', '10/12'],
          ['乐高启蒙班', '赵老师', '周日 15:00', 'D-102', '15/15'],
        ]
      },
      settlement: {
        title: '课时结算中心',
        columns: ['学员姓名', '消课节数', '单价', '结算金额', '状态'],
        rows: [
          ['李明', '4节', '¥150', '¥600', '待确认'],
          ['王芳', '8节', '¥120', '¥960', '已结算'],
          ['张伟', '2节', '¥200', '¥400', '待确认'],
        ]
      }
    },
    stats: [
      { label: '在训学员', value: '328', icon: Users2 },
      { label: '本月营收', value: '¥12.5W', icon: DollarSign }
    ],
    functionCards: [
      { title: '招生线索', subtitle: '15位待跟进', icon: Users2, color: 'from-blue-500 to-blue-600' },
      { title: '智能排课', subtitle: '本周42节课', icon: Calendar, color: 'from-indigo-400 to-indigo-500' },
      { title: '课时结算', subtitle: '待确认8单', icon: FileText, color: 'from-cyan-400 to-cyan-500' },
      { title: '直播授课', subtitle: '在线教室3间', icon: Monitor, color: 'from-purple-400 to-purple-500' },
    ],
    mediaCards: [
      { title: '课件发布', desc: '同步教学资源', icon: BookOpen },
      { title: '活动推广', desc: '朋友圈海报生成', icon: Megaphone },
      { title: '学情报告', desc: '一键发送家长', icon: BarChart3 },
      { title: '素材库', desc: '教案与习题集', icon: FileText }
    ],
    quickTools: [
      { title: '快速报名', icon: Users2, color: 'bg-blue-500' },
      { title: '请假处理', icon: Calendar, color: 'bg-orange-500' },
      { title: '作业批改', icon: FileText, color: 'bg-indigo-400' },
      { title: '签到打卡', icon: Monitor, color: 'bg-green-400' },
      { title: '续费提醒', icon: DollarSign, color: 'bg-yellow-400' },
    ]
  },
  k12: {
    type: 'k12',
    title: '西溪实验小学',
    subtitle: '专注STEM兴趣培养，打造灵活多样的课外创新教育体系',
    bannerImage: '/images/stem-collaboration.jpg',
    themeColor: 'green',
    sidebarItems: [
      { id: 'stem-courses', label: '课程管理', icon: BookOpen, pageType: 'form' },
      { id: 'student-participation', label: '学生参与', icon: Users2, pageType: 'stats' },
      { id: 'portfolio-gallery', label: '作品库', icon: FileText, pageType: 'table' },
      { id: 'learning-community', label: '学习社区', icon: Handshake, pageType: 'form' },
      { id: 'competitions', label: '竞赛活动', icon: Trophy, pageType: 'table' },
      { id: 'resources', label: '资源设备', icon: Monitor, pageType: 'table' },
      { id: 'parent-interaction', label: '家校互动', icon: Handshake, pageType: 'form' },
      { id: 'reports', label: '数据报表', icon: BarChart3 },
    ],
    mockData: {
      'stem-courses': {
        title: 'STEM课程管理中心',
        columns: ['课程名称', '类型', '时间段', '适合年级', '报名人数', '状态'],
        rows: [
          ['Arduino 创意编程', '硬件编程', '周一 15:30-17:00', '初一-初二', '18/20', '进行中'],
          ['Python 游戏开发', '软件编程', '周三 15:30-17:00', '初二-初三', '15/15', '已满员'],
          ['3D 打印设计', '创客制作', '周五 15:30-17:00', '初一-初三', '12/16', '进行中'],
          ['机器人竞赛培训', '竞赛辅导', '周六 09:00-11:00', '初二-高三', '20/20', '已满员'],
          ['AI 视觉识别入门', '人工智能', '周日 14:00-16:00', '高一-高二', '8/12', '待开课'],
        ]
      },
      'student-participation': {
        title: '学生参与情况统计',
        columns: ['学生姓名', '参与课程数', '完成项目数', '获得徽章', '活跃度'],
        rows: [
          ['李明', '3', '5', '8', '95%'],
          ['王芳', '2', '3', '5', '88%'],
          ['张伟', '4', '7', '12', '92%'],
          ['赵丽', '1', '2', '3', '75%'],
          ['陈强', '3', '4', '6', '85%'],
        ]
      },
      'portfolio-gallery': {
        title: '学生作品库',
        columns: ['作品名称', '作者', '类型', '完成时间', '点赞数', '状态'],
        rows: [
          ['智能浇花系统', '李明', '硬件项目', '2024-05-10', '45', '已展示'],
          ['Python贪吃蛇游戏', '王芳', '软件项目', '2024-05-08', '38', '已展示'],
          ['3D打印笔筒', '张伟', '设计作品', '2024-05-05', '52', '已展示'],
          ['人脸识别门禁', '陈强', 'AI项目', '2024-05-03', '67', '精选'],
          ['机器人避障车', '刘洋', '机器人', '2024-04-28', '41', '已展示'],
        ]
      },
      'learning-community': {
        title: '学习社区动态',
        columns: ['标题', '发布者', '类型', '发布时间', '回复数', '状态'],
        rows: [
          ['分享我的Arduino项目经验', '李明', '经验分享', '2小时前', '12', '活跃'],
          ['求助：Python列表问题', '王芳', '问题求助', '5小时前', '8', '已解决'],
          ['推荐一个好用的3D建模软件', '张伟', '资源分享', '1天前', '15', '活跃'],
          ['本周学习心得总结', '赵丽', '学习心得', '2天前', '6', '正常'],
          ['邀请组队参加机器人竞赛', '陈强', '团队招募', '3天前', '20', '热门'],
        ]
      },
      competitions: {
        title: 'STEM竞赛活动管理',
        columns: ['竞赛名称', '类型', '时间', '参赛人数', '状态'],
        rows: [
          ['全国青少年科技创新大赛', '综合类', '2024-05-20', '12', '报名中'],
          ['市级机器人竞赛', '机器人', '2024-06-15', '8', '培训中'],
          ['编程马拉松挑战赛', '编程类', '2024-07-10', '15', '筹备中'],
          ['3D打印创意设计赛', '设计类', '2024-08-05', '6', '未开始'],
        ]
      },
      resources: {
        title: '资源设备管理',
        columns: ['资源名称', '类型', '数量', '可用状态', '操作'],
        rows: [
          ['Arduino Uno开发板', '硬件设备', '25', '20可用', '借用'],
          ['树莓派4B', '硬件设备', '15', '12可用', '借用'],
          ['3D打印机耗材', '耗材', '50卷', '充足', '查看'],
          ['Python编程教程', '数字资源', '不限', '在线', '访问'],
          ['机器人套件', '硬件设备', '10套', '8可用', '借用'],
        ]
      }
    },
    stats: [
      { label: '活跃课程', value: '24', icon: BookOpen },
      { label: '参与学生', value: '356', icon: Users2 }
    ],
    functionCards: [
      { title: '课程编排', subtitle: '24门兴趣课程', icon: Calendar, color: 'from-green-500 to-green-600' },
      { title: '学生管理', subtitle: '356名学员', icon: Users2, color: 'from-teal-400 to-teal-500' },
      { title: '竞赛安排', subtitle: '本月3场赛事', icon: Trophy, color: 'from-indigo-400 to-indigo-500' },
      { title: '设备管理', subtitle: '15间实验室', icon: Monitor, color: 'from-cyan-400 to-cyan-500' },
    ],
    mediaCards: [
      { title: '课程发布', desc: 'STEM兴趣课程管理', icon: BookOpen },
      { title: '作品展示', desc: '学生项目成果展示', icon: FileText },
      { title: '社区互动', desc: '学习交流与分享', icon: Handshake },
      { title: '数据分析', desc: '参与度与成长分析', icon: BarChart3 }
    ],
    quickTools: [
      { title: '课程表', icon: Calendar, color: 'bg-green-500' },
      { title: '报名管理', icon: Users2, color: 'bg-teal-500' },
      { title: '作品上传', icon: FileText, color: 'bg-indigo-400' },
      { title: '社区发帖', icon: Handshake, color: 'bg-cyan-400' },
      { title: '家长通知', icon: Handshake, color: 'bg-yellow-400' },
    ]
  },
  vocational: {
    type: 'vocational',
    title: '永安职业中学',
    subtitle: 'STEM辅修赋能，校企协同育人，孵化未来创客',
    bannerImage: '/images/tech-stack.jpg',
    themeColor: 'orange',
    sidebarItems: [
      { id: 'stem-auxiliary', label: 'STEM辅修中心', icon: Cpu, pageType: 'skill-wallet' },
      { id: 'industry-coop', label: '产学研合作', icon: Briefcase, pageType: 'kanban' },
      { id: 'incubator', label: '创业孵化器', icon: Lightbulb, pageType: 'form' },
      { id: 'training-base', label: '实训基地', icon: Monitor, pageType: 'digital-twin' },
      { id: 'patents', label: '专利管理', icon: FileText, pageType: 'table' },
      { id: 'reports', label: '数据报表', icon: BarChart3 },
    ],
    mockData: {
      patents: {
        title: '知识产权与专利申报',
        columns: ['专利名称', '申请人', '类型', '申请日期', '状态'],
        rows: [
          ['一种基于AI的工业分拣装置', '张三团队', '发明专利', '2026-04-15', '实质审查'],
          ['便携式多功能教学机器人', '李四', '实用新型', '2026-03-20', '已授权'],
          ['虚拟现实实训交互系统', '王五团队', '软件著作权', '2026-05-01', '登记中'],
        ]
      }
    },
    stats: [
      { label: '辅修参与率', value: '68%', icon: Cpu },
      { label: '校企合作项目', value: '45', icon: Briefcase }
    ],
    functionCards: [
      { title: 'STEM辅修', subtitle: '跨专业微证书', icon: Cpu, color: 'from-blue-500 to-blue-600' },
      { title: '企业悬赏', subtitle: '12个真实项目', icon: Briefcase, color: 'from-orange-500 to-orange-600' },
      { title: '创业孵化', subtitle: '8个在孵团队', icon: Lightbulb, color: 'from-yellow-500 to-yellow-600' },
      { title: '数字孪生', subtitle: '15个实训基地', icon: Monitor, color: 'from-purple-400 to-purple-500' },
    ],
    mediaCards: [
      { title: '技能认证', desc: '微证书与学分转换', icon: AwardIcon },
      { title: '项目对接', desc: '企业真实需求', icon: TargetIcon },
      { title: '导师指导', desc: '行业专家一对一', icon: Users2 },
      { title: '成果转化', desc: '专利与产品落地', icon: FileText }
    ],
    quickTools: [
      { title: '发布悬赏', icon: Briefcase, color: 'bg-orange-500' },
      { title: '申请孵化', icon: Lightbulb, color: 'bg-yellow-500' },
      { title: '技能认证', icon: AwardIcon, color: 'bg-blue-500' },
      { title: '设备借用', icon: Monitor, color: 'bg-cyan-400' },
      { title: '专利申报', icon: FileText, color: 'bg-indigo-400' },
    ]
  },
  bureau: {
    type: 'bureau',
    title: '西溪县教育局',
    subtitle: '数据驱动教育决策，促进区域 STEM 教育优质均衡发展',
    bannerImage: '/images/hero-bg.jpg',
    themeColor: 'indigo',
    sidebarItems: [
      { id: 'stem-competitions', label: 'STEM 赛事管理', icon: Trophy, pageType: 'kanban' },
      { id: 'awards-evaluation', label: '评选表彰系统', icon: AwardIcon, pageType: 'form' },
      { id: 'quality-monitoring', label: '质量监测大屏', icon: TrendingUp, pageType: 'stats' },
      { id: 'schools', label: '学校名录', icon: Building2, pageType: 'table' },
      { id: 'resource-allocation', label: '资源均衡配置', icon: MapPin, pageType: 'stats' },
      { id: 'reports', label: '数据报表', icon: BarChart3 },
    ],
    mockData: {
      schools: {
        title: '区域学校 STEM 开展情况',
        columns: ['学校名称', 'STEM课程数', '参与学生', '骨干教师', '评级'],
        rows: [
          ['第一实验小学', '12', '450', '8', '省级示范'],
          ['第二中学', '8', '620', '5', '市级重点'],
          ['第三高级中学', '15', '890', '12', '国家级示范'],
          ['第四完全中学', '10', '750', '7', '区级重点'],
        ]
      }
    },
    stats: [
      { label: '区域 STEM 参与率', value: '72%', icon: Users2 },
      { label: '覆盖学校', value: '142', icon: Building2 }
    ],
    functionCards: [
      { title: '赛事统筹', subtitle: '年度 5 场大赛', icon: Trophy, color: 'from-yellow-500 to-yellow-600' },
      { title: '名师评选', subtitle: 'STEM 骨干教师库', icon: GraduationCap, color: 'from-indigo-500 to-indigo-600' },
      { title: '质量监测', subtitle: '实时数据看板', icon: TrendingUp, color: 'from-blue-400 to-blue-500' },
      { title: '资源配置', subtitle: '设备与师资调度', icon: MapPin, color: 'from-green-400 to-green-500' },
    ],
    mediaCards: [
      { title: '政策发布', desc: 'STEM 教育指导意见', icon: FileText },
      { title: '教研培训', desc: '教师专业能力提升', icon: BookOpen },
      { title: '成果展示', desc: '区域优秀案例汇编', icon: AwardIcon },
      { title: '数据分析', desc: '教育质量年度报告', icon: BarChart3 }
    ],
    quickTools: [
      { title: '发布赛事', icon: Trophy, color: 'bg-yellow-500' },
      { title: '启动评选', icon: AwardIcon, color: 'bg-indigo-500' },
      { title: '查看报表', icon: BarChart3, color: 'bg-blue-500' },
      { title: '资源申请', icon: MapPin, color: 'bg-green-500' },
      { title: '公文流转', icon: FileText, color: 'bg-gray-500' },
    ]
  }
};
