import Link from 'next/link';
import { Locale } from '@/i18n.config';
import { getDictionary } from '@/lib/dictionary';
import { LocaleSwitcher } from './locale-switcher';
import MobileHeader from './mobileHeader';

export default async function Header({ lang }: { lang: Locale }) {
  const { navigation } = await getDictionary(lang);

  return (
    <header className="fixed top-0 w-full z-30 clearNav md:bg-opacity-90 transition duration-300 ease-in-out p-4">
      <nav className="max-w-screen-xl mx-auto flex items-center justify-between">
        <div className="md:flex items-center gap-x-6 hidden">
          <LocaleSwitcher />
        </div>
        <MobileHeader navigation={navigation} lang={lang} />
      </nav>
    </header>
  );
}
