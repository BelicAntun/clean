import { Locale } from '@/i18n.config';
import { getDictionary } from '@/lib/dictionary';
import Image from 'next/image';
import Carpet from './carpet.svg';
import ServiceCard from '@/components/ServiceCard';

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { page } = await getDictionary(lang);

  const services = [
    {
      title: 'Kemijsko čišćenje automobila',
      price: 'Cijena: 60,00 €',
      services: [
        'Vanjsko Pranje',
        'Unutranje Čišćenje',
        'Kemijska obrada',
        'Sušenje u komori',
        'Premazivanje guma',
      ],
      image: Carpet,
    },
    {
      title: 'Kemijsko čišćenje madraca',
      price: 'Cijena: 15,00 €',
      services: ['Pranje', 'Kemijska obrada', 'Sušenje u komori'],
      image: Carpet,
    },
    {
      title: 'Pranje tepiha',
      price: 'Cijena: 4,00 € / m2',
      services: ['Pranje', 'Kemijska obrada', 'Sušenje u komori', 'Pakiranje'],
      image: Carpet,
    },
    {
      title: 'Ostale usluge kemijskog čišćenja',
      price: 'Cijena: Varira',
      services: [
        'Fotelje: 10,00 €',
        'Stolice: 5,00 - 8,00 €',
        'Kutne garniture: 50,00 - 70,00 €',
      ],
      image: Carpet,
    },
  ];
  return (
    <div className="text-gray-600 max-w-7xl mx-auto">
      <div className="w-full  flex py-24 md:flex-row flex-col items-center">
        <section className="lg:flex-grow md:w-1/2 md:ml-24 pt-6 flex flex-col md:items-start md:text-left mb-12 md:mb-40 items-center text-center w-full h-full min-w-[300px]">
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
        </section>
        <Image
          alt="man cleaning carpet"
          src={Carpet}
          width={500}
          height={500}
          className="h-auto"
          priority
        />
      </div>
      <div className="relative w-full h-6 bg-white md:h-12 lg:h-16">
        <svg
          className="absolute w-full h-full text-blue-500"
          preserveAspectRatio="none"
          viewBox="0 0 100 100"
          fill="currentcolor"
        >
          <polygon points="0,0 0,100 100,100" />
        </svg>
      </div>

      <section>
        <div className="flex flex-col gap-5 w-full bg-blue-500 py-12 pb-16 sm:px-8 px-2">
          <h2 className="text-5xl text-white mb-6">Usluge</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>
        </div>
      </section>
      <div className="relative w-full h-6 bg-blue-500 md:h-12 lg:h-16">
        <svg
          className="absolute w-full h-full text-white"
          preserveAspectRatio="none"
          viewBox="0 0 100 100"
          fill="currentcolor"
        >
          <polygon points="0,0 0,100 100,100" />
        </svg>
      </div>
    </div>
  );
}
