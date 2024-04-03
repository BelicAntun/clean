'use client';
import { useState } from 'react';
import Link from 'next/link';
import { LocaleSwitcher } from './locale-switcher';

export default function MobileHeader({ navigation, lang }: Props) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="md:hidden">
      {!menuOpen && (
        <button
          onClick={toggleMenu}
          className="text-xl text-gray-900 hover:text-gray-500 focus:outline-none"
        >
          ☰
        </button>
      )}
      {menuOpen && (
        <div className="fixed top-0 left-0 h-screen w-full xs:w-2/3 bg-blue-500  transform translate-x-0 transition-transform ease-in-out duration-300 py-5">
          <div className="flex flex-col items-center justify-between h-full p-4">
            <LocaleSwitcher />
          </div>

          <button
            onClick={toggleMenu}
            className=" fixed top-2 right-2 text-white hover:text-blue-200 focus:outline-none rounded-full p-2 border h-10 w-10"
          >
            X
          </button>
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
