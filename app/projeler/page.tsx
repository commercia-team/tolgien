"use client";

import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Tag, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const projects = [
  {
    title: "E-Commerce Dashboard",
    description: "Modern ve responsive admin dashboard tasarımı. Real-time analytics, inventory management ve kullanıcı yönetimi özellikleri içeren kapsamlı bir admin paneli.",
    longDescription: "Next.js ve TypeScript kullanarak geliştirilmiş, modern e-ticaret admin dashboard'u. Real-time analytics, drag & drop özellikli görev yönetimi, inventory tracking ve gelişmiş filtreleme sistemi içerir.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Chart.js", "Framer Motion"],
    category: "Fullstack",
    link: "https://demo-ecommerce-dashboard.vercel.app",
    github: "https://github.com/tolgien/ecommerce-dashboard",
    image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg",
    featured: true
  },
  {
    title: "Task Management App",
    description: "Drag & drop özellikli görev yönetim uygulaması. Kanban board tasarımı, dark mode destekli minimal ve kullanıcı dostu arayüz.",
    longDescription: "React DnD kullanarak geliştirilmiş, drag & drop özellikli görev yönetim sistemi. Supabase backend ile real-time synchronization ve collaborative features.",
    technologies: ["Next.js", "Framer Motion", "Supabase", "React DnD", "Tailwind CSS"],
    category: "React",
    link: "https://task-management-demo.vercel.app",
    github: "https://github.com/tolgien/task-management",
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
    featured: true
  },
  {
    title: "Portfolio Website",
    description: "Responsive ve SEO optimized kişisel portfolio sitesi. Modern animasyonlar, dark/light theme desteği ve performans odaklı geliştirme.",
    longDescription: "Next.js App Router kullanarak geliştirilmiş, SEO optimized ve performance-first yaklaşımla tasarlanmış portfolio website. MDX ile blog sistemi entegrasyonu.",
    technologies: ["Next.js", "Tailwind CSS", "MDX", "Framer Motion", "Vercel"],
    category: "Next",
    link: "https://tolgien.com",
    github: "https://github.com/tolgien/portfolio",
    image: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg",
    featured: false
  },
  {
    title: "Weather Forecast App",
    description: "Real-time hava durumu uygulaması. Geolocation API, 7 günlük tahmin, interactive haritalar ve detaylı meteoroloji bilgileri.",
    longDescription: "OpenWeatherMap API kullanarak geliştirilmiş, geolocation destekli hava durumu uygulaması. Interactive haritalar ve gelişmiş animasyonlar içerir.",
    technologies: ["React", "OpenWeather API", "Leaflet", "Chart.js", "CSS Modules"],
    category: "React",
    link: "https://weather-forecast-demo.vercel.app",
    github: "https://github.com/tolgien/weather-app",
    image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg",
    featured: false
  },
  {
    title: "Expense Tracker",
    description: "Kişisel finans yönetimi uygulaması. Kategori bazlı harcama takibi, grafik raporlar ve budget planning özellikleri.",
    longDescription: "React Hook Form ve Zod validation kullanarak geliştirilmiş, comprehensive expense tracking sistemi. Data visualization ve export features.",
    technologies: ["React", "React Hook Form", "Zod", "Recharts", "Local Storage"],
    category: "React",
    link: "https://expense-tracker-demo.vercel.app",
    github: "https://github.com/tolgien/expense-tracker",
    image: "https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg",
    featured: false
  },
  {
    title: "Blog Platform",
    description: "Full-stack blog platformu. Markdown editör, comment sistemi, tag-based categorization ve advanced search functionality.",
    longDescription: "Next.js ve Prisma kullanarak geliştirilmiş, full-featured blog platform. Server-side rendering, comment system ve advanced SEO features.",
    technologies: ["Next.js", "Prisma", "PostgreSQL", "NextAuth.js", "Tailwind CSS"],
    category: "Fullstack",
    link: "https://blog-platform-demo.vercel.app",
    github: "https://github.com/tolgien/blog-platform",
    image: "https://images.pexels.com/photos/261662/pexels-photo-261662.jpeg",
    featured: true
  }
];

const categories = ["Tümü", "React", "Next", "Fullstack", "UI"];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("Tümü");

  const filteredProjects = useMemo(() => {
    if (selectedCategory === "Tümü") {
      return projects;
    }
    return projects.filter(project => project.category === selectedCategory);
  }, [selectedCategory]);

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <div className="min-h-screen py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl lg:text-5xl font-space-grotesk font-bold mb-4">
            Projeler
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Çalıştığım projeler, kullandığım teknolojiler ve geliştirme süreçleri
          </p>
        </motion.div>

        {/* Featured Projects */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-space-grotesk font-bold text-center mb-12">
            Öne Çıkan Projeler
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <Card className="h-full group hover:shadow-xl transition-all duration-500 border-border/50 hover:border-primary/20 overflow-hidden">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                      Öne Çıkan
                    </Badge>
                  </div>
                  
                  <CardHeader>
                    <CardTitle className="group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-base">
                      {project.longDescription}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  
                  <CardFooter className="flex justify-between">
                    <Button variant="default" size="sm" asChild>
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-3 w-3" />
                        Canlı Demo
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-3 w-3" />
                        GitHub
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* All Projects */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-space-grotesk font-bold text-center mb-8">
            Tüm Projeler
          </h2>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <Filter className="h-5 w-5 text-muted-foreground mt-2" />
            {categories.map(category => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="transition-all duration-200"
              >
                <Tag className="mr-1 h-3 w-3" />
                {category}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                layout
              >
                <Card className="h-full group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/20 overflow-hidden">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  </div>
                  
                  <CardHeader>
                    <CardTitle className="text-lg group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription>
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{project.technologies.length - 3}
                        </Badge>
                      )}
                    </div>
                  </CardContent>
                  
                  <CardFooter className="flex justify-between">
                    <Button variant="ghost" size="sm" asChild>
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-3 w-3" />
                        Demo
                      </a>
                    </Button>
                    <Button variant="ghost" size="sm" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-3 w-3" />
                        Kod
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-muted-foreground text-lg">
                Bu kategoride henüz proje bulunmuyor.
              </p>
            </motion.div>
          )}
        </motion.section>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <Card className="max-w-2xl mx-auto text-center p-8 bg-gradient-to-r from-primary/5 via-purple-500/5 to-primary/5 border-primary/10">
            <CardHeader>
              <CardTitle className="text-2xl font-space-grotesk">
                Birlikte Çalışalım
              </CardTitle>
              <CardDescription className="text-base">
                Yeni bir proje fikriniz var mı? Beraber harika bir şeyler yaratabilir!
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <a href="/iletisim">
                    Proje Teklifi Gönder
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    GitHub'da İncele
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}