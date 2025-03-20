"use client"

import { motion } from "framer-motion"
import { Server, Laptop, Database, Cloud, Globe } from "lucide-react"

export function Slide3() {
  return (
    <div className="p-8 h-full flex flex-col justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-6"
      >
        <h2 className="text-3xl font-bold mb-4">Как работает MCP</h2>
        <p className="text-xl text-slate-300">Архитектура "клиент-сервер" для стандартизированного доступа к данным</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mb-6"
      >
        <h3 className="text-xl font-semibold mb-4">Общая архитектура</h3>

        {/* Enhanced MCP Architecture Diagram */}
        <div className="relative w-full h-[320px] bg-slate-900/90 backdrop-blur-sm rounded-xl border border-slate-700 overflow-hidden mb-4">
          {/* Computer Label */}
          <div className="absolute top-0 left-0 w-full text-center py-2 bg-slate-800/80 text-white text-sm border-b border-slate-700">
            Ваш компьютер
          </div>

          {/* Host with MCP Client */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
            className="absolute left-[8%] top-[40%] w-[24%] h-[80px] bg-slate-800/90 border border-blue-500/30 rounded-md flex flex-col items-center justify-center p-2 shadow-lg shadow-blue-500/10"
          >
            <div className="bg-blue-500/20 p-1.5 rounded-full mb-1">
              <Laptop className="h-5 w-5 text-blue-400" />
            </div>
            <div className="text-center">
              <div className="font-medium text-white">Хост с MCP клиентом</div>
              <div className="text-slate-400 text-xs">(Claude, IDE, Tools)</div>
            </div>
          </motion.div>

          {/* MCP Server A */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, type: "spring", stiffness: 100 }}
            className="absolute left-[45%] top-[25%] w-[20%] h-[50px] bg-slate-800/90 border border-purple-500/30 rounded-md flex items-center justify-center shadow-lg shadow-purple-500/10"
          >
            <div className="bg-purple-500/20 p-1 rounded-full mr-2">
              <Server className="h-4 w-4 text-purple-400" />
            </div>
            <div className="font-medium text-white">MCP Server A</div>
          </motion.div>

          {/* MCP Server B */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, type: "spring", stiffness: 100 }}
            className="absolute left-[45%] top-[45%] w-[20%] h-[50px] bg-slate-800/90 border border-purple-500/30 rounded-md flex items-center justify-center shadow-lg shadow-purple-500/10"
          >
            <div className="bg-purple-500/20 p-1 rounded-full mr-2">
              <Server className="h-4 w-4 text-purple-400" />
            </div>
            <div className="font-medium text-white">MCP Server B</div>
          </motion.div>

          {/* MCP Server C */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, type: "spring", stiffness: 100 }}
            className="absolute left-[45%] top-[65%] w-[20%] h-[50px] bg-slate-800/90 border border-purple-500/30 rounded-md flex items-center justify-center shadow-lg shadow-purple-500/10"
          >
            <div className="bg-purple-500/20 p-1 rounded-full mr-2">
              <Server className="h-4 w-4 text-purple-400" />
            </div>
            <div className="font-medium text-white">MCP Server C</div>
          </motion.div>

          {/* Local Data Source A */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9, type: "spring", stiffness: 100 }}
            className="absolute right-[8%] top-[25%] w-[20%] h-[50px] bg-slate-800/90 border border-green-500/30 rounded-md flex items-center justify-center shadow-lg shadow-green-500/10"
          >
            <div className="bg-green-500/20 p-1 rounded-full mr-2">
              <Database className="h-4 w-4 text-green-400" />
            </div>
            <div className="font-medium text-white">Локальные данные A</div>
          </motion.div>

          {/* Local Data Source B */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.0, type: "spring", stiffness: 100 }}
            className="absolute right-[8%] top-[45%] w-[20%] h-[50px] bg-slate-800/90 border border-green-500/30 rounded-md flex items-center justify-center shadow-lg shadow-green-500/10"
          >
            <div className="bg-green-500/20 p-1 rounded-full mr-2">
              <Database className="h-4 w-4 text-green-400" />
            </div>
            <div className="font-medium text-white">Локальные данные B</div>
          </motion.div>

          {/* Internet Label */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
            className="absolute right-[18%] top-[65%] text-sm text-slate-400 font-medium"
          >
            Интернет
          </motion.div>

          {/* Remote Service */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2, type: "spring", stiffness: 100 }}
            className="absolute right-[8%] top-[75%] w-[20%] h-[50px] bg-slate-700/90 border border-blue-500/30 rounded-md flex items-center justify-center shadow-lg shadow-blue-500/10"
          >
            <div className="bg-blue-500/20 p-1 rounded-full mr-2">
              <Cloud className="h-4 w-4 text-blue-400" />
            </div>
            <div className="font-medium text-white">Удаленный сервис C</div>
          </motion.div>

          {/* Connection Lines - Using SVG for perfect straight lines */}
          <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }}>
            {/* Host to Server A */}
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ delay: 1.3, duration: 0.5 }}
              d={`M ${0.32 * 100}% ${0.4 * 100}% L ${0.45 * 100}% ${0.25 * 100}%`}
              stroke="#3b82f6"
              strokeWidth="2"
              fill="none"
            />
            <motion.text
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.6 }}
              x={`${0.36 * 100}%`}
              y={`${0.23 * 100}%`}
              fill="#3b82f6"
              fontSize="10"
              textAnchor="middle"
            >
              MCP Protocol
            </motion.text>

            {/* Host to Server B */}
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ delay: 1.4, duration: 0.5 }}
              d={`M ${0.32 * 100}% ${0.45 * 100}% L ${0.45 * 100}% ${0.45 * 100}%`}
              stroke="#3b82f6"
              strokeWidth="2"
              fill="none"
            />
            <motion.text
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.7 }}
              x={`${0.38 * 100}%`}
              y={`${0.43 * 100}%`}
              fill="#3b82f6"
              fontSize="10"
              textAnchor="middle"
            >
              MCP Protocol
            </motion.text>

            {/* Host to Server C */}
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.5 }}
              d={`M ${0.32 * 100}% ${0.5 * 100}% L ${0.45 * 100}% ${0.65 * 100}%`}
              stroke="#3b82f6"
              strokeWidth="2"
              fill="none"
            />
            <motion.text
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.8 }}
              x={`${0.36 * 100}%`}
              y={`${0.63 * 100}%`}
              fill="#3b82f6"
              fontSize="10"
              textAnchor="middle"
            >
              MCP Protocol
            </motion.text>

            {/* Server A to Data A */}
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ delay: 1.9, duration: 0.5 }}
              d={`M ${0.65 * 100}% ${0.25 * 100}% L ${0.8 * 100}% ${0.25 * 100}%`}
              stroke="#10b981"
              strokeWidth="2"
              fill="none"
            />

            {/* Server B to Data B */}
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ delay: 2.0, duration: 0.5 }}
              d={`M ${0.65 * 100}% ${0.45 * 100}% L ${0.8 * 100}% ${0.45 * 100}%`}
              stroke="#10b981"
              strokeWidth="2"
              fill="none"
            />

            {/* Server C to Remote Service - Vertical */}
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ delay: 2.1, duration: 0.5 }}
              d={`M ${0.65 * 100}% ${0.65 * 100}% L ${0.65 * 100}% ${0.75 * 100}%`}
              stroke="#3b82f6"
              strokeWidth="2"
              fill="none"
            />
            <motion.text
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.3 }}
              x={`${0.72 * 100}%`}
              y={`${0.7 * 100}%`}
              fill="#3b82f6"
              fontSize="10"
              textAnchor="middle"
            >
              Web APIs
            </motion.text>

            {/* Server C to Remote Service - Horizontal */}
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ delay: 2.2, duration: 0.5 }}
              d={`M ${0.65 * 100}% ${0.75 * 100}% L ${0.8 * 100}% ${0.75 * 100}%`}
              stroke="#3b82f6"
              strokeWidth="2"
              fill="none"
            />
          </svg>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-slate-800/60 backdrop-blur-sm p-4 rounded-lg border border-slate-700"
        >
          <ul className="space-y-2 text-slate-300">
            <li className="flex items-start">
              <div className="bg-blue-500/20 p-1 rounded-full mr-2 mt-1">
                <Laptop className="h-4 w-4 text-blue-400" />
              </div>
              <span>
                <span className="font-medium">Хосты MCP</span>: программы, такие как Claude Desktop, IDE или инструменты
                ИИ, которым требуется доступ к данным
              </span>
            </li>
            <li className="flex items-start">
              <div className="bg-purple-500/20 p-1 rounded-full mr-2 mt-1">
                <Globe className="h-4 w-4 text-purple-400" />
              </div>
              <span>
                <span className="font-medium">Клиенты MCP</span>: клиенты протокола, поддерживающие соединения 1:1 с
                серверами
              </span>
            </li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="bg-slate-800/60 backdrop-blur-sm p-4 rounded-lg border border-slate-700"
        >
          <ul className="space-y-2 text-slate-300">
            <li className="flex items-start">
              <div className="bg-green-500/20 p-1 rounded-full mr-2 mt-1">
                <Server className="h-4 w-4 text-green-400" />
              </div>
              <span>
                <span className="font-medium">Серверы MCP</span>: легкие программы, предоставляющие определенные
                возможности через стандартизированный протокол
              </span>
            </li>
            <li className="flex items-start">
              <div className="bg-orange-500/20 p-1 rounded-full mr-2 mt-1">
                <Database className="h-4 w-4 text-orange-400" />
              </div>
              <span>
                <span className="font-medium">Локальные источники данных</span>: файлы, базы данных и службы вашего
                компьютера
              </span>
            </li>
            <li className="flex items-start">
              <div className="bg-red-500/20 p-1 rounded-full mr-2 mt-1">
                <Cloud className="h-4 w-4 text-red-400" />
              </div>
              <span>
                <span className="font-medium">Удаленные службы</span>: внешние системы, доступные через Интернет (API)
              </span>
            </li>
          </ul>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="mt-6 bg-slate-800/60 backdrop-blur-sm p-4 rounded-lg border border-slate-700 pb-12"
      >
        <p className="text-slate-300 text-sm">
          MCP использует JSON-RPC для обмена данными между клиентами и серверами, обеспечивая стандартизированный
          интерфейс для различных источников данных.
        </p>
      </motion.div>
    </div>
  )
}

