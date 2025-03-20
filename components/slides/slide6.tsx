"use client"

import { motion } from "framer-motion"
import { Code, FileCode, Terminal, BookOpen, Puzzle } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function Slide6() {
  return (
    <div className="p-8 h-full flex flex-col justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-6"
      >
        <h2 className="text-3xl font-bold mb-4">Возможности для разработки</h2>
        <p className="text-xl text-slate-300">Создание собственных MCP серверов с использованием официальных SDK</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-slate-800/60 backdrop-blur-sm p-6 rounded-xl border border-slate-700"
        >
          <div className="flex items-center mb-4">
            <div className="bg-blue-500/20 p-2 rounded-full mr-4">
              <BookOpen className="h-6 w-6 text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold">Документация</h3>
          </div>
          <p className="text-slate-300 mb-4">
            Официальная документация хорошо структурирована и содержит всю необходимую информацию, включая:
          </p>
          <ul className="space-y-2 text-slate-300">
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">•</span>
              <span>Подробное описание протокола и архитектуры</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">•</span>
              <span>Руководства по установке и настройке</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">•</span>
              <span>Практические примеры использования</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">•</span>
              <span>Рекомендации по безопасности и лучшие практики</span>
            </li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-slate-800/60 backdrop-blur-sm p-6 rounded-xl border border-slate-700"
        >
          <div className="flex items-center mb-4">
            <div className="bg-purple-500/20 p-2 rounded-full mr-4">
              <Puzzle className="h-6 w-6 text-purple-400" />
            </div>
            <h3 className="text-xl font-semibold">SDK для разработчиков</h3>
          </div>
          <p className="text-slate-300 mb-4">Доступны SDK для различных языков программирования:</p>
          <div className="grid grid-cols-2 gap-3 mb-4">
            <div className="bg-slate-900/60 p-3 rounded-lg border border-slate-700 flex items-center">
              <Code className="h-5 w-5 mr-2 text-blue-400" />
              <span className="font-medium">TypeScript/JavaScript</span>
            </div>
            <div className="bg-slate-900/60 p-3 rounded-lg border border-slate-700 flex items-center">
              <Code className="h-5 w-5 mr-2 text-green-400" />
              <span className="font-medium">Python</span>
            </div>
            <div className="bg-slate-900/60 p-3 rounded-lg border border-slate-700 flex items-center">
              <Code className="h-5 w-5 mr-2 text-orange-400" />
              <span className="font-medium">Java</span>
            </div>
            <div className="bg-slate-900/60 p-3 rounded-lg border border-slate-700 flex items-center">
              <Code className="h-5 w-5 mr-2 text-purple-400" />
              <span className="font-medium">Kotlin</span>
            </div>
          </div>
          <p className="text-slate-300">
            Каждый SDK включает примеры кода и инструменты для быстрого старта разработки.
          </p>
        </motion.div>
      </div>

      <Tabs defaultValue="typescript" className="w-full pb-12">
        <TabsList className="grid grid-cols-3 mb-4 bg-slate-900/60 border border-slate-700">
          <TabsTrigger value="typescript">TypeScript</TabsTrigger>
          <TabsTrigger value="python">Python</TabsTrigger>
          <TabsTrigger value="java">Java</TabsTrigger>
        </TabsList>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
          <TabsContent value="typescript" className="mt-0">
            <div className="bg-slate-800/60 backdrop-blur-sm p-4 rounded-xl border border-slate-700">
              <div className="flex items-center mb-3">
                <Terminal className="h-5 w-5 mr-2 text-slate-400" />
                <span className="font-medium">Установка и запуск</span>
              </div>
              <div className="bg-slate-900 p-3 rounded-lg border border-slate-700 font-mono text-sm overflow-x-auto mb-3">
                <pre className="text-green-400">npx -y @modelcontextprotocol/server-filesystem</pre>
              </div>
              <p className="text-slate-300 text-sm">
                TypeScript SDK предоставляет полный набор инструментов для создания серверов MCP с поддержкой
                асинхронных операций и типизации.
              </p>
            </div>
          </TabsContent>

          <TabsContent value="python" className="mt-0">
            <div className="bg-slate-800/60 backdrop-blur-sm p-4 rounded-xl border border-slate-700">
              <div className="flex items-center mb-3">
                <Terminal className="h-5 w-5 mr-2 text-slate-400" />
                <span className="font-medium">Установка и запуск</span>
              </div>
              <div className="bg-slate-900 p-3 rounded-lg border border-slate-700 font-mono text-sm overflow-x-auto mb-3">
                <pre className="text-green-400">pip install mcp-server-git python -m mcp_server_git</pre>
              </div>
              <p className="text-slate-300 text-sm">
                Python SDK обеспечивает простой интерфейс для создания серверов MCP с интеграцией популярных библиотек и
                фреймворков.
              </p>
            </div>
          </TabsContent>

          <TabsContent value="java" className="mt-0">
            <div className="bg-slate-800/60 backdrop-blur-sm p-4 rounded-xl border border-slate-700">
              <div className="flex items-center mb-3">
                <FileCode className="h-5 w-5 mr-2 text-slate-400" />
                <span className="font-medium">Интеграция в проекты</span>
              </div>
              <p className="text-slate-300 text-sm mb-3">
                Java SDK предоставляет надежный и типобезопасный интерфейс для создания серверов MCP в корпоративной
                среде.
              </p>
              <p className="text-slate-300 text-sm">
                Поддерживает интеграцию с популярными Java-фреймворками и обеспечивает высокую производительность.
              </p>
            </div>
          </TabsContent>
        </motion.div>
      </Tabs>
    </div>
  )
}

