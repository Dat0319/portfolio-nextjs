import { navMenus } from '@/data/navMenus';
import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { Poppins } from 'next/font/google';
import { ReactNode } from 'react';
import './globals.scss';

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
  preload: true,
  fallback: [
    'system-ui',
    'arial',
    'BlinkMacSystemFont',
    'Segoe UI',
    'Roboto',
    'Oxygen',
    'Ubuntu',
    'Fira Sans',
    'Droid Sans',
  ],
});

export const metadata: Metadata = {
  title: 'John Tran',
  description:
    'Experienced Full-Stack Developer with 6+ years of expertise in front-end development using React.js for web applications and React Native for cross-platform mobile apps, Backend including Node.js with MongoDB and .NET Mysql, delivering scalable and high-performance solutions. Passionate about building intuitive user experiences and optimizing application performance. I can work independently, as well as configure, build, and deploy projects and modules with a professional skill set in system design, architecture, and microservices. ﻿Business domains: E-commerce, Network Social, Medical, Education.',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: [
    {
      url: '/favicon-16x16.ico',
      rel: 'icon',
      sizes: '16x16',
      type: 'image/x-icon',
    },
    {
      url: '/favicon-32x32.ico',
      rel: 'icon',
      sizes: '32x32',
      type: 'image/x-icon',
    },
    {
      url: '/favicon-48x48.ico',
      rel: 'icon',
      sizes: '48x48',
      type: 'image/x-icon',
    },
    {
      url: '/favicon-64x64.ico',
      rel: 'icon',
      sizes: '64x64',
      type: 'image/x-icon',
    },
  ],
  keywords: [
    'john tran',
    'johntran',
    'jonh-remote-dev',
    'johnremotedev.com',
    'john tran portfolio',
    'john tran developer',
    'john tran full stack developer',
    'john tran software engineer',
    'john tran web developer',
    'Dattran0318 github',
    'Dattran0319 github',
  ],
};

const GoogleAnalytics = dynamic(
  () => import('@/components/common/GoogleAnalytics'),
  { ssr: false }
);
const WebVitals = dynamic(() => import('@/components/common/WebVitals'), {
  ssr: false,
});
const FloatingNavbar = dynamic(
  () => import('@/components/navbar/FloatingNavbar')
);
const ScrollToTop = dynamic(() => import('@/components/common/ScrollToTop'));

const isDebug = process.env.NODE_ENV === 'development';

const RootLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <html lang="en" className={poppins.className}>
      {isDebug ? null : <GoogleAnalytics />}

      <body className={isDebug ? 'debug-screens' : ''}>
        {isDebug ? <WebVitals /> : null}
        <FloatingNavbar className="app_nav" navItems={navMenus} />
        <main>{children}</main>
        <ScrollToTop />
      </body>
    </html>
  );
};

export default RootLayout;
