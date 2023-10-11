import Link from 'next/link';
import { Locale } from '@/i18n.config';
import { getDictionary } from '@/lib/dictionary';
import { LocaleSwitcher } from './locale-switcher';
import MobileHeader from './mobileHeader';

export default async function Header({ lang }: { lang: Locale }) {
  const { navigation } = await getDictionary(lang);

  return (
    <header className="bg-blue-500 text-white p-4">
      <nav className="max-w-screen-xl mx-auto flex items-center justify-between">
        <Link href={`/${lang}`}>Fresh</Link>
        <div className="flex items-center gap-x-6">
          <ul className="flex gap-x-6">
            <li>
              <Link href={`/${lang}`} className="hover:underline">
                {navigation.home}
              </Link>
            </li>
            <li>
              <Link href={`/${lang}/about`} className="hover:underline">
                {navigation.about}
              </Link>
            </li>
          </ul>
          <LocaleSwitcher />
        </div>
        <MobileHeader navigation={navigation} lang={lang} />
      </nav>
    </header>
  );
}
