import './globals.css';
import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
});

export const metadata: Metadata = {
  title: 'Pugazhendhi GM - Software Engineer',
  description: 'Software Engineer specializing in building exceptional digital experiences. Currently focused on building accessible, human-centered products with React.js, React Native, TypeScript, and AWS.',
  keywords: 'Software Engineer, React.js, React Native, TypeScript, AWS, Frontend Developer, Full Stack Developer, JavaScript, Node.js, Python, Web Developer',
  authors: [{ name: 'Pugazhendhi GM' }],
  openGraph: {
    title: 'Pugazhendhi GM - Software Engineer',
    description: 'Software Engineer specializing in building exceptional digital experiences with React.js, React Native, TypeScript, and AWS.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pugazhendhi GM - Software Engineer',
    description: 'Software Engineer specializing in building exceptional digital experiences.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}