'use client';

import { motion } from 'framer-motion';
import { FileText, Send, Save } from 'lucide-react';

export default function PolicyDraftPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-4xl mx-auto"
    >
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800">教育公文起草系统</h2>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-50 transition-colors">
            <Save className="h-4 w-4" />
            <span>存草稿</span>
          </button>
          <button className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
            <Send className="h-4 w-4" />
            <span>正式发布</span>
          </button>
        </div>
      </div>

      <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">公文标题</label>
          <input type="text" className="w-full px-3 py-2 border rounded-lg outline-none focus:border-indigo-400" placeholder="例如：关于进一步加强区域中小学 STEM 教育的通知" />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">发文单位</label>
            <select className="w-full px-3 py-2 border rounded-lg outline-none">
              <option>市教育局</option>
              <option>市教研室</option>
              <option>市教育装备中心</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">紧急程度</label>
            <select className="w-full px-3 py-2 border rounded-lg outline-none">
              <option>普通</option>
              <option>加急</option>
              <option>特急</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">正文内容</label>
          <textarea rows={12} className="w-full px-3 py-2 border rounded-lg outline-none resize-none focus:border-indigo-400" placeholder="请输入公文正文..." />
        </div>

        <div className="border-t pt-6">
          <label className="block text-sm font-medium text-gray-700 mb-3">附件上传</label>
          <div className="border-2 border-dashed border-gray-200 rounded-xl p-8 text-center hover:bg-gray-50 transition-colors cursor-pointer">
            <FileText className="h-8 w-8 text-gray-400 mx-auto mb-2" />
            <p className="text-sm text-gray-500">点击或拖拽文件到此处上传</p>
            <p className="text-xs text-gray-400 mt-1">支持 PDF, DOCX, PNG 格式</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
