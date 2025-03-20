"use client"

import { motion } from "framer-motion"
import { CheckCircle, Code2, Shuffle, Shield, Scale } from "lucide-react"

export function Slide4() {
  return (
    <div className="p-8 h-full flex flex-col justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-8"
      >
        <h2 className="text-3xl font-bold mb-4">Преимущества MCP</h2>
        <p className="text-xl text-slate-300">Ключевые преимущества использования Model Context Protocol</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-slate-800/60 backdrop-blur-sm p-6 rounded-xl border border-slate-700"
        >
          <div className="flex items-center mb-3">
            <div className="bg-blue-500/20 p-2 rounded-full mr-3">
              <Code2 className="h-5 w-5 text-blue-400" />
            </div>
            <h3 className="text-lg font-semibold">Стандартизация</h3>
          </div>
          <p className="text-slate-300">
            Упрощает интеграцию, устраняя необходимость в кастомных решениях для каждого источника данных
          </p>
          <div className="mt-4 bg-slate-900 p-3 rounded-lg border border-slate-700">
            <p className="text-sm text-slate-300">
              <CheckCircle className="inline-block h-4 w-4 text-green-400 mr-2" />
              Не нужно писать отдельный код для каждого источника данных
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-slate-800/60 backdrop-blur-sm p-6 rounded-xl border border-slate-700"
        >
          <div className="flex items-center mb-3">
            <div className="bg-purple-500/20 p-2 rounded-full mr-3">
              <Shuffle className="h-5 w-5 text-purple-400" />
            </div>
            <h3 className="text-lg font-semibold">Гибкость</h3>
          </div>
          <p className="text-slate-300">Позволяет легко переключаться между различными LLM и источниками данных</p>
          <div className="mt-4 bg-slate-900 p-3 rounded-lg border border-slate-700">
            <p className="text-sm text-slate-300">
              <CheckCircle className="inline-block h-4 w-4 text-green-400 mr-2" />
              Работает с различными данными, от локальных файлов до облачных сервисов
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-slate-800/60 backdrop-blur-sm p-6 rounded-xl border border-slate-700"
        >
          <div className="flex items-center mb-3">
            <div className="bg-green-500/20 p-2 rounded-full mr-3">
              <CheckCircle className="h-5 w-5 text-green-400" />
            </div>
            <h3 className="text-lg font-semibold">Улучшение качества ответов</h3>
          </div>
          <p className="text-slate-300">Доступ к актуальным данным улучшает точность и релевантность ответов</p>
          <div className="mt-4 bg-slate-900 p-3 rounded-lg border border-slate-700">
            <p className="text-sm text-slate-300">
              <CheckCircle className="inline-block h-4 w-4 text-green-400 mr-2" />
              Критично для бизнес-приложений, таких как анализ данных
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="bg-slate-800/60 backdrop-blur-sm p-6 rounded-xl border border-slate-700"
        >
          <div className="flex items-center mb-3">
            <div className="bg-red-500/20 p-2 rounded-full mr-3">
              <Shield className="h-5 w-5 text-red-400" />
            </div>
            <h3 className="text-lg font-semibold">Безопасность</h3>
          </div>
          <p className="text-slate-300">
            Включает рекомендации по защите, такие как использование TLS для удалённых соединений
          </p>
          <div className="mt-4 bg-slate-900 p-3 rounded-lg border border-slate-700">
            <p className="text-sm text-slate-300">
              <CheckCircle className="inline-block h-4 w-4 text-green-400 mr-2" />
              Важно для защиты чувствительных данных
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-slate-800/60 backdrop-blur-sm p-6 rounded-xl border border-slate-700 md:col-span-2 pb-12"
        >
          <div className="flex items-center mb-3">
            <div className="bg-orange-500/20 p-2 rounded-full mr-3">
              <Scale className="h-5 w-5 text-orange-400" />
            </div>
            <h3 className="text-lg font-semibold">Масштабируемость</h3>
          </div>
          <p className="text-slate-300">
            Поддерживает сложные рабочие процессы, позволяя ИИ интегрироваться с множеством источников данных
          </p>
          <div className="mt-4 bg-slate-900 p-3 rounded-lg border border-slate-700">
            <p className="text-sm text-slate-300">
              <CheckCircle className="inline-block h-4 w-4 text-green-400 mr-2" />
              Делает MCP подходящим для крупных систем и предприятий
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

