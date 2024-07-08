import '@/styles/globals.css';
import { Inter as InterFont } from 'next/font/google';
import { siteMetadata } from '@/config/seo';
import { Suspense } from 'react';
import { Providers } from "./providers";
import NavigationEvents from './navigation-events';
import Loading from './loading';
import type { Viewport } from 'next';
import type { Metadata } from 'next';

// https://nextjs.org/docs/app/building-your-application/optimizing/third-party-libraries
import { GoogleAnalytics } from '@next/third-parties/google'

export const metadata: Metadata = { ...siteMetadata };
export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    themeColor: '#DAD9FF',
};

const interFont = InterFont({
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
      <html lang="ko" className={`${interFont.className} ${'dark'}`}>
          {process.env.NEXT_PUBLIC_GA_TRACKING_ID && (
              <GoogleAnalytics 
              gaId={process.env.NEXT_PUBLIC_GA_TRACKING_ID}
              />
          )}
          <body className="container mx-auto cursor-default">
              <Providers>
                  <header></header>
                  <main>{children}</main>
                  <Suspense fallback={<Loading />}>
                      <NavigationEvents />
                  </Suspense>
              </Providers>
          </body>
      </html>
  );
}
