"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Code, Sparkles, ExternalLink, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const projects = [
  {
    title: "E-Commerce Dashboard",
    description: "Modern ve responsive admin dashboard tasarımı. Real-time analytics ve intuitive UI.",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    link: "#",
    github: "https://github.com"
  },
  {
    title: "Task Management App",
    description: "Drag & drop özellikli görev yönetim uygulaması. Dark mode destekli minimal tasarım.",
    technologies: ["Next.js", "Framer Motion", "Supabase"],
    link: "#",
    github: "https://github.com"
  },
  {
    title: "Portfolio Website",
    description: "Responsive ve SEO optimized kişisel portfolio sitesi. Modern animasyonlar.",
    technologies: ["Next.js", "Tailwind CSS", "MDX"],
    link: "#",
    github: "https://github.com"
  }
];

const articles = [
  {
    title: "React'te Performance Optimizasyonu",
    description: "React uygulamalarında performansı artırmanın etkili yolları ve best practices.",
    date: "15 Ocak 2025",
    slug: "react-performance-optimizasyonu"
  },
  {
    title: "Next.js App Router Deep Dive",
    description: "Next.js 13+ ile gelen App Router'ın detaylı incelemesi ve migration rehberi.",
    date: "8 Ocak 2025",
    slug: "nextjs-app-router-deep-dive"
  },
  {
    title: "CSS Grid vs Flexbox: Hangisini Ne Zaman Kullanmalı?",
    description: "Modern CSS layout teknikleri arasında doğru seçimi yapmanın püf noktaları.",
    date: "2 Ocak 2025",
    slug: "css-grid-vs-flexbox"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100 dark:from-gray-900 dark:via-slate-900 dark:to-indigo-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-blue-500/5 to-transparent" />
        
        <div className="relative container mx-auto px-4 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="flex items-center space-x-3"
                >
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                  >
                    <Sparkles className="h-6 w-6 text-blue-500" />
                  </motion.div>
                  <span className="text-sm font-orbitron font-medium text-blue-600 dark:text-blue-400 tracking-wider">MERHABA, BEN</span>
                </motion.div>
                
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="text-6xl lg:text-8xl font-orbitron font-black leading-tight"
                >
                  <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
                    Tolgien
                  </span>
                </motion.h1>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  className="text-xl font-orbitron font-medium text-muted-foreground tracking-wide"
                >
                  Frontend Developer • UI/UX Enthusiast
                </motion.p>
              </div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="text-lg font-fira-code text-muted-foreground leading-relaxed max-w-lg"
              >
                Modern web teknolojileri ile kullanıcı deneyimini ön planda tutan, 
                performanslı ve erişilebilir web uygulamaları geliştiriyorum.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Button asChild size="lg" className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <Link href="/projeler">
                    <Code className="mr-2 h-4 w-4" />
                    <span className="font-orbitron">Projelerimi İncele</span>
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                
                <Button asChild variant="outline" size="lg" className="border-2 border-primary/20 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300">
                  <Link href="/iletisim">
                    <span className="font-orbitron">İletişime Geç</span>
                  </Link>
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="relative"
            >
              <div className="relative">
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl blur-3xl opacity-30"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ 
                    duration: 8, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <img
                  src="https://images.pexels.com/photos/7988079/pexels-photo-7988079.jpeg"
                  alt="Developer illustration"
                  className="relative rounded-3xl shadow-2xl w-full max-w-md mx-auto object-cover aspect-square border-4 border-white/20 dark:border-gray-800/20"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Latest Projects Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-blue-50/30 to-purple-50/30 dark:from-background dark:via-slate-900/50 dark:to-indigo-950/50" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-orbitron font-black mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              En Yeni Projeler
            </h2>
            <p className="font-fira-code text-muted-foreground max-w-2xl mx-auto text-lg">
              Son dönemde üzerinde çalıştığım projeler ve teknik detayları
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="h-full group hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 border-border/50 hover:border-primary/30 glass hover:scale-105">
                  <CardHeader>
                    <CardTitle className="font-orbitron group-hover:text-primary transition-colors text-xl">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="font-fira-code">{project.description}</CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  
                  <CardFooter className="flex justify-between">
                    <Button variant="ghost" size="sm" asChild className="hover:bg-primary/10 transition-all duration-300">
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-3 w-3" />
                        <span className="font-orbitron">Demo</span>
                      </a>
                    </Button>
                    <Button variant="ghost" size="sm" asChild className="hover:bg-primary/10 transition-all duration-300">
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Code className="mr-2 h-3 w-3" />
                        <span className="font-orbitron">Kod</span>
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button asChild variant="outline" size="lg" className="border-2 border-primary/20 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300">
              <Link href="/projeler">
                <span className="font-orbitron">Tüm Projeleri Gör</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Latest Articles Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-orbitron font-black mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Son Makaleler
            </h2>
            <p className="font-fira-code text-muted-foreground max-w-2xl mx-auto text-lg">
              Yazılım dünyasından güncel konular ve deneyimlerim
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <motion.div
                key={article.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="h-full group hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 border-border/50 hover:border-primary/30 glass hover:scale-105">
                  <CardHeader>
                    <div className="flex items-center text-sm text-muted-foreground mb-2">
                      <Calendar className="mr-2 h-3 w-3" />
                      <span className="font-fira-code">{article.date}</span>
                    </div>
                    <CardTitle className="font-orbitron group-hover:text-primary transition-colors line-clamp-2 text-xl">
                      {article.title}
                    </CardTitle>
                    <CardDescription className="font-fira-code line-clamp-3">
                      {article.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardFooter>
                    <Button variant="ghost" size="sm" asChild className="p-0 h-auto hover:text-primary transition-all duration-300">
                      <Link href={`/makaleler/${article.slug}`}>
                        <span className="font-orbitron">Devamını Oku</span>
                        <ArrowRight className="ml-1 h-3 w-3" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button asChild variant="outline" size="lg" className="border-2 border-primary/20 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300">
              <Link href="/makaleler">
                <span className="font-orbitron">Tüm Makaleleri Gör</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}