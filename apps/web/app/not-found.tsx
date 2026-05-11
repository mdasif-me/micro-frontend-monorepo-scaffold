import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import icon from '../public/icons/chevron-right.svg';
import alien from '../public/images/global/alien.png';
import network from '../public/images/global/network.png';
import img from '../public/images/global/page-not-found.png';
import { Icon } from './shared';
import styles from './styles/global.module.css';

export const metadata: Metadata = {
  title: 'Page not found',
  description: `it looks like the page you're looking for doesn't exist or might have been moved. don't worry, let's get you back on track!`,
};

export default function GlobalNotFound() {
  return (
    <html lang='en'>
      <body className={styles.background}>
        <div className={styles.container}>
          <Image
            src={alien}
            alt='alien'
            width={345}
            height={293}
            draggable={false}
            className={styles.top_img}
            aria-label='alien'
          />
          <Image
            src={img}
            alt='Page Not Found'
            width={607}
            height={372}
            draggable={false}
            className={styles.image}
          />
          <Image
            src={network}
            alt='Network'
            width={345}
            height={293}
            draggable={false}
            className={styles.bottom_img}
            aria-label='network'
          />
          <h2 className={styles.title}>Page Not Found</h2>
          <p
            className={styles.message}
          >{`it looks like the page you're looking for doesn't exist or might have been moved. don't worry, let's get you back on track!`}</p>
          <Link href='/' className={styles.button}>
            Go Home
            <Icon src={icon} alt='chevron-right-icon' />
          </Link>
        </div>
      </body>
    </html>
  );
}
