import Image from 'next/image';
import { notFound } from 'next/navigation';
import frame from '../../../../public/images/home/aungsha-app-frame.png';
import { Navbar } from '../../../shared';
import { getDictionary, hasLocale } from '../../dictionaries';
import styles from '../styles/hero.module.css';

type Props = {
  params: Promise<{
    lang: string;
  }>;
};

export default async function Hero({ params }: Props) {
  const { lang } = await params;

  if (!hasLocale(lang)) {
    notFound();
  }

  const dict = await getDictionary(lang);

  return (
    <div className={styles.background}>
      <Navbar />
      <div className='flex items-end justify-center h-screen'>
        <Image
          src={frame}
          alt='Aungsha mobile app interface preview'
          width={794}
          height={435}
          priority
          className='md:max-w-4xl max-w-sm mx-auto'
        />
      </div>
    </div>
  );
}
