"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, Calendar, Clock, Tag, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const articles = {
  "react-performance-optimizasyonu": {
    title: "React'te Performance Optimizasyonu",
    description: "React uygulamalarında performansı artırmanın etkili yolları ve best practices.",
    date: "15 Ocak 2025",
    readTime: "8 dakika",
    tags: ["React", "Performance", "Optimization"],
    content: `
React uygulamalarının performansı, kullanıcı deneyimi açısından kritik bir faktördür. Bu makalede, React uygulamalarında performansı artırmanın en etkili yollarını inceleyeceğiz.

## React.memo ile Component Memoization

React.memo, bir komponentin props'ları değişmediği sürece tekrar render edilmesini önler:

\`\`\`javascript
import React from 'react';

const ExpensiveComponent = React.memo(({ data, onClick }) => {
  console.log('ExpensiveComponent rendered');
  
  return (
    <div>
      {data.map(item => (
        <div key={item.id} onClick={() => onClick(item)}>
          {item.name}
        </div>
      ))}
    </div>
  );
});

export default ExpensiveComponent;
\`\`\`

## useMemo ve useCallback Hooks

Bu hook'lar pahalı hesaplamaları ve fonksiyon referanslarını optimize eder:

\`\`\`javascript
import React, { useMemo, useCallback, useState } from 'react';

function DataProcessor({ items, onItemClick }) {
  const [filter, setFilter] = useState('');

  // Pahalı filtreleme işlemini memoize et
  const filteredItems = useMemo(() => {
    return items.filter(item => 
      item.name.toLowerCase().includes(filter.toLowerCase())
    );
  }, [items, filter]);

  // Callback fonksiyonunu memoize et
  const handleItemClick = useCallback((item) => {
    onItemClick(item);
  }, [onItemClick]);

  return (
    <div>
      <input 
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        placeholder="Filtrele..."
      />
      {filteredItems.map(item => (
        <div key={item.id} onClick={() => handleItemClick(item)}>
          {item.name}
        </div>
      ))}
    </div>
  );
}
\`\`\`

## Virtual Scrolling

Büyük listeler için virtual scrolling kullanın:

\`\`\`javascript
import { FixedSizeList as List } from 'react-window';

function VirtualizedList({ items }) {
  const Row = ({ index, style }) => (
    <div style={style}>
      {items[index].name}
    </div>
  );

  return (
    <List
      height={600}
      itemCount={items.length}
      itemSize={50}
      width="100%"
    >
      {Row}
    </List>
  );
}
\`\`\`

## Code Splitting

Lazy loading ile bundle boyutunu küçültün:

\`\`\`javascript
import React, { Suspense, lazy } from 'react';

const LazyComponent = lazy(() => import('./LazyComponent'));

function App() {
  return (
    <div>
      <Suspense fallback={<div>Yükleniyor...</div>}>
        <LazyComponent />
      </Suspense>
    </div>
  );
}
\`\`\`

## Sonuç

React performans optimizasyonu bir sanat gerektirir. Her optimizasyon tekniğini körü körüne kullanmak yerine, gerçek performans sorunlarını tespit edip hedefli çözümler uygulamak önemlidir.

Unutmayın: "Premature optimization is the root of all evil" - Donald Knuth
    `,
  },
  "nextjs-app-router-deep-dive": {
    title: "Next.js App Router Deep Dive",
    description: "Next.js 13+ ile gelen App Router'ın detaylı incelemesi ve migration rehberi.",
    date: "8 Ocak 2025",
    readTime: "12 dakika",
    tags: ["Next.js", "React", "SSR"],
    content: `
Next.js 13 ile birlikte gelen App Router, React Server Components ve yeni routing sistemi ile web geliştirme paradigmasını değiştiriyor.

## App Router vs Pages Router

App Router, pages router'a göre daha esnek ve güçlü bir yapı sunuyor:

\`\`\`
app/
├── layout.tsx          # Root layout
├── page.tsx           # Home page
├── about/
│   └── page.tsx       # About page
└── blog/
    ├── layout.tsx     # Blog layout
    ├── page.tsx       # Blog listing
    └── [slug]/
        └── page.tsx   # Blog post
\`\`\`

## Server Components vs Client Components

Server Components varsayılan olarak server-side render edilir:

\`\`\`javascript
// Server Component (varsayılan)
async function BlogPost({ params }) {
  const post = await fetch(\`https://api.example.com/posts/\${params.slug}\`);
  
  return (
    <article>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </article>
  );
}

export default BlogPost;
\`\`\`

Client Components için "use client" direktifi kullanın:

\`\`\`javascript
'use client';

import { useState } from 'react';

function InteractiveButton() {
  const [count, setCount] = useState(0);
  
  return (
    <button onClick={() => setCount(count + 1)}>
      Clicked {count} times
    </button>
  );
}
\`\`\`

## Layout System

Nested layout'lar ile tutarlı UI oluşturun:

\`\`\`javascript
// app/layout.tsx (Root Layout)
export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

// app/blog/layout.tsx (Blog Layout)
export default function BlogLayout({ children }) {
  return (
    <div className="blog-layout">
      <aside>
        <BlogSidebar />
      </aside>
      <main>{children}</main>
    </div>
  );
}
\`\`\`

## Data Fetching

Server Components'te doğrudan async/await kullanabilirsiniz:

\`\`\`javascript
async function Posts() {
  const res = await fetch('https://api.example.com/posts', {
    cache: 'force-cache' // Static generation
  });
  const posts = await res.json();
  
  return (
    <div>
      {posts.map(post => (
        <article key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.excerpt}</p>
        </article>
      ))}
    </div>
  );
}
\`\`\`

## Migration Strategy

Pages Router'dan App Router'a geçiş için:

1. **Aşamalı Migration**: Her route'u tek tek migrate edin
2. **Layout Extraction**: Ortak layout'ları çıkarın
3. **Client Component Identification**: Interaktif bileşenleri belirleyin
4. **Data Fetching Refactor**: getServerSideProps/getStaticProps'u kaldırın

## Sonuç

App Router, Next.js ekosisteminde büyük bir değişim. React'in geleceği Server Components üzerine kurulu ve App Router bu dönüşümün öncüsü.
    `,
  },
  "css-grid-vs-flexbox": {
    title: "CSS Grid vs Flexbox: Hangisini Ne Zaman Kullanmalı?",
    description: "Modern CSS layout teknikleri arasında doğru seçimi yapmanın püf noktaları.",
    date: "2 Ocak 2025",
    readTime: "6 dakika",
    tags: ["CSS", "Layout", "Frontend"],
    content: `
CSS Grid ve Flexbox, modern web geliştirmede en güçlü layout araçlarıdır. Her ikisinin de güçlü yanları ve ideal kullanım alanları vardır.

## Flexbox: Tek Boyutlu Layout

Flexbox, tek bir eksende (satır veya sütun) layout yapmak için idealdir:

\`\`\`css
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
}

.nav-links {
  display: flex;
  gap: 2rem;
  list-style: none;
}
\`\`\`

## CSS Grid: İki Boyutlu Layout

Grid, hem satır hem sütun kontrolü gerektiren complex layout'lar için mükemmeldir:

\`\`\`css
.page-layout {
  display: grid;
  grid-template-areas: 
    "header header header"
    "sidebar main aside"
    "footer footer footer";
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 250px 1fr 200px;
  min-height: 100vh;
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main { grid-area: main; }
.aside { grid-area: aside; }
.footer { grid-area: footer; }
\`\`\`

## Responsive Card Grid

Grid ile responsive card layout:

\`\`\`css
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 2rem;
}

.card {
  background: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}
\`\`\`

## Component İçi Layout

Flexbox, component içi element dizilimi için ideal:

\`\`\`css
.card {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.card-actions {
  display: flex;
  gap: 0.5rem;
  margin-top: auto; /* Push to bottom */
}
\`\`\`

## Karar Verme Kriterleri

**Flexbox Kullan:**
- Tek boyutlu layout (navbar, button group)
- Content-based sizing
- Component içi element dizilimi
- Center alignment işlemleri

**Grid Kullan:**
- İki boyutlu layout (page layout, image gallery)
- Fixed layout structure
- Complex responsive designs
- Overlapping elements

## Hybrid Approach

En iyi sonuç için ikisini birlikte kullanın:

\`\`\`css
/* Grid for page layout */
.app {
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
}

/* Flexbox for header content */
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* Grid for main content area */
.main {  
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

/* Flexbox for card internal layout */
.card {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
\`\`\`

## Sonuç

Grid ve Flexbox birbirinin rakibi değil, tamamlayıcısıdır. Doğru aracı doğru iş için seçmek, hem kod kalitesini hem de geliştirme deneyimini artırır.
    `,
  }
};

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = articles[params.slug as keyof typeof articles];

  if (!article) {
    notFound();
  }

  const renderContent = (content: string) => {
    const parts = content.split('```');
    return parts.map((part, index) => {
      if (index % 2 === 1) {
        // This is a code block
        const lines = part.split('\n');
        const language = lines[0];
        const code = lines.slice(1).join('\n');
        
        return (
          <div key={index} className="my-6">
            <SyntaxHighlighter
              language={language}
              style={oneDark}
              customStyle={{
                borderRadius: '0.5rem',
                fontSize: '0.875rem',
              }}
            >
              {code}
            </SyntaxHighlighter>
          </div>
        );
      } else {
        // This is regular text
        return (
          <div key={index} className="prose prose-lg max-w-none dark:prose-invert">
            {part.split('\n').map((line, lineIndex) => {
              if (line.startsWith('## ')) {
                return <h2 key={lineIndex} className="text-2xl font-space-grotesk font-bold mt-8 mb-4">{line.slice(3)}</h2>;
              }
              if (line.startsWith('# ')) {
                return <h1 key={lineIndex} className="text-3xl font-space-grotesk font-bold mt-8 mb-4">{line.slice(2)}</h1>;
              }
              if (line.trim() === '') {
                return <br key={lineIndex} />;
              }
              if (line.includes('`') && !line.includes('```')) {
                // Inline code
                const inlineCodePattern = /`([^`]+)`/g;
                const parts = line.split(inlineCodePattern);
                return (
                  <p key={lineIndex} className="mb-4">
                    {parts.map((part, partIndex) => 
                      partIndex % 2 === 1 ? 
                        <code key={partIndex} className="bg-muted px-1.5 py-0.5 rounded text-sm font-fira-code">{part}</code> : 
                        part
                    )}
                  </p>
                );
              }
              return <p key={lineIndex} className="mb-4">{line}</p>;
            })}
          </div>
        );
      }
    });
  };

  return (
    <div className="min-h-screen py-24">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Button variant="ghost" asChild className="group">
            <Link href="/makaleler">
              <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              Makalelere Dön
            </Link>
          </Button>
        </motion.div>

        {/* Article Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto mb-12"
        >
          <div className="space-y-6">
            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center">
                <Calendar className="mr-1 h-3 w-3" />
                {article.date}
              </div>
              <div className="flex items-center">
                <Clock className="mr-1 h-3 w-3" />
                {article.readTime}
              </div>
              <Button variant="ghost" size="sm" className="p-0 h-auto">
                <Share2 className="mr-1 h-3 w-3" />
                Paylaş
              </Button>
            </div>

            {/* Title */}
            <h1 className="text-4xl lg:text-5xl font-space-grotesk font-bold leading-tight">
              {article.title}
            </h1>

            {/* Description */}
            <p className="text-xl text-muted-foreground leading-relaxed">
              {article.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {article.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="flex items-center">
                  <Tag className="mr-1 h-3 w-3" />
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </motion.div>

        <Separator className="max-w-4xl mx-auto mb-12" />

        {/* Article Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <Card>
            <CardContent className="p-8 lg:p-12">
              <div className="space-y-6">
                {renderContent(article.content)}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Related Articles CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mt-16 text-center"
        >
          <Card className="p-8 bg-gradient-to-r from-primary/5 via-purple-500/5 to-primary/5 border-primary/10">
            <h3 className="text-2xl font-space-grotesk font-bold mb-4">
              Diğer Makaleler
            </h3>
            <p className="text-muted-foreground mb-6">
              Yazılım geliştirme ile ilgili daha fazla içerik için diğer makalelerime göz atın
            </p>
            <Button asChild size="lg">
              <Link href="/makaleler">
                Tüm Makaleleri Gör
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}