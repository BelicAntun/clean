import { Locale } from '@/i18n.config';
import { getDictionary } from '@/lib/dictionary';
import Image from 'next/image';
import Carpet from './carpet.svg';

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { page } = await getDictionary(lang);
  return (
    <section className="text-gray-600">
      <div className="max-w-7xl mx-auto flex py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 md:ml-24 pt-6 flex flex-col md:items-start md:text-left mb-12 md:mb-40 items-center text-center w-full h-full min-w-[300px]">
          <h1 className="mb-5 sm:text-6xl text-5xl items-center xl:w-2/2 text-gray-800">
            {page.home.title}
            <span className="text-blue-500">{page.home.highLight1}</span>
            {page.home.title2}
            <span className="text-blue-500">{page.home.highLight2}</span>
            {page.home.dot}
          </h1>

          <p className="mb-4 xl:w-3/4 text-gray-500 text-lg">
            {page.home.subtitle}
          </p>

          <div className="flex justify-center">
            <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
              {page.home.button}
            </button>
          </div>
        </div>
        <Image
          alt="man cleaning carpet"
          src={Carpet}
          width={500}
          height={500}
          className="h-auto"
          priority
        />
      </div>
    </section>
  );
}
