import type { Metadata } from 'next';
import '../styles/globals.css';

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
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
