import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { notFound } from 'next/navigation';
import { getDictionary, hasLocale } from '../dictionaries';
const HeroComponent = dynamic(() => import('./components/hero'));

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

  return (
    <div>
      <HeroComponent params={params} />
      <h1>{dict.home.title}</h1>
      <p>{dict.home.description}</p>
    </div>
  );
}

export const metadata: Metadata = {
  title: 'Home',
  description:
    'Welcome to Aungsha, your best real-state investment platform. Discover, invest, and manage properties with ease.',
};
