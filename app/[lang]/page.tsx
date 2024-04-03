import { Locale } from '@/i18n.config';

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const underConstruction = {
    hr: 'U izgradnji',
    en: 'Under construction',
  };

  return (
    <div className="text-center text-2xl text-gray-500 mt-24 flex-1">
      {underConstruction[lang]}
    </div>
  );
}
