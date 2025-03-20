"use client"

import { motion } from "framer-motion"
import { FileText, Code, Database } from "lucide-react"

export function Slide1() {
  return (
    <div className="p-8 h-full flex flex-col justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-center mb-8"
      >
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text mb-4">
          Model Context Protocol
        </h1>
        <p className="text-xl text-slate-300">Открытый стандарт для подключения LLM к внешним данным и инструментам</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-slate-800/60 backdrop-blur-sm p-6 rounded-xl border border-slate-700 flex flex-col items-center text-center"
        >
          <div className="bg-blue-500/20 p-3 rounded-full mb-4">
            <FileText className="h-8 w-8 text-blue-400" />
          </div>
          <h3 className="text-lg font-semibold mb-2">Представлен в 2024</h3>
          <p className="text-slate-300">Разработан компанией Anthropic 26 ноября 2024 года</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-slate-800/60 backdrop-blur-sm p-6 rounded-xl border border-slate-700 flex flex-col items-center text-center"
        >
          <div className="bg-purple-500/20 p-3 rounded-full mb-4">
            <Code className="h-8 w-8 text-purple-400" />
          </div>
          <h3 className="text-lg font-semibold mb-2">Активное развитие</h3>
          <p className="text-slate-300">SDK для Java, Python, TypeScript и Kotlin</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-slate-800/60 backdrop-blur-sm p-6 rounded-xl border border-slate-700 flex flex-col items-center text-center"
        >
          <div className="bg-green-500/20 p-3 rounded-full mb-4">
            <Database className="h-8 w-8 text-green-400" />
          </div>
          <h3 className="text-lg font-semibold mb-2">Универсальный доступ</h3>
          <p className="text-slate-300">К файлам, API, базам данных и другим источникам</p>
        </motion.div>
      </div>
    </div>
  )
}

