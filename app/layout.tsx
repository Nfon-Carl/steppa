import type { Metadata } from 'next';
import { Bebas_Neue, Outfit } from 'next/font/google';
import './globals.css';

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Get Fit with Steppa | Personal Trainer & Workout Coach',
  description:
    'Transform your body and mindset with Steppa — elite personal training, online coaching, and real results. Start your journey today.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${bebasNeue.variable} ${outfit.variable}`}>
      <body>{children}</body>
    </html>
  );
}
