import type { LucideIcon } from 'lucide-react';
import { 
  LayoutDashboard, Megaphone, BookOpen, Users2, DollarSign, 
  BarChart3, Settings, Calendar, FileText, Monitor, Trophy, Handshake, 
  Target as TargetIcon, AwardIcon, Building2
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

const commonSidebarItems: SidebarItem[] = [
  { id: 'dashboard', label: '控制台', icon: LayoutDashboard },
  { id: 'reports', label: '数据报表', icon: BarChart3 },
  { id: 'settings', label: '系统设置', icon: Settings },
];

export const institutionConfigs: Record<InstitutionType, InstitutionConfig> = {
  training: {
    type: 'training',
    title: '本地精品培训中心',
    subtitle: '专注本地化教育服务，打造高效能教学闭环',
    bannerImage: '/images/hero-bg.jpg',
    themeColor: 'blue',
    sidebarItems: [
      ...commonSidebarItems.slice(0, 1),
      { id: 'leads', label: '招生线索', icon: Users2, pageType: 'table' },
      { id: 'schedule', label: '智能排课', icon: Calendar, pageType: 'form' },
      { id: 'settlement', label: '课时结算', icon: DollarSign, pageType: 'stats' },
      { id: 'live', label: '直播授课', icon: Monitor, pageType: 'live' },
      ...commonSidebarItems.slice(1),
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
    title: 'K12 STEM 智慧校园',
    subtitle: '融合科学、技术、工程与数学，打造未来创新教育体系',
    bannerImage: '/images/stem-collaboration.jpg',
    themeColor: 'green',
    sidebarItems: [
      ...commonSidebarItems.slice(0, 1),
      { id: 'academic', label: '教务管理', icon: Calendar, pageType: 'table' },
      { id: 'class-circle', label: '班级圈', icon: Users2, pageType: 'stats' },
      { id: 'grades', label: '成绩统计', icon: BarChart3, pageType: 'stats' },
      { id: 'safety', label: '校园安全', icon: Settings, pageType: 'form' },
      { id: 'resources', label: '资源库', icon: BookOpen, pageType: 'table' },
      ...commonSidebarItems.slice(1),
    ],
    mockData: {
      academic: {
        title: '教务管理中心',
        columns: ['课程名称', '授课教师', '上课时间', '教室', '状态'],
        rows: [
          ['高一数学', '王老师', '周一 08:00', 'A-101', '正常'],
          ['高二物理', '李老师', '周二 10:00', 'B-205', '正常'],
          ['高三化学', '张老师', '周三 14:00', 'C-301', '考试'],
          ['初一英语', '赵老师', '周四 08:00', 'D-102', '正常'],
          ['初二历史', '孙老师', '周五 10:00', 'E-203', '调课'],
          ['初三政治', '周老师', '周一 14:00', 'F-304', '正常'],
        ]
      },
      resources: {
        title: '教学资源库',
        columns: ['资源名称', '类型', '上传者', '下载次数', '操作'],
        rows: [
          ['期中试卷.docx', '文档', '教务处', '128', '下载'],
          ['函数讲解.mp4', '视频', '王老师', '85', '播放'],
          ['物理实验.pptx', '演示文稿', '李老师', '64', '下载'],
          ['英语听力.mp3', '音频', '赵老师', '156', '播放'],
          ['化学公式.pdf', '文档', '张老师', '92', '下载'],
        ]
      },
      grades: {
        title: '成绩统计分析',
        columns: ['班级', '科目', '平均分', '最高分', '最低分', '操作'],
        rows: [
          ['高一(1)班', '数学', '85.6', '98', '72', '详情'],
          ['高一(1)班', '英语', '82.3', '95', '68', '详情'],
          ['高二(2)班', '物理', '78.9', '92', '65', '详情'],
          ['高三(3)班', '化学', '88.2', '96', '75', '详情'],
        ]
      }
    },
    stats: [
      { label: 'STEM 实验室', value: '8', icon: Building2 },
      { label: '创客教师', value: '24', icon: Users2 }
    ],
    functionCards: [
      { title: '课程编排', subtitle: '120节 STEAM 课程', icon: Calendar, color: 'from-green-500 to-green-600' },
      { title: '学生管理', subtitle: '864名创客学员', icon: Users2, color: 'from-teal-400 to-teal-500' },
      { title: '竞赛安排', subtitle: '本月3场科技赛', icon: FileText, color: 'from-indigo-400 to-indigo-500' },
      { title: '实验监控', subtitle: '24间智能教室', icon: Monitor, color: 'from-cyan-400 to-cyan-500' },
    ],
    mediaCards: [
      { title: '教案管理', desc: '跨学科项目式教案', icon: FileText },
      { title: '智能排课', desc: 'AI辅助 STEAM 排课', icon: Calendar },
      { title: '数据分析', desc: '多维学习行为分析', icon: BarChart3 },
      { title: '资源中心', desc: '开源硬件与编程素材', icon: BookOpen }
    ],
    quickTools: [
      { title: '课程表', icon: Calendar, color: 'bg-green-500' },
      { title: '项目管理', icon: FileText, color: 'bg-teal-500' },
      { title: '家校沟通', icon: Users2, color: 'bg-indigo-400' },
      { title: '校园公告', icon: Megaphone, color: 'bg-cyan-400' },
      { title: '教学评估', icon: AwardIcon, color: 'bg-yellow-400' },
    ]
  },
  vocational: {
    type: 'vocational',
    title: '产教融合实训中心',
    subtitle: '对接企业真实项目，培养高技能应用型人才',
    bannerImage: '/images/tech-stack.jpg',
    themeColor: 'orange',
    sidebarItems: [
      ...commonSidebarItems.slice(0, 1),
      { id: 'training-base', label: '实训基地', icon: Monitor, pageType: 'digital-twin' },
      { id: 'project-workshop', label: '项目工坊', icon: TargetIcon, pageType: 'kanban' },
      { id: 'employment', label: '就业跟踪', icon: Handshake, pageType: 'table' },
      { id: 'patents', label: '专利管理', icon: FileText, pageType: 'form' },
      { id: 'competitions', label: '竞赛中心', icon: Trophy, pageType: 'skill-wallet' },
      ...commonSidebarItems.slice(1),
    ],
    mockData: {
      employment: {
        title: '毕业生就业去向统计',
        columns: ['姓名', '专业', '就职企业', '岗位', '薪资水平'],
        rows: [
          ['赵六', '软件工程', '腾讯科技', '前端开发', '15k'],
          ['孙七', '数字媒体', '字节跳动', 'UI设计', '12k'],
          ['周八', '物联网工程', '华为技术', '嵌入式工程师', '18k'],
          ['吴九', '大数据技术', '阿里巴巴', '数据分析师', '16k'],
          ['郑十', '人工智能', '百度智能云', '算法助理', '20k'],
        ]
      }
    },
    stats: [
      { label: '专业系部', value: '8', icon: Building2 },
      { label: '校企合作', value: '45', icon: Handshake }
    ],
    functionCards: [
      { title: '实训管理', subtitle: '15个实训基地', icon: Monitor, color: 'from-orange-500 to-orange-600' },
      { title: '竞赛组织', subtitle: '本月4场赛事', icon: Trophy, color: 'from-red-400 to-red-500' },
      { title: '校企合作', subtitle: '45家合作企业', icon: Handshake, color: 'from-amber-400 to-amber-500' },
      { title: '专利管理', subtitle: '28项申请中', icon: FileText, color: 'from-brown-400 to-brown-500' },
    ],
    mediaCards: [
      { title: '项目实训', desc: '企业真实项目', icon: TargetIcon },
      { title: '技能认证', desc: '职业资格认证', icon: AwardIcon },
      { title: '就业指导', desc: '就业跟踪服务', icon: Handshake },
      { title: '创新创业', desc: '创新项目孵化', icon: Megaphone }
    ],
    quickTools: [
      { title: '赛事报名', icon: Trophy, color: 'bg-orange-500' },
      { title: '项目认领', icon: TargetIcon, color: 'bg-red-500' },
      { title: '专利申报', icon: FileText, color: 'bg-amber-400' },
      { title: '企业合作', icon: Handshake, color: 'bg-brown-400' },
      { title: '技能证书', icon: AwardIcon, color: 'bg-yellow-400' },
    ]
  },
  bureau: {
    type: 'bureau',
    title: '区域教育治理平台',
    subtitle: '数据驱动教育决策，促进区域教育优质均衡发展',
    bannerImage: '/images/hero-bg.jpg',
    themeColor: 'indigo',
    sidebarItems: [
      ...commonSidebarItems.slice(0, 1),
      { id: 'schools', label: '学校名录', icon: Building2, pageType: 'table' },
      { id: 'staffing', label: '师资调配', icon: Users2, pageType: 'stats' },
      { id: 'funding', label: '经费监管', icon: DollarSign, pageType: 'stats' },
      { id: 'quality', label: '质量评估', icon: AwardIcon, pageType: 'table' },
      { id: 'policies', label: '政策发布', icon: FileText, pageType: 'policy' },
      ...commonSidebarItems.slice(1),
    ],
    mockData: {
      schools: {
        title: '区域学校名录',
        columns: ['学校名称', '类别', '在校人数', '评级', '操作'],
        rows: [
          ['第一实验小学', '小学', '1200', '省级示范', '查看'],
          ['第二中学', '初中', '2400', '市级重点', '查看'],
          ['第三高级中学', '高中', '1800', '省级重点', '查看'],
          ['第四完全中学', '完全中学', '3200', '国家级示范', '查看'],
          ['第五实验小学', '小学', '980', '区级重点', '查看'],
          ['第六中学', '初中', '1600', '市级示范', '查看'],
        ]
      },
      quality: {
        title: '教学质量评估报告',
        columns: ['评估项目', '得分', '排名', '同比变化', '详情'],
        rows: [
          ['师资力量', '92.5', '第3名', '+2.1%', '报告'],
          ['硬件设施', '88.0', '第5名', '-0.5%', '报告'],
          ['学生满意度', '95.2', '第2名', '+3.5%', '报告'],
          ['教学成果', '90.8', '第4名', '+1.8%', '报告'],
          ['管理水平', '87.5', '第6名', '-1.2%', '报告'],
        ]
      }
    },
    stats: [
      { label: '管辖学校', value: '156', icon: Building2 },
      { label: '教育投入', value: '¥2.8M', icon: DollarSign }
    ],
    functionCards: [
      { title: '学校管理', subtitle: '156所学校', icon: Building2, color: 'from-indigo-500 to-indigo-600' },
      { title: '资源分配', subtitle: '均衡配置', icon: TargetIcon, color: 'from-purple-400 to-purple-500' },
      { title: '质量监控', subtitle: '全覆盖监测', icon: Monitor, color: 'from-pink-400 to-pink-500' },
      { title: '数据统计', subtitle: '多维度分析', icon: BarChart3, color: 'from-cyan-400 to-cyan-500' },
    ],
    mediaCards: [
      { title: '政策发布', desc: '教育政策解读', icon: FileText },
      { title: '资源配置', desc: '资源均衡分配', icon: TargetIcon },
      { title: '质量评估', desc: '学校质量评估', icon: AwardIcon },
      { title: '数据分析', desc: '区域教育数据', icon: BarChart3 }
    ],
    quickTools: [
      { title: '学校档案', icon: Building2, color: 'bg-indigo-500' },
      { title: '教师统计', icon: Users2, color: 'bg-purple-500' },
      { title: '资金投入', icon: DollarSign, color: 'bg-pink-400' },
      { title: '质量报告', icon: FileText, color: 'bg-cyan-400' },
      { title: '政策文件', icon: BookOpen, color: 'bg-yellow-400' },
    ]
  }
};
