"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Github, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Slide1 } from "./slides/slide1"
import { Slide2 } from "./slides/slide2"
import { Slide3 } from "./slides/slide3"
import { Slide4 } from "./slides/slide4"
import { Slide5 } from "./slides/slide5"
import { Slide6 } from "./slides/slide6"
import { Slide7 } from "./slides/slide7"
import { Progress } from "@/components/ui/progress"

export function Presentation() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const totalSlides = 7

  const slides = [
    <Slide1 key="slide1" />,
    <Slide2 key="slide2" />,
    <Slide3 key="slide3" />,
    <Slide4 key="slide4" />,
    <Slide5 key="slide5" />,
    <Slide6 key="slide6" />,
    <Slide7 key="slide7" />,
  ]

  const nextSlide = () => {
    if (currentSlide < totalSlides - 1 && !isAnimating) {
      setIsAnimating(true)
      setCurrentSlide(currentSlide + 1)
    }
  }

  const prevSlide = () => {
    if (currentSlide > 0 && !isAnimating) {
      setIsAnimating(true)
      setCurrentSlide(currentSlide - 1)
    }
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") nextSlide()
      if (e.key === "ArrowLeft") prevSlide()
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [currentSlide])

  const slideNames = [
    "Введение в MCP",
    "Почему это важно",
    "Как работает MCP",
    "Преимущества MCP",
    "Примеры и сценарии",
    "Возможности разработки",
    "Ключевые источники",
  ]

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center p-4 md:p-8">
      <div className="w-full max-w-5xl mx-auto mb-2 flex justify-between items-center">
        <Badge
          variant="outline"
          className="bg-slate-800/80 backdrop-blur-sm text-white border-slate-700 whitespace-nowrap"
        >
          Model Context Protocol
        </Badge>
        <Badge
          variant="outline"
          className="bg-slate-800/80 backdrop-blur-sm text-white border-slate-700 whitespace-nowrap"
        >
          Слайд {currentSlide + 1}/{totalSlides}
        </Badge>
      </div>

      <div className="w-full max-w-5xl mx-auto relative overflow-hidden rounded-xl shadow-2xl bg-slate-900 border border-slate-700">
        <div className="absolute top-0 left-0 w-full z-10">
          <Progress value={((currentSlide + 1) / totalSlides) * 100} className="h-1 rounded-none bg-slate-800" />
        </div>

        <AnimatePresence mode="wait" onExitComplete={() => setIsAnimating(false)}>
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="min-h-[500px] md:min-h-[600px]"
          >
            {slides[currentSlide]}
          </motion.div>
        </AnimatePresence>

        <div className="absolute bottom-0 left-0 right-0 flex flex-col items-center">
          <div className="flex gap-1 mb-3">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <Button
                key={index}
                variant="outline"
                size="icon"
                className={`w-2 h-2 p-0 rounded-full ${
                  currentSlide === index
                    ? "bg-primary border-primary"
                    : "bg-slate-800 border-slate-700 hover:bg-slate-700"
                }`}
                onClick={() => {
                  if (!isAnimating) {
                    setIsAnimating(true)
                    setCurrentSlide(index)
                  }
                }}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <div className="w-full flex justify-between items-center px-6 py-3 bg-slate-900/80 backdrop-blur-sm border-t border-slate-700">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              disabled={currentSlide === 0 || isAnimating}
              className="bg-slate-800/50 backdrop-blur-sm text-white border-slate-700 hover:bg-slate-700 hover:text-white"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            <div className="text-xs text-slate-400">MCP Presentation</div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              disabled={currentSlide === totalSlides - 1 || isAnimating}
              className="bg-slate-800/50 backdrop-blur-sm text-white border-slate-700 hover:bg-slate-700 hover:text-white"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      <div className="mt-6 w-full max-w-5xl">
        <Tabs defaultValue="slides" className="w-full">
          <TabsList className="grid grid-cols-2 bg-slate-800/50 backdrop-blur-sm border border-slate-700">
            <TabsTrigger value="slides">Слайды</TabsTrigger>
            <TabsTrigger value="info">Информация</TabsTrigger>
          </TabsList>
          <TabsContent value="slides" className="mt-2">
            <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700 p-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                {slideNames.map((name, index) => (
                  <Button
                    key={index}
                    variant={currentSlide === index ? "default" : "outline"}
                    className={
                      currentSlide !== index ? "bg-slate-800 border-slate-700 hover:bg-slate-700 text-white" : ""
                    }
                    onClick={() => {
                      if (!isAnimating) {
                        setIsAnimating(true)
                        setCurrentSlide(index)
                      }
                    }}
                  >
                    {index + 1}. {name}
                  </Button>
                ))}
              </div>
            </Card>
          </TabsContent>
          <TabsContent value="info" className="mt-2">
            <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700 p-4">
              <div className="flex flex-col gap-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2">О презентации</h3>
                  <p>
                    Интерактивная презентация о Model Context Protocol (MCP) — открытом стандарте, представленном
                    компанией Anthropic в ноябре 2024 года.
                  </p>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" className="bg-slate-800 border-slate-700 hover:bg-slate-700 text-white">
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </Button>
                  <Button variant="outline" className="bg-slate-800 border-slate-700 hover:bg-slate-700 text-white">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Официальный сайт MCP
                  </Button>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <div className="w-full max-w-5xl mt-4 text-center">
        <a
          href="https://github.com/vampire1337"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-slate-500 hover:text-slate-300 transition-colors flex items-center justify-center gap-1"
        >
          <Github className="h-3 w-3" />© 2025 github.com/vampire1337
        </a>
      </div>
    </div>
  )
}

