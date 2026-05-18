'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, User, Mail, Phone, MapPin, Award } from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function DetailPage() {
  const params = useParams();
  const id = params.id;

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="max-w-5xl mx-auto"
    >
      <Link href="#" className="inline-flex items-center gap-2 text-gray-500 hover:text-blue-600 mb-6 transition-colors">
        <ArrowLeft className="h-4 w-4" />
        <span>返回列表</span>
      </Link>

      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-8 text-white">
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 bg-white/20 backdrop-blur rounded-full flex items-center justify-center text-3xl font-bold">
              张
            </div>
            <div>
              <h1 className="text-3xl font-bold">张三同学</h1>
              <p className="text-blue-100 mt-1">ID: {id} · Python 少儿编程班</p>
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8">
          {/* Basic Info */}
          <div className="space-y-6">
            <h3 className="font-bold text-gray-800 border-b pb-2">基础档案</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-600">
                <User className="h-5 w-5 text-gray-400" />
                <span>性别：男</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <Phone className="h-5 w-5 text-gray-400" />
                <span>138****1234</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <Mail className="h-5 w-5 text-gray-400" />
                <span>zhangsan@example.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <MapPin className="h-5 w-5 text-gray-400" />
                <span>北京市海淀区...</span>
              </div>
            </div>
          </div>

          {/* Learning Trajectory */}
          <div className="md:col-span-2 space-y-6">
            <h3 className="font-bold text-gray-800 border-b pb-2">学习轨迹与成果</h3>
            
            <div className="bg-gray-50 p-4 rounded-xl">
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium">课程总进度</span>
                <span className="text-sm text-blue-600">85%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '85%' }}></div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="border p-4 rounded-xl">
                <Award className="h-6 w-6 text-yellow-500 mb-2" />
                <div className="font-bold text-gray-800">优秀学员</div>
                <div className="text-xs text-gray-500">2026年5月获得</div>
              </div>
              <div className="border p-4 rounded-xl">
                <Award className="h-6 w-6 text-purple-500 mb-2" />
                <div className="font-bold text-gray-800">全勤奖</div>
                <div className="text-xs text-gray-500">连续出勤12周</div>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-gray-700 mb-3">最近作业记录</h4>
              <div className="space-y-2">
                {[1, 2].map((i) => (
                  <div key={i} className="flex items-center justify-between p-3 bg-white border rounded-lg text-sm">
                    <span>第{i}章：循环结构练习</span>
                    <span className="text-green-600 font-medium">已批改 (95分)</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
