'use client';

import { motion } from 'framer-motion';
import { Code, Save, Play } from 'lucide-react';

interface CodeEditorProps {
  onNavigate: (page: string) => void;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function CodeEditor({ onNavigate }: CodeEditorProps) {
  return (
    <div className="space-y-4 h-full flex flex-col">
      {/* Toolbar */}
      <div className="flex items-center justify-between bg-slate-800 text-white p-3 rounded-xl">
        <div className="flex items-center gap-2">
          <Code className="h-5 w-5" />
          <span className="text-sm font-bold">main.py</span>
        </div>
        <div className="flex gap-2">
          <motion.button whileTap={{ scale: 0.9 }} className="p-2 hover:bg-slate-700 rounded-lg">
            <Save className="h-4 w-4" />
          </motion.button>
          <motion.button whileTap={{ scale: 0.9 }} className="bg-green-600 px-3 py-1 rounded-lg text-xs font-bold flex items-center gap-1">
            <Play className="h-3 w-3" /> 运行
          </motion.button>
        </div>
      </div>

      {/* Editor Area */}
      <div className="flex-1 bg-slate-900 rounded-xl p-4 overflow-auto font-mono text-sm text-slate-300 border border-slate-700">
        <pre>
{`from machine import Pin
import time

led = Pin(2, Pin.OUT)

while True:
    led.value(1)
    time.sleep(1)
    led.value(0)
    time.sleep(1)`}
        </pre>
      </div>

      {/* Console Output */}
      <div className="h-32 bg-black rounded-xl p-3 border border-slate-700">
        <div className="text-[10px] text-slate-500 mb-1">Console Output:</div>
        <div className="text-xs text-green-400 font-mono">
          &gt; Program started...<br/>
          &gt; LED toggling every 1s<br/>
          &gt; _
        </div>
      </div>
    </div>
  );
}
