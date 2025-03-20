"use client"

import { motion } from "framer-motion"
import { Code, Database, Globe, Github, BrainCircuit } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"

export function Slide5() {
  return (
    <div className="p-8 h-full flex flex-col justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-6"
      >
        <h2 className="text-3xl font-bold mb-3">Примеры и сценарии</h2>
        <p className="text-xl text-slate-300">Обзор доступных серверов Model Context Protocol</p>
      </motion.div>

      <Tabs defaultValue="reference" className="w-full">
        <TabsList className="grid grid-cols-3 mb-4">
          <TabsTrigger value="reference">Референтные реализации</TabsTrigger>
          <TabsTrigger value="official">Официальные интеграции</TabsTrigger>
          <TabsTrigger value="community">Сообщество</TabsTrigger>
        </TabsList>

        <ScrollArea className="h-[350px] rounded-md border border-slate-700 bg-slate-800/60 backdrop-blur-sm mb-12">
          <TabsContent value="reference" className="p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-slate-900/60 p-4 rounded-lg border border-slate-700"
              >
                <h3 className="text-lg font-semibold mb-3 flex items-center">
                  <Database className="h-5 w-5 mr-2 text-blue-400" />
                  Данные и файловые системы
                </h3>
                <ul className="space-y-2 text-slate-300">
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    <span>
                      <span className="font-medium">Файловая система</span> — безопасные операции с файлами
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    <span>
                      <span className="font-medium">PostgreSQL</span> — доступ к базе данных только для чтения
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    <span>
                      <span className="font-medium">SQLite</span> — взаимодействие с базой данных
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    <span>
                      <span className="font-medium">Google Drive</span> — доступ к файлам и поиск
                    </span>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-slate-900/60 p-4 rounded-lg border border-slate-700"
              >
                <h3 className="text-lg font-semibold mb-3 flex items-center">
                  <Code className="h-5 w-5 mr-2 text-purple-400" />
                  Инструменты разработки
                </h3>
                <ul className="space-y-2 text-slate-300">
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">•</span>
                    <span>
                      <span className="font-medium">Git</span> — чтение, поиск и управление репозиториями
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">•</span>
                    <span>
                      <span className="font-medium">GitHub</span> — управление репозиторием и API
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">•</span>
                    <span>
                      <span className="font-medium">GitLab</span> — интеграция API для управления проектами
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">•</span>
                    <span>
                      <span className="font-medium">Sentry</span> — получение и анализ проблем
                    </span>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-slate-900/60 p-4 rounded-lg border border-slate-700"
              >
                <h3 className="text-lg font-semibold mb-3 flex items-center">
                  <Globe className="h-5 w-5 mr-2 text-green-400" />
                  Автоматизация веб-сайтов
                </h3>
                <ul className="space-y-2 text-slate-300">
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">•</span>
                    <span>
                      <span className="font-medium">Brave Search</span> — веб- и локальный поиск
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">•</span>
                    <span>
                      <span className="font-medium">Fetch</span> — извлечение и преобразование веб-контента
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">•</span>
                    <span>
                      <span className="font-medium">Puppeteer</span> — автоматизация браузера и веб-скрапинг
                    </span>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="bg-slate-900/60 p-4 rounded-lg border border-slate-700"
              >
                <h3 className="text-lg font-semibold mb-3 flex items-center">
                  <BrainCircuit className="h-5 w-5 mr-2 text-orange-400" />
                  ИИ и специализированные инструменты
                </h3>
                <ul className="space-y-2 text-slate-300">
                  <li className="flex items-start">
                    <span className="text-orange-400 mr-2">•</span>
                    <span>
                      <span className="font-medium">EverArt</span> — генерация изображений с помощью ИИ
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-400 mr-2">•</span>
                    <span>
                      <span className="font-medium">Последовательное мышление</span> — динамическое решение проблем
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-400 mr-2">•</span>
                    <span>
                      <span className="font-medium">AWS</span> — извлечение из базы знаний
                    </span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </TabsContent>

          <TabsContent value="official" className="p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-slate-900/60 p-4 rounded-lg border border-slate-700 col-span-1 md:col-span-2"
              >
                <h3 className="text-lg font-semibold mb-3">Официальные интеграции от компаний</h3>
                <p className="text-slate-300 mb-3">Эти MCP-серверы обслуживаются компаниями для своих платформ</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-slate-900/60 p-4 rounded-lg border border-slate-700"
              >
                <ul className="space-y-2 text-slate-300">
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    <span>
                      <span className="font-medium">Axiom</span> — анализ журналов и данных событий
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    <span>
                      <span className="font-medium">Browserbase</span> — автоматизация браузера в облаке
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    <span>
                      <span className="font-medium">Cloudflare</span> — управление ресурсами на платформе
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    <span>
                      <span className="font-medium">E2B</span> — выполнение кода в безопасных песочницах
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    <span>
                      <span className="font-medium">Neon</span> — взаимодействие с бессерверной Postgres
                    </span>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-slate-900/60 p-4 rounded-lg border border-slate-700"
              >
                <ul className="space-y-2 text-slate-300">
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">•</span>
                    <span>
                      <span className="font-medium">Obsidian</span> — чтение и поиск заметок Markdown
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">•</span>
                    <span>
                      <span className="font-medium">Qdrant</span> — семантическая память с векторным поиском
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">•</span>
                    <span>
                      <span className="font-medium">Raygun</span> — доступ к данным отчетов о сбоях
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">•</span>
                    <span>
                      <span className="font-medium">Stripe</span> — взаимодействие с API Stripe
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">•</span>
                    <span>
                      <span className="font-medium">Weaviate</span> — Agentic RAG через коллекции Weaviate
                    </span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </TabsContent>

          <TabsContent value="community" className="p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-slate-900/60 p-4 rounded-lg border border-slate-700 col-span-1 md:col-span-2"
              >
                <h3 className="text-lg font-semibold mb-3">Основные моменты сообщества</h3>
                <p className="text-slate-300 mb-3">
                  Растущая экосистема серверов, разработанных сообществом, расширяет возможности MCP
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-slate-900/60 p-4 rounded-lg border border-slate-700"
              >
                <ul className="space-y-2 text-slate-300">
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">•</span>
                    <span>
                      <span className="font-medium">Docker</span> — управление контейнерами и образами
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">•</span>
                    <span>
                      <span className="font-medium">Kubernetes</span> — управление модулями и службами
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">•</span>
                    <span>
                      <span className="font-medium">Linear</span> — управление проектами и задачами
                    </span>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-slate-900/60 p-4 rounded-lg border border-slate-700"
              >
                <ul className="space-y-2 text-slate-300">
                  <li className="flex items-start">
                    <span className="text-orange-400 mr-2">•</span>
                    <span>
                      <span className="font-medium">Snowflake</span> — взаимодействие с базами данных
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-400 mr-2">•</span>
                    <span>
                      <span className="font-medium">Spotify</span> — управление воспроизведением и плейлистами
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-400 mr-2">•</span>
                    <span>
                      <span className="font-medium">Todoist</span> — интеграция управления задачами
                    </span>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="bg-slate-900/60 p-4 rounded-lg border border-slate-700 col-span-1 md:col-span-2"
              >
                <div className="flex items-center text-slate-300">
                  <Github className="h-5 w-5 mr-2 text-slate-400" />
                  <span>
                    Полный список серверов сообщества можно найти в{" "}
                    <span className="text-blue-400">репозитории серверов MCP</span>
                  </span>
                </div>
              </motion.div>
            </div>
          </TabsContent>
        </ScrollArea>
      </Tabs>
    </div>
  )
}

