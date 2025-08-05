"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Code, Lightbulb, Users, Award, Calendar, MapPin } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const technologies = [
  { name: 'React', icon: '⚛️', level: 'Advanced' },
  { name: 'Next.js', icon: '▲', level: 'Advanced' },
  { name: 'TypeScript', icon: '📘', level: 'Advanced' },
  { name: 'Tailwind CSS', icon: '🎨', level: 'Advanced' },
  { name: 'Framer Motion', icon: '🎭', level: 'Intermediate' },
  { name: 'Node.js', icon: '💚', level: 'Intermediate' },
  { name: 'GraphQL', icon: '🔗', level: 'Intermediate' },
  { name: 'PostgreSQL', icon: '🐘', level: 'Intermediate' },
];

const timeline = [
  {
    year: '2025',
    title: 'Senior Frontend Developer',
    company: 'TechCorp',
    location: 'İstanbul, Türkiye',
    description: 'React ve Next.js kullanarak enterprise ölçekli web uygulamaları geliştiriyorum.',
    type: 'work'
  },
  {
    year: '2024',
    title: 'Freelance Developer',
    company: 'Serbest Çalışma',
    location: 'Remote',
    description: 'Çeşitli startuplar ve ajanslar için frontend projeleri geliştirdim.',
    type: 'work'
  },
  {
    year: '2023',
    title: 'Frontend Developer',
    company: 'StartupXYZ',
    location: 'İstanbul, Türkiye',
    description: 'Fintech startup\'ında MVP geliştirme ve kullanıcı deneyimi optimizasyonu.',
    type: 'work'
  },
  {
    year: '2022',
    title: 'Bilgisayar Mühendisliği',
    company: 'İstanbul Teknik Üniversitesi',
    location: 'İstanbul, Türkiye',
    description: 'Web teknolojileri ve yazılım geliştirme alanında uzmanlaştım.',
    type: 'education'
  },
];

export default function About() {
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
            Hakkımda
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Yazılım geliştirme yolculuğum, teknolojilere yaklaşımım ve vizyonum
          </p>
        </motion.div>

        {/* About Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="max-w-4xl mx-auto mb-20"
        >
          <Card>
            <CardContent className="p-8">
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="text-lg leading-relaxed mb-6">
                  Merhaba! Ben Tolgien, 5+ yıllık deneyime sahip bir frontend developer'ım. 
                  Yazılım dünyasına olan tutkum, sürekli öğrenme isteğim ve kullanıcı deneyimini 
                  ön planda tutma prensibim ile projeler geliştiriyorum.
                </p>
                
                <p className="text-lg leading-relaxed mb-6">
                  Modern web teknolojilerini kullanarak, performanslı, erişilebilir ve 
                  görsel olarak etkileyici web uygulamaları oluşturmayı seviyorum. 
                  Clean code prensiplerini benimser, sürdürülebilir ve ölçeklenebilir 
                  çözümler üretmeye odaklanırım.
                </p>

                <p className="text-lg leading-relaxed">
                  Boş zamanlarımda açık kaynak projelere katkıda bulunur, 
                  teknoloji blogları okur ve yeni teknolojileri deneyimlerim. 
                  Ayrıca yazılım topluluklarında aktif olarak yer alır, 
                  deneyimlerimi paylaşmayı severim.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-space-grotesk font-bold text-center mb-12">
            Kullandığım Teknolojiler
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Card className="text-center p-6 hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/20">
                  <div className="text-3xl mb-3">{tech.icon}</div>
                  <h3 className="font-semibold mb-2">{tech.name}</h3>
                  <Badge variant={tech.level === 'Advanced' ? 'default' : 'secondary'}>
                    {tech.level}
                  </Badge>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-space-grotesk font-bold text-center mb-12">
            Kariyer Geçmişi
          </h2>
          
          <div className="max-w-4xl mx-auto relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border" />
            
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <motion.div
                  key={`${item.year}-${item.title}`}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="relative flex items-start space-x-4"
                >
                  {/* Timeline Dot */}
                  <div className={`relative z-10 flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center ${
                    item.type === 'work' 
                      ? 'bg-primary text-primary-foreground' 
                      : 'bg-secondary text-secondary-foreground'
                  }`}>
                    {item.type === 'work' ? (
                      <Code className="h-6 w-6" />
                    ) : (
                      <Award className="h-6 w-6" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <Card className="border-border/50">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <Badge variant="outline">{item.year}</Badge>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <MapPin className="mr-1 h-3 w-3" />
                            {item.location}
                          </div>
                        </div>
                        <CardTitle className="text-xl">{item.title}</CardTitle>
                        <CardDescription className="text-base font-medium text-primary">
                          {item.company}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">{item.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h2 className="text-3xl font-space-grotesk font-bold text-center mb-12">
            Değerlerim
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Code,
                title: 'Clean Code',
                description: 'Okunabilir, sürdürülebilir ve test edilebilir kod yazma prensibini benimserim.'
              },
              {
                icon: Lightbulb,
                title: 'Sürekli Öğrenme',
                description: 'Teknolojinin hızla değiştiği bu dünyada kendimi sürekli geliştirmeye odaklanırım.'
              },
              {
                icon: Users,
                title: 'Kullanıcı Odaklılık',
                description: 'Her projeyi son kullanıcının deneyimini ön planda tutarak geliştiririm.'
              }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="text-center p-8 h-full hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/20">
                  <value.icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}