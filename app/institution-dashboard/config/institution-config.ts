import type { LucideIcon } from 'lucide-react';
import { 
  LayoutDashboard, Megaphone, BookOpen, Users2, UserCheck, DollarSign, 
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
    title: '国家级投教基地',
    subtitle: '全覆盖教育基地覆盖全国主要城市区域，致力于国民投资教育',
    bannerImage: '/images/banner-edu.png',
    themeColor: 'blue',
    sidebarItems: [
      ...commonSidebarItems.slice(0, 1),
      { id: 'courses', label: '课程中心', icon: BookOpen, pageType: 'table' },
      { id: 'students', label: '学员档案', icon: UserCheck, pageType: 'table' },
      { id: 'finance', label: '财务结算', icon: DollarSign, pageType: 'stats' },
      { id: 'live', label: '直播中控', icon: Monitor, pageType: 'live' },
      ...commonSidebarItems.slice(1),
    ],
    mockData: {
      courses: {
        title: '课程管理中心',
        columns: ['课程名称', '讲师', '报名人数', '状态', '操作'],
        rows: [
          ['Python 基础入门', '张老师', '128', '进行中'],
          ['AI 绘画实战', '李老师', '85', '已完结'],
          ['Web 前端开发', '王老师', '210', '报名中'],
          ['数据分析与可视化', '赵老师', '156', '进行中'],
          ['机器学习基础', '孙老师', '92', '待开始'],
          ['UI/UX 设计原理', '周老师', '178', '进行中'],
          ['云计算架构', '吴老师', '64', '报名中'],
          ['网络安全基础', '郑老师', '103', '进行中'],
        ]
      },
      students: {
        title: '学员档案管理',
        columns: ['姓名', '手机号', '报名课程', '学习进度', '操作'],
        rows: [
          ['张三', '138****1234', 'Python 基础', '85%'],
          ['李四', '139****5678', 'AI 绘画', '40%'],
          ['王五', '137****9012', 'Web 前端', '92%'],
          ['赵六', '136****3456', '数据分析', '65%'],
          ['孙七', '135****7890', '机器学习', '30%'],
        ]
      },
      finance: {
        title: '财务结算中心',
        columns: ['项目名称', '金额', '日期', '状态', '操作'],
        rows: [
          ['Python 课程收入', '¥25,600', '2026-05-15', '已结算'],
          ['AI 绘画课程收入', '¥17,000', '2026-05-10', '已结算'],
          ['教师工资支出', '¥45,000', '2026-05-01', '已支付'],
          ['平台服务费', '¥3,200', '2026-05-05', '待支付'],
        ]
      }
    },
    stats: [
      { label: '今日全量网活动', value: '5', icon: Megaphone },
      { label: '未完成任务', value: '2', icon: Settings }
    ],
    functionCards: [
      { title: '发起培训', subtitle: '2位学员', icon: Users2, color: 'from-blue-500 to-blue-600' },
      { title: '课程管理', subtitle: '1,234节课程', icon: BookOpen, color: 'from-yellow-400 to-yellow-500' },
      { title: '培训活动', subtitle: '组织活动12场', icon: Calendar, color: 'from-orange-400 to-orange-500' },
      { title: '监控中心', subtitle: '连接视频源15个', icon: Monitor, color: 'from-purple-400 to-purple-500' },
    ],
    mediaCards: [
      { title: '发布课件', desc: '在线课程、资源库', icon: BookOpen },
      { title: '公告智能改写', desc: '智能编辑、发布', icon: Megaphone },
      { title: '自动分析', desc: '数据报告、分析', icon: BarChart3 },
      { title: '素材库', desc: '视频、图文素材', icon: FileText }
    ],
    quickTools: [
      { title: '报名统计', icon: Users2, color: 'bg-blue-500' },
      { title: '查询会议', icon: Calendar, color: 'bg-orange-500' },
      { title: '远程辅导', icon: Monitor, color: 'bg-blue-400' },
      { title: '直播管理', icon: Megaphone, color: 'bg-green-400' },
      { title: '可视化日报', icon: BarChart3, color: 'bg-yellow-400' },
    ]
  },
  k12: {
    type: 'k12',
    title: 'K12 智慧校园',
    subtitle: '现代化教学管理体系，覆盖全学段教学场景',
    bannerImage: '/images/banner-k12.png',
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
      { label: '教学班级', value: '24', icon: Building2 },
      { label: '在职教师', value: '36', icon: Users2 }
    ],
    functionCards: [
      { title: '课程编排', subtitle: '120节课程', icon: Calendar, color: 'from-green-500 to-green-600' },
      { title: '学生管理', subtitle: '864名学生', icon: Users2, color: 'from-teal-400 to-teal-500' },
      { title: '考试安排', subtitle: '本月3场考试', icon: FileText, color: 'from-indigo-400 to-indigo-500' },
      { title: '教学监控', subtitle: '24间教室', icon: Monitor, color: 'from-cyan-400 to-cyan-500' },
    ],
    mediaCards: [
      { title: '教案管理', desc: '标准化教案库', icon: FileText },
      { title: '智能排课', desc: 'AI辅助排课', icon: Calendar },
      { title: '成绩分析', desc: '多维度分析', icon: BarChart3 },
      { title: '资源中心', desc: '教学资源共享', icon: BookOpen }
    ],
    quickTools: [
      { title: '课程表', icon: Calendar, color: 'bg-green-500' },
      { title: '作业管理', icon: FileText, color: 'bg-teal-500' },
      { title: '家长沟通', icon: Users2, color: 'bg-indigo-400' },
      { title: '校园公告', icon: Megaphone, color: 'bg-cyan-400' },
      { title: '教学评估', icon: AwardIcon, color: 'bg-yellow-400' },
    ]
  },
  vocational: {
    type: 'vocational',
    title: '职业教育中心',
    subtitle: '产教融合、校企合作，培养高素质技术技能人才',
    bannerImage: '/images/banner-vocational.png',
    themeColor: 'orange',
    sidebarItems: [
      ...commonSidebarItems.slice(0, 1),
      { id: 'training-base', label: '实训基地', icon: Monitor, pageType: 'digital-twin' },
      { id: 'project-workshop', label: '项目工坊', icon: TargetIcon, pageType: 'kanban' },
      { id: 'employment', label: '就业跟踪', icon: Handshake, pageType: 'table' },
      { id: 'patents', label: '专利管理', icon: FileText, pageType: 'table' },
      { id: 'competitions', label: '竞赛中心', icon: Trophy, pageType: 'skill-wallet' },
      ...commonSidebarItems.slice(1),
    ],
    mockData: {
      project_workshop: {
        title: '企业项目工坊',
        columns: ['项目名称', '合作企业', '参与学生', '进度', '操作'],
        rows: [
          ['智能仓储系统', '华为技术', '12人', '75%', '详情'],
          ['电商数据分析', '阿里巴巴', '8人', '40%', '详情'],
          ['移动应用开发', '腾讯科技', '15人', '90%', '详情'],
          ['AI客服系统', '百度智能云', '10人', '100%', '详情'],
          ['区块链溯源平台', '京东数科', '6人', '20%', '详情'],
        ]
      },
      employment: {
        title: '毕业生就业跟踪',
        columns: ['姓名', '专业', '就职企业', '薪资水平', '状态'],
        rows: [
          ['赵六', '软件工程', '腾讯科技', '15k', '已签约'],
          ['孙七', '数字媒体', '字节跳动', '12k', '实习中'],
          ['周八', '物联网工程', '华为技术', '18k', '已签约'],
          ['吴九', '大数据技术', '阿里巴巴', '16k', '试用期'],
          ['郑十', '人工智能', '百度智能云', '20k', '已签约'],
        ]
      },
      competitions: {
        title: '竞赛管理中心',
        columns: ['竞赛名称', '级别', '参赛队伍', '获奖情况', '操作'],
        rows: [
          ['全国职业技能大赛', '国家级', '5支', '金奖2项', '详情'],
          ['省级创新创业大赛', '省级', '8支', '一等奖3项', '详情'],
          ['市级编程挑战赛', '市级', '12支', '二等奖5项', '详情'],
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
    title: '区域教育管理中心',
    subtitle: '统筹规划区域教育发展，优化教育资源配置',
    bannerImage: '/images/banner-bureau.png',
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
      },
      funding: {
        title: '经费监管中心',
        columns: ['项目名称', '预算金额', '已使用', '使用率', '操作'],
        rows: [
          ['基础设施建设', '¥500万', '¥350万', '70%', '详情'],
          ['教师培训基金', '¥200万', '¥120万', '60%', '详情'],
          ['学生资助计划', '¥150万', '¥95万', '63%', '详情'],
          ['教学设备采购', '¥300万', '¥180万', '60%', '详情'],
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
