import './globals.css';
import type { Metadata } from 'next';
import { Orbitron, Fira_Code } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { PageTransition } from '@/components/page-transition';

const orbitron = Orbitron({ 
  subsets: ['latin'],
  variable: '--font-orbitron',
  weight: ['400', '500', '600', '700', '800', '900'],
});

const firaCode = Fira_Code({ 
  subsets: ['latin'],
  variable: '--font-fira-code',
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Tolgien - Frontend Developer',
  description: 'Frontend Developer • UI/UX Enthusiast',
  keywords: ['Frontend Developer', 'React', 'Next.js', 'TypeScript', 'UI/UX'],
  authors: [{ name: 'Tolgien' }],
  creator: 'Tolgien',
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    title: 'Tolgien - Frontend Developer',
    description: 'Frontend Developer • UI/UX Enthusiast',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body className={`${orbitron.variable} ${firaCode.variable} font-fira-code antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          <div className="flex flex-col min-h-screen bg-background text-foreground">
            <Navbar />
            <PageTransition>
              <main className="flex-1">
                {children}
              </main>
            </PageTransition>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}