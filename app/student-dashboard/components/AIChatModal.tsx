'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Bot } from 'lucide-react';
import { ChatMessage } from '../types';

interface AIChatModalProps {
  show: boolean;
  onClose: () => void;
  messages: ChatMessage[];
  inputMessage: string;
  onInputChange: (value: string) => void;
  onSendMessage: () => void;
  mode?: 'phone' | 'tablet';
}

export function AIChatModal({
  show,
  onClose,
  messages,
  inputMessage,
  onInputChange,
  onSendMessage,
  mode = 'phone'
}: AIChatModalProps) {
  const isPhone = mode === 'phone';

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex ${
            isPhone ? 'items-end sm:items-center' : 'items-center'
          } justify-center ${isPhone ? 'p-4' : 'p-8'}`}
          onClick={onClose}
        >
          <motion.div
            initial={isPhone ? { y: 50, opacity: 0 } : { scale: 0.9, opacity: 0 }}
            animate={isPhone ? { y: 0, opacity: 1 } : { scale: 1, opacity: 1 }}
            exit={isPhone ? { y: 50, opacity: 0 } : { scale: 0.9, opacity: 0 }}
            className={`bg-white ${
              isPhone ? 'rounded-t-3xl sm:rounded-2xl max-w-md max-h-[80vh]' : 'rounded-3xl w-full max-w-2xl h-[600px]'
            } flex flex-col shadow-2xl`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Chat Header */}
            <div className={`bg-gradient-to-r from-indigo-500 to-purple-600 ${
              isPhone ? 'p-4 rounded-t-3xl sm:rounded-t-2xl' : 'p-6'
            } flex justify-between items-center`}>
              <div className="flex items-center gap-2 text-white">
                <div className={`${isPhone ? 'w-8 h-8' : 'w-12 h-12'} bg-white/20 rounded-full flex items-center justify-center`}>
                  <Bot className={isPhone ? 'h-5 w-5' : 'h-6 w-6'} />
                </div>
                <div>
                  <span className={`font-bold ${isPhone ? 'block' : 'text-lg block'}`}>🎓 AI 教师</span>
                  {!isPhone && <p className="text-xs text-white/80">个性化学习指导 · 每月赠送100万Token</p>}
                  {isPhone && <span className="text-xs text-white/80">在线答疑</span>}
                </div>
              </div>
              <button onClick={onClose} className="text-white hover:bg-white/20 rounded-full p-1 transition-colors">
                <X className={isPhone ? 'h-5 w-5' : 'h-6 w-6'} />
              </button>
            </div>

            {/* Chat Messages */}
            <div className={`flex-1 overflow-y-auto ${isPhone ? 'p-4 space-y-3' : 'p-6 space-y-4'} bg-slate-50`} 
                 style={{ maxHeight: isPhone ? '50vh' : 'none' }}>
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[${isPhone ? '80' : '70'}%] rounded-2xl px-${isPhone ? '4' : '5'} py-${isPhone ? '2' : '3'} text-sm whitespace-pre-line shadow-sm ${
                    msg.role === 'user'
                      ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-br-sm'
                      : 'bg-white text-slate-900 rounded-bl-sm border'
                  }`}>
                    {msg.content}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Chat Input */}
            <div className={`p-${isPhone ? '4' : '6'} bg-white border-t`}>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => onInputChange(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && onSendMessage()}
                  placeholder={isPhone ? "输入你的问题..." : "输入你的问题，AI老师会根据你的学习情况给出建议..."}
                  className={`flex-1 px-4 py-2 border-2 rounded-full text-sm focus:outline-none focus:border-purple-500 transition-colors`}
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={onSendMessage}
                  className={`${isPhone ? 'w-10 h-10' : 'px-6 h-12'} bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold shadow-lg hover:shadow-xl transition-all`}
                >
                  <Send className={isPhone ? 'h-4 w-4' : 'h-5 w-5'} />
                </motion.button>
              </div>
              <p className={`text-xs text-slate-500 mt-${isPhone ? '2' : '3'} text-center`}>
                {isPhone 
                  ? '💡 🎓 AI教师会根据你的学习情况提供个性化指导'
                  : '💡 🎓 AI教师已了解你的学习进度：Python 75% · Arduino 100% · 机器学习 30%'
                }
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
