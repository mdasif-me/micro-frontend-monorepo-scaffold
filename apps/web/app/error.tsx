'use client';
import Image from 'next/image';
import icon from '../public/icons/chevron-right.svg';
import img from '../public/images/global/internal-server-error.png';
import { Icon } from './shared';
import styles from './styles/error.module.css';

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
            src={img}
            alt='Internal Server Error'
            width={607}
            height={372}
            draggable={false}
            className={styles.image}
          />
          <h2 className={styles.title}>Internal Server Error</h2>
          <p
            className={styles.message}
          >{`it looks like the page you're looking for doesn't exist or might have been moved. don't worry, let's get you back on track!`}</p>
          <button onClick={() => unstable_retry()}>
            Try again <Icon src={icon} alt='chevron-right-icon' />
          </button>
        </div>
      </body>
    </html>
  );
}
