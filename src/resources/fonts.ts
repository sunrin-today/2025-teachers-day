import localFont from 'next/font/local';

export const donggukUniversity = localFont({
  src: [
    {
      path:   '../../public/fonts/DonggukUniversity.ttf',
      weight: '400',
      style:  'normal',
    },
  ],
  variable: '--font-dongguk-university',
  display:  'swap',
});

export const leeSeoyun = localFont({
  src: [
    {
      path:   '../../public/fonts/LeeSeoyun.ttf',
      weight: '400',
      style:  'normal',
    },
  ],
  variable: '--font-leeseoyun',
  display:  'swap',
});
