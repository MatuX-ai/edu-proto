'use client';

import { motion } from 'framer-motion';
import { Search, Plus } from 'lucide-react';

interface DataTablePageProps {
  title: string;
  columns: string[];
  rows: string[][];
}

export default function DataTablePage({ title, columns, rows }: DataTablePageProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
        <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
          <Plus className="h-4 w-4" />
          <span>新增</span>
        </button>
      </div>

      {/* Filters */}
      <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex gap-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="搜索关键词..."
            className="w-full pl-10 pr-4 py-2 bg-gray-50 rounded-lg border-none focus:ring-2 focus:ring-blue-100 outline-none"
          />
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-50 border-b border-gray-100">
            <tr>
              {columns.map((col, i) => (
                <th key={i} className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {rows.map((row, rowIndex) => (
              <tr key={rowIndex} className="hover:bg-gray-50/50 transition-colors">
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex} className="px-6 py-4 text-sm text-gray-700">
                    {cellIndex === row.length - 1 ? (
                      <button className="text-blue-600 hover:text-blue-800 font-medium">管理</button>
                    ) : (
                      cell
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        
        {/* Pagination Mock */}
        <div className="px-6 py-4 border-t border-gray-100 flex items-center justify-between text-sm text-gray-500">
          <span>显示 1 到 {rows.length} 条，共 {rows.length} 条</span>
          <div className="flex gap-2">
            <button className="px-3 py-1 border rounded hover:bg-gray-50 disabled:opacity-50" disabled>上一页</button>
            <button className="px-3 py-1 border rounded hover:bg-gray-50 disabled:opacity-50" disabled>下一页</button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
