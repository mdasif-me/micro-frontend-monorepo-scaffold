import { notFound } from 'next/navigation';
import { getDictionary, hasLocale } from './dictionaries';

type Props = {
  params: Promise<{
    lang: string;
  }>;
};

export default async function Page({ params }: Props) {
  const { lang } = await params;

  if (!hasLocale(lang)) {
    notFound();
  }

  const dict = await getDictionary(lang);

  return <button>{dict.home.title}</button>;
}
