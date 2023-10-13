'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { i18n } from '@/i18n.config';

export const LocaleSwitcher = () => {
  const pathName = usePathname();

  const redirectedPathName = (locale: string) => {
    if (!pathName) return '/';
    const segments = pathName.split('/');
    segments[1] = locale;
    return segments.join('/');
  };

  return (
    <ul className="flex gap-x-2">
      {i18n.locales.map((locale) => {
        return (
          <li key={locale}>
            <Link
              href={redirectedPathName(locale)}
              className={`rounded-lg border border-white p-2 leading-4 text-white transition duration-300 flex justify-center items-center ease-in-out w-8 h-8 ${
                pathName === redirectedPathName(locale)
                  ? 'bg-blue-500 pointer-events-none'
                  : 'bg-gray-600 hover:bg-gray-700'
              }`}
            >
              {locale}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
