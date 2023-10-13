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
  title: 'Fresh Pranje Tepiha - Professional Carpet Cleaning Services',
  description:
    'Welcome to Pranje Tepiha Fresh - Your trusted partner for professional carpet cleaning services. We specialize in revitalizing your carpets, leaving them fresh and clean. Contact us today for top-quality carpet cleaning solutions.',
  keywords:
    'carpet cleaning, professional carpet cleaning, carpet cleaning services, Pranje Tepiha Fresh, pranje tepiha, profesionalno pranje tepiha, usluge čišćenja tepiha, čišćenje tepiha, strojno pranje tepiha',
  authors: [
    {
      name: 'Pranje Tepiha Fresh',
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
      <body className={inter.className}>
        <Header lang={params.lang} />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
