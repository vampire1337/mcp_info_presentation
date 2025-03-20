"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github, FileText, Code, Link2, BookMarked } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function Slide7() {
  return (
    <div className="p-8 h-full flex flex-col justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-6"
      >
        <h2 className="text-3xl font-bold mb-4">Ключевые источники</h2>
        <p className="text-xl text-slate-300">Ресурсы для дальнейшего изучения и работы с Model Context Protocol</p>
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
              <BookMarked className="h-6 w-6 text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold">Основная документация</h3>
          </div>
          <ul className="space-y-3">
            <li className="flex items-center">
              <Button variant="link" className="text-blue-400 p-0 h-auto font-normal flex items-center" asChild>
                <a href="https://modelcontextprotocol.io/introduction" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Официальный сайт MCP
                </a>
              </Button>
              <Badge variant="outline" className="ml-2 bg-blue-500/10 text-blue-400 border-blue-500/30 text-xs">
                Основной ресурс
              </Badge>
            </li>
            <li className="flex items-center">
              <Button variant="link" className="text-blue-400 p-0 h-auto font-normal flex items-center" asChild>
                <a
                  href="https://docs.cursor.com/context/model-context-protocol"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FileText className="h-4 w-4 mr-2" />
                  Документация MCP от Cursor
                </a>
              </Button>
            </li>
            <li className="flex items-center">
              <Button variant="link" className="text-blue-400 p-0 h-auto font-normal flex items-center" asChild>
                <a href="https://modelcontextprotocol.io/development/roadmap" target="_blank" rel="noopener noreferrer">
                  <Link2 className="h-4 w-4 mr-2" />
                  Дорожная карта развития MCP
                </a>
              </Button>
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
              <Code className="h-6 w-6 text-purple-400" />
            </div>
            <h3 className="text-xl font-semibold">Репозитории и ресурсы</h3>
          </div>
          <ul className="space-y-3">
            <li className="flex items-center">
              <Button variant="link" className="text-purple-400 p-0 h-auto font-normal flex items-center" asChild>
                <a href="https://github.com/modelcontextprotocol" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4 mr-2" />
                  Model Context Protocol на GitHub
                </a>
              </Button>
              <Badge variant="outline" className="ml-2 bg-purple-500/10 text-purple-400 border-purple-500/30 text-xs">
                Официальный
              </Badge>
            </li>
            <li className="flex items-center">
              <Button variant="link" className="text-purple-400 p-0 h-auto font-normal flex items-center" asChild>
                <a href="https://github.com/punkpeye/awesome-mcp-servers" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4 mr-2" />
                  Подборка MCP серверов
                </a>
              </Button>
            </li>
            <li className="flex items-center">
              <Button variant="link" className="text-purple-400 p-0 h-auto font-normal flex items-center" asChild>
                <a href="https://github.com/punkpeye/awesome-mcp-clients" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4 mr-2" />
                  Подборка MCP клиентов
                </a>
              </Button>
            </li>
          </ul>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="bg-gradient-to-r from-slate-900/80 via-slate-800/80 to-slate-900/80 backdrop-blur-sm p-6 rounded-xl border border-slate-700 text-center mb-12"
      >
        <h3 className="text-xl font-semibold mb-4">Заключение</h3>
        <p className="text-slate-300 mb-6">
          Model Context Protocol открывает новые возможности для интеграции LLM с внешними данными и инструментами,
          делая ИИ более полезным и эффективным для решения практических задач.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button className="bg-blue-600 hover:bg-blue-700 transition-colors" asChild>
            <a href="https://github.com/modelcontextprotocol" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              GitHub репозиторий
            </a>
          </Button>
          <Button className="bg-purple-600 hover:bg-purple-700 transition-colors" asChild>
            <a href="https://modelcontextprotocol.io/introduction" target="_blank" rel="noopener noreferrer">
              <FileText className="mr-2 h-4 w-4" />
              Документация MCP
            </a>
          </Button>
          <Button className="bg-green-600 hover:bg-green-700 transition-colors" asChild>
            <a href="https://modelcontextprotocol.io/development/roadmap" target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" />
              Дорожная карта MCP
            </a>
          </Button>
        </div>
      </motion.div>
    </div>
  )
}

