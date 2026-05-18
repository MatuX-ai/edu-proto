'use client';

import { motion } from 'framer-motion';
import { Save, FileText, Send } from 'lucide-react';

export default function PolicyFormPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-4xl mx-auto space-y-6"
    >
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-800">政策文件发布</h2>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 bg-white border border-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors">
            <Save className="h-4 w-4" />
            <span>存草稿</span>
          </button>
          <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            <Send className="h-4 w-4" />
            <span>正式发布</span>
          </button>
        </div>
      </div>

      <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">文件标题</label>
          <input 
            type="text" 
            placeholder="请输入政策文件标题..."
            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-100 outline-none"
          />
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">发文单位</label>
            <select className="w-full px-4 py-2 border border-gray-200 rounded-lg outline-none">
              <option>市教育局</option>
              <option>市发改委</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">生效日期</label>
            <input 
              type="date" 
              className="w-full px-4 py-2 border border-gray-200 rounded-lg outline-none"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">正文内容</label>
          <div className="border border-gray-200 rounded-lg h-64 p-4 bg-gray-50 flex flex-col">
            <div className="flex gap-2 mb-4 border-b pb-2">
              {['B', 'I', 'U', 'H1', 'H2'].map(tag => (
                <button key={tag} className="px-2 py-1 text-xs font-bold bg-white border rounded hover:bg-gray-100">{tag}</button>
              ))}
            </div>
            <textarea 
              className="flex-1 bg-transparent resize-none outline-none text-sm"
              placeholder="在此输入政策正文..."
            ></textarea>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">附件上传</label>
          <div className="border-2 border-dashed border-gray-200 rounded-lg p-8 text-center hover:border-blue-400 transition-colors cursor-pointer">
            <FileText className="h-8 w-8 text-gray-400 mx-auto mb-2" />
            <p className="text-sm text-gray-500">点击或拖拽文件到此处上传</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
