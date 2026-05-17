// 聊天消息类型
export interface ChatMessage {
  role: 'user' | 'ai';
  content: string;
}

// 设备模式类型
export type DeviceMode = 'phone' | 'tablet';

// 手机 Tab 类型
export type PhoneTab = 'home' | 'learn' | 'community' | 'profile';

// 手机子页面类型
export type PhoneSubPage = 
  | '课程详情'
  | '项目详情'
  | '成就详情'
  | '代码编辑器'
  | '系统设置'
  | '知识图谱'
  | '每日挑战'
  | '帖子详情'
  | '硬件设备'
  | '证书管理'
  | '学习报告'
  | null;

// 平板页面类型
export type TabletPage = 'home' | 'courses' | 'ar-lab' | 'projects' | 'achievements';

// 平板子页面类型
export type TabletSubPage = 
  | 'task-detail'
  | 'course-recommendation'
  | `course-learn-${number}`
  | `ar-experiment-${number}`
  | `project-workspace-${number}`
  | `badge-detail-${number}`
  | null;

// 课程类型
export interface Course {
  name: string;
  progress: number;
  emoji: string;
  total?: number;
  completed?: number;
  color?: string;
}

// 任务类型
export interface Task {
  title: string;
  duration: string;
  type: string;
  progress: number;
  completed: boolean;
}

// 项目类型
export interface Project {
  title: string;
  status: string;
  progress: number;
  emoji: string;
  difficulty: string;
}

// 徽章类型
export interface Badge {
  name: string;
  icon: string;
  earned: boolean;
  desc?: string;
}
