import './layout.css';
import { Locale, i18n } from '@/i18n.config';
import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import Header from './components/header';
import Footer from './components/footer';

const inter = Roboto({
  subsets: ['latin'],
  weight: ['300', '500', '700'],
});

export const metadata: Metadata = {
  title: 'Antun Belić',
  description: 'Under construction',
  keywords: 'frontend next react typescript tailwindcss',
  authors: [
    {
      name: 'Antun Belić',
    },
  ],
};

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({
    lang: locale,
  }));
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  return (
    <html lang={params.lang}>
      <body className={`${inter.className} h-screen flex flex-col`}>
        <Header lang={params.lang} />
        <main className="flex flex-col flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
