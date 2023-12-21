import { SlideMenu } from '@/components/SlideMenu';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ReactNode } from 'react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'KW',
  description: 'This is KW.',
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} flex h-full w-full flex-row items-center bg-primary-900 text-primary-100`}
      >
        <SlideMenu />
        {children}
      </body>
    </html>
  );
}
