'use client';
import Image from 'next/image';
import icon from '../public/icons/chevron-right.svg';
import img from '../public/images/global/internal-server-error.png';
import network from '../public/images/global/network.png';
import server from '../public/images/global/server.png';
import { Icon } from './shared';
import styles from './styles/global.module.css';

export default function GlobalError({
  error,
  unstable_retry,
}: {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}) {
  console.error('global-error:', error);
  return (
    <html>
      <body className={styles.background}>
        <div className={styles.container}>
          <Image
            src={server}
            alt='server'
            width={345}
            height={293}
            draggable={false}
            className={styles.top_img}
            aria-label='server'
          />
          <Image
            src={img}
            alt='Internal Server Error'
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
          <h2 className={styles.title}>Internal Server Error</h2>
          <p className={styles.message}>
            {`it looks like something went wrong on our end. don't worry, let's get you back on track!`}
          </p>
          <button className={styles.button} onClick={() => unstable_retry()}>
            Try again <Icon src={icon} alt='chevron-right-icon' />
          </button>
        </div>
      </body>
    </html>
  );
}
