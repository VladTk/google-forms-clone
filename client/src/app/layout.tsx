import type { Metadata } from 'next';
import '../styles/globals.scss';
import { Open_Sans } from 'next/font/google';
import { Header } from '@/shared/layout';
import { ReduxProvider } from './providers/ReduxProvider';

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-open-sans',
});

export const metadata: Metadata = {
  title: 'Google Forms Clone',
  description:
    'A simplified Google Forms clone built with Next.js, React, TypeScript, ' +
    'Redux Toolkit, and GraphQL — a test project demonstrating form creation, ' +
    'filling, and response management.',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={openSans.variable}>
      <body>
        <ReduxProvider>
          <Header />
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}
