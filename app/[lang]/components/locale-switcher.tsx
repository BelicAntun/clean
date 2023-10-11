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
              className={`rounded-md border px-3 py-2 text-white transition duration-300 ease-in-out ${
                pathName === redirectedPathName(locale)
                  ? 'bg-blue-800'
                  : 'bg-blue-500 hover:bg-blue-700'
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
