"use client"

import { motion } from "framer-motion"
import { Calendar, FileSearch, Globe, BarChart } from "lucide-react"

export function Slide2() {
  return (
    <div className="p-8 h-full flex flex-col justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-8"
      >
        <h2 className="text-3xl font-bold mb-4">Почему это важно</h2>
        <p className="text-xl text-slate-300">
          LLM часто ограничены данными, на которых их обучали, и не могут легко подключаться к актуальной информации
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="bg-slate-800/60 backdrop-blur-sm p-6 rounded-xl border border-slate-700 mb-8"
      >
        <div className="flex items-center mb-4">
          <div className="bg-blue-500/20 p-2 rounded-full mr-4">
            <Globe className="h-6 w-6 text-blue-400" />
          </div>
          <h3 className="text-xl font-semibold">MCP устраняет этот барьер</h3>
        </div>
        <p className="text-slate-300">Позволяя ИИ получать доступ к актуальной информации из различных источников</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-slate-800/60 backdrop-blur-sm p-5 rounded-xl border border-slate-700 flex items-start"
        >
          <div className="bg-purple-500/20 p-2 rounded-full mr-4 mt-1">
            <Calendar className="h-5 w-5 text-purple-400" />
          </div>
          <div>
            <h4 className="font-semibold mb-1">Проверка календаря</h4>
            <p className="text-slate-300 text-sm">
              ИИ может проверять ваш календарь для планирования встреч и напоминаний
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7 }}
          className="bg-slate-800/60 backdrop-blur-sm p-5 rounded-xl border border-slate-700 flex items-start"
        >
          <div className="bg-green-500/20 p-2 rounded-full mr-4 mt-1">
            <FileSearch className="h-5 w-5 text-green-400" />
          </div>
          <div>
            <h4 className="font-semibold mb-1">Чтение локальных файлов</h4>
            <p className="text-slate-300 text-sm">Доступ к документам на вашем компьютере для анализа и обработки</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-slate-800/60 backdrop-blur-sm p-5 rounded-xl border border-slate-700 flex items-start"
        >
          <div className="bg-orange-500/20 p-2 rounded-full mr-4 mt-1">
            <Globe className="h-5 w-5 text-orange-400" />
          </div>
          <div>
            <h4 className="font-semibold mb-1">Поиск в интернете</h4>
            <p className="text-slate-300 text-sm">Получение актуальной информации из сети для более точных ответов</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.9 }}
          className="bg-slate-800/60 backdrop-blur-sm p-5 rounded-xl border border-slate-700 flex items-start"
        >
          <div className="bg-red-500/20 p-2 rounded-full mr-4 mt-1">
            <BarChart className="h-5 w-5 text-red-400" />
          </div>
          <div>
            <h4 className="font-semibold mb-1">Анализ данных</h4>
            <p className="text-slate-300 text-sm">Работа с актуальными данными для бизнес-аналитики и отчетности</p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

