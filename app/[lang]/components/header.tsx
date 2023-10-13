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
        <Link
          href={`/${lang}`}
          className="text-4xl tracking-tighter text-gray-700 hover:text-grey-900 md:text-4x1 lg:text-3xl"
        >
          Fresh
        </Link>
        <div className="md:flex items-center gap-x-6 hidden">
          <ul className="flex gap-x-6">
            <li>
              <Link
                href={`/${lang}`}
                className="font-medium text-gray-700 hover:text-grey-900 px-5 py-3 flex items-center transition duration-150 ease-in-out"
              >
                {navigation.home}
              </Link>
            </li>
            <li>
              <Link
                href={`/${lang}/about`}
                className="font-medium text-gray-700 hover:text-grey-900 px-5 py-3 flex items-center transition duration-150 ease-in-out"
              >
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
