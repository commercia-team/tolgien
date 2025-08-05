"use client";

import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Search, Calendar, ArrowRight, Tag } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const articles = [
  {
    title: "React'te Performance Optimizasyonu",
    description: "React uygulamalarında performansı artırmanın etkili yolları ve best practices. useMemo, useCallback, React.memo gibi tekniklerin doğru kullanımı.",
    date: "15 Ocak 2025",
    slug: "react-performance-optimizasyonu",
    tags: ["React", "Performance", "Optimization"],
    readTime: "8 dakika"
  },
  {
    title: "Next.js App Router Deep Dive",
    description: "Next.js 13+ ile gelen App Router'ın detaylı incelemesi ve migration rehberi. Server Components, Client Components ve yeni yapıların analizi.",
    date: "8 Ocak 2025",
    slug: "nextjs-app-router-deep-dive",
    tags: ["Next.js", "React", "SSR"],
    readTime: "12 dakika"
  },
  {
    title: "CSS Grid vs Flexbox: Hangisini Ne Zaman Kullanmalı?",
    description: "Modern CSS layout teknikleri arasında doğru seçimi yapmanın püf noktaları. Pratik örnekler ve kullanım senaryoları.",
    date: "2 Ocak 2025",
    slug: "css-grid-vs-flexbox",
    tags: ["CSS", "Layout", "Frontend"],
    readTime: "6 dakika"
  },
  {
    title: "TypeScript ile Type-Safe React Hooks",
    description: "TypeScript kullanarak type-safe React hooks oluşturma teknikleri. Custom hooks ve generic tipler ile güvenli kod yazma.",
    date: "28 Aralık 2024",
    slug: "typescript-type-safe-react-hooks",
    tags: ["TypeScript", "React", "Hooks"],
    readTime: "10 dakika"
  },
  {
    title: "Tailwind CSS ile Responsive Design Mastery",
    description: "Tailwind CSS kullanarak responsive ve modern arayüzler oluşturma. Utility-first yaklaşımı ve component abstraction stratejileri.",
    date: "20 Aralık 2024",
    slug: "tailwind-css-responsive-design-mastery",
    tags: ["Tailwind CSS", "CSS", "Responsive"],
    readTime: "9 dakika"
  },
  {
    title: "Frontend Testing Strategies: Unit, Integration, E2E",
    description: "Frontend uygulamalarında kapsamlı test stratejileri. Jest, Testing Library ve Playwright ile etkili test yazma teknikleri.",
    date: "15 Aralık 2024",
    slug: "frontend-testing-strategies",
    tags: ["Testing", "Jest", "E2E"],
    readTime: "15 dakika"
  }
];

const allTags = Array.from(new Set(articles.flatMap(article => article.tags)));

export default function Articles() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const filteredArticles = useMemo(() => {
    return articles.filter(article => {
      const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          article.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesTag = !selectedTag || article.tags.includes(selectedTag);
      return matchesSearch && matchesTag;
    });
  }, [searchTerm, selectedTag]);

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
            Makaleler
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Yazılım geliştirme deneyimlerim, öğrendiklerim ve teknoloji dünyasından güncel konular
          </p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="max-w-4xl mx-auto mb-12 space-y-6"
        >
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Makale ara..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 h-12"
            />
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            <Button
              variant={selectedTag === null ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedTag(null)}
            >
              Tümü
            </Button>
            {allTags.map(tag => (
              <Button
                key={tag}
                variant={selectedTag === tag ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedTag(tag)}
              >
                <Tag className="mr-1 h-3 w-3" />
                {tag}
              </Button>
            ))}
          </div>
        </motion.div>

        {/* Articles Grid */}
        <div className="max-w-6xl mx-auto">
          {filteredArticles.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-muted-foreground text-lg">
                Aradığınız kriterlere uygun makale bulunamadı.
              </p>
            </motion.div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map((article, index) => (
                <motion.div
                  key={article.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                >
                  <Card className="h-full group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/20">
                    <CardHeader>
                      <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
                        <div className="flex items-center">
                          <Calendar className="mr-1 h-3 w-3" />
                          {article.date}
                        </div>
                        <span>{article.readTime}</span>
                      </div>
                      <CardTitle className="group-hover:text-primary transition-colors line-clamp-2">
                        {article.title}
                      </CardTitle>
                      <CardDescription className="line-clamp-3">
                        {article.description}
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent>
                      <div className="flex flex-wrap gap-1">
                        {article.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                    
                    <CardFooter>
                      <Button variant="ghost" size="sm" asChild className="p-0 h-auto group/button">
                        <Link href={`/makaleler/${article.slug}`}>
                          Devamını Oku
                          <ArrowRight className="ml-1 h-3 w-3 group-hover/button:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
          )}
        </div>

        {/* Newsletter CTA */}
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
                Yeni Makalelerden Haberdar Olun
              </CardTitle>
              <CardDescription className="text-base">
                Yazılım geliştirme ile ilgili yeni içerikler ve güncellemeler için beni takip edin
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    Twitter'da Takip Et
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    LinkedIn'de Bağlan
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