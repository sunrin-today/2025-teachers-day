import './globals.css';

import type { Metadata } from 'next';
import { donggukUniversity, leeSeoyun } from '@/resources/fonts';

export const metadata: Metadata = {
  title:       '2025년 스승의 날',
  description: 'Made by Sunrin Internet Highschool Student Council',
  openGraph:   {
    title: '2025년 스승의 날', description: '2025년 스승의 날 기념 학생회 이벤트', images: '/images/carnation3.png',
  },
};

export default function RootLayout({ children }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${donggukUniversity.variable} ${leeSeoyun.variable} antialiased`}
      >
        <div className='w-full h-screen bg-[#fff] flex items-center justify-center text-black'>
          {children}
        </div>
      </body>
    </html>
  );
}
