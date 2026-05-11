import { Anek_Bangla } from 'next/font/google';
import localFont from 'next/font/local';

export const satoshi = localFont({
  src: [
    {
      path: './satoshi/fonts/satoshi-regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './satoshi/fonts/satoshi-medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './satoshi/fonts/satoshi-bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: './satoshi/fonts/satoshi-black.woff2',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-satoshi',
});

export const bangla = Anek_Bangla({
  subsets: ['bengali'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-bangla',
});
