'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function MobileHeader({ navigation, lang }: Props) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="md:hidden">
      <button
        onClick={toggleMenu}
        className="text-xl text-white hover:text-gray-200 focus:outline-none"
      >
        ☰
      </button>
      {menuOpen && (
        <div className="fixed top-0 left-0 h-screen w-64 bg-blue-500 text-white transform translate-x-0 transition-transform ease-in-out duration-300">
          <ul className="p-4">
            <li>
              <Link href={`/${lang}`} className="text-white hover:underline">
                {navigation.home}
              </Link>
            </li>
            <li>
              <Link
                href={`/${lang}/about`}
                className="text-white hover:underline"
              >
                {navigation.about}
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

interface Props {
  navigation: {
    home: string;
    about: string;
  };
  lang: string;
}
