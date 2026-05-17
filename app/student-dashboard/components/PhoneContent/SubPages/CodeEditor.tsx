'use client';

import { motion } from 'framer-motion';

export function CodeEditor() {
  return (
    <div className="space-y-4">
      <div className="bg-slate-900 rounded-xl overflow-hidden">
        <div className="bg-slate-800 px-4 py-2 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <span className="text-xs text-slate-400">main.py</span>
        </div>
        <div className="p-4 font-mono text-sm text-green-400 overflow-x-auto">
          <div className="text-slate-500"># 函数定义示例</div>
          <div><span className="text-purple-400">def</span> <span className="text-blue-400">greet</span>(name):</div>
          <div className="pl-4"><span className="text-purple-400">return</span> <span className="text-yellow-300">f&quot;你好, &#123;name&#125;!&quot;</span></div>
          <div className="mt-2"></div>
          <div><span className="text-slate-500"># 调用函数</span></div>
          <div>message = <span className="text-blue-400">greet</span>(<span className="text-yellow-300">&quot;李明&quot;</span>)</div>
          <div><span className="text-blue-400">print</span>(message)</div>
          <div className="mt-2 text-slate-500 animate-pulse">|</div>
        </div>
      </div>
      <div className="bg-white rounded-xl p-4 border">
        <h5 className="font-bold text-sm mb-3">运行结果</h5>
        <div className="bg-slate-100 rounded-lg p-3 font-mono text-sm">
          <div className="text-green-600">你好, 李明!</div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <button className="py-3 bg-slate-100 rounded-xl font-bold text-sm hover:bg-slate-200 transition-colors">
          💾 保存代码
        </button>
        <motion.button
          whileTap={{ scale: 0.95 }}
          className="py-3 bg-green-600 text-white rounded-xl font-bold text-sm hover:bg-green-700 transition-colors"
        >
          ▶️ 运行代码
        </motion.button>
      </div>
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
        <h5 className="font-bold text-sm text-blue-900 mb-2">💡 学习提示</h5>
        <ul className="text-xs text-blue-800 space-y-1">
          <li>• def 关键字用于定义函数</li>
          <li>• 函数名后面要加括号和冒号</li>
          <li>• 函数体需要缩进（通常4个空格）</li>
          <li>• return 语句返回结果</li>
        </ul>
      </div>
    </div>
  );
}
