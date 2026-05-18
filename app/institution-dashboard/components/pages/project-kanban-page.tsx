'use client';

import { motion } from 'framer-motion';
import { Plus, MoreHorizontal, Clock, CheckCircle2 } from 'lucide-react';

const initialTasks = [
  { id: 1, title: '智能仓储系统架构设计', tag: '架构', status: 'todo' },
  { id: 2, title: '传感器数据采集模块', tag: '硬件', status: 'doing' },
  { id: 3, title: '前端可视化大屏开发', tag: '软件', status: 'doing' },
  { id: 4, title: '项目验收文档撰写', tag: '文档', status: 'done' },
];

export default function ProjectKanbanPage() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="h-full flex flex-col">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800">企业级项目孵化器</h2>
        <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          <Plus className="h-4 w-4" />
          <span>新建项目</span>
        </button>
      </div>

      <div className="flex-1 grid grid-cols-3 gap-6 overflow-x-auto pb-4">
        {['待办事项', '进行中', '已完成'].map((colTitle, colIndex) => {
          const statusKey = colIndex === 0 ? 'todo' : colIndex === 1 ? 'doing' : 'done';
          const tasks = initialTasks.filter(t => t.status === statusKey);
          
          return (
            <div key={colTitle} className="bg-gray-50 rounded-xl p-4 flex flex-col h-full border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-gray-700">{colTitle}</h3>
                <span className="bg-gray-200 text-gray-600 text-xs px-2 py-1 rounded-full">{tasks.length}</span>
              </div>
              
              <div className="space-y-3 flex-1 overflow-y-auto">
                {tasks.map(task => (
                  <motion.div 
                    key={task.id}
                    layoutId={task.id.toString()}
                    className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 cursor-pointer hover:shadow-md transition-shadow"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <span className={`text-[10px] px-2 py-0.5 rounded ${
                        task.tag === '硬件' ? 'bg-orange-100 text-orange-600' :
                        task.tag === '软件' ? 'bg-blue-100 text-blue-600' :
                        'bg-purple-100 text-purple-600'
                      }`}>{task.tag}</span>
                      <MoreHorizontal className="h-4 w-4 text-gray-400" />
                    </div>
                    <h4 className="text-sm font-medium text-gray-800 mb-3">{task.title}</h4>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <div className="flex -space-x-2">
                        {[1, 2].map(i => (
                          <div key={i} className="w-6 h-6 rounded-full bg-gray-200 border-2 border-white" />
                        ))}
                      </div>
                      {colIndex === 1 && <Clock className="h-3 w-3" />}
                      {colIndex === 2 && <CheckCircle2 className="h-3 w-3 text-green-500" />}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}
