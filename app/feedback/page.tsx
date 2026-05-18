'use client';

import { motion } from 'framer-motion';
import { MessageSquare, Send } from 'lucide-react';
import { useState } from 'react';

export default function FeedbackPage() {
  const [formData, setFormData] = useState({
    type: 'suggestion',
    rating: 5,
    feedback: '',
    email: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: 实现反馈提交逻辑
    alert('感谢您的反馈！我们会认真考虑您的建议。');
    setFormData({ type: 'suggestion', rating: 5, feedback: '', email: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="container mx-auto px-4 py-16 max-w-3xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <div className="flex items-center justify-center gap-3 mb-6">
          <MessageSquare className="h-8 w-8 text-accent" />
          <h1 className="text-4xl font-bold text-primary">意见反馈</h1>
        </div>
        <p className="text-gray-500">
          您的意见对我们非常重要。请分享您的想法，帮助我们改进 MatuX 平台。
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-white p-8 rounded-lg border shadow-sm"
      >
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Feedback Type */}
          <div>
            <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-2">
              反馈类型 *
            </label>
            <select
              id="type"
              name="type"
              required
              value={formData.type}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
            >
              <option value="suggestion">功能建议</option>
              <option value="bug">问题报告</option>
              <option value="compliment">表扬</option>
              <option value="complaint">投诉</option>
              <option value="other">其他</option>
            </select>
          </div>

          {/* Rating */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              整体满意度 *
            </label>
            <div className="flex items-center gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setFormData({ ...formData, rating: star })}
                  className={`text-2xl ${
                    star <= formData.rating ? 'text-yellow-400' : 'text-gray-300'
                  } hover:text-yellow-400 transition-colors`}
                >
                  ★
                </button>
              ))}
              <span className="ml-2 text-sm text-gray-600">
                {formData.rating === 5 && '非常满意'}
                {formData.rating === 4 && '满意'}
                {formData.rating === 3 && '一般'}
                {formData.rating === 2 && '不满意'}
                {formData.rating === 1 && '非常不满意'}
              </span>
            </div>
          </div>

          {/* Feedback Text */}
          <div>
            <label htmlFor="feedback" className="block text-sm font-medium text-gray-700 mb-2">
              您的反馈 *
            </label>
            <textarea
              id="feedback"
              name="feedback"
              required
              value={formData.feedback}
              onChange={handleChange}
              rows={8}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent resize-none"
              placeholder="请详细描述您的想法、建议或遇到的问题..."
            />
            <p className="text-xs text-gray-500 mt-1">
              越详细的描述越能帮助我们改进
            </p>
          </div>

          {/* Email (Optional) */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              邮箱（可选）
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
              placeholder="如果您希望我们回复，请留下邮箱"
            />
            <p className="text-xs text-gray-500 mt-1">
              留下邮箱后，我们会在需要时与您联系
            </p>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8"
          >
            <Send className="h-4 w-4" />
            提交反馈
          </button>
        </form>
      </motion.div>

      {/* Thank You Message */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mt-8 bg-slate-50 p-6 rounded-lg border text-center"
      >
        <h3 className="text-lg font-semibold text-primary mb-2">感谢您的参与</h3>
        <p className="text-gray-600 text-sm">
          每一条反馈都会被认真阅读和评估。我们致力于为用户提供最好的学习体验。
        </p>
      </motion.div>
    </div>
  );
}
