import Link from 'next/link';

export default function Footer() {
  return (
    <div className="relative">
      <div className="container p-8 mx-auto xl:px-0">
        <div className="my-10 text-sm text-center text-gray-600 dark:text-gray-400">
          Copyright © Antun Belić {new Date().getFullYear()} | Powered by{' '}
          <a
            href="https://www.linkedin.com/in/antun-belic/"
            target="_blank"
            rel="noopener "
          >
            Antun Belic
          </a>
        </div>
      </div>
    </div>
  );
}
