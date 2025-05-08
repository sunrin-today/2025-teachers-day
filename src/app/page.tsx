'use client';

import TeacherNameInput from '@/components/input/teacher-name';
import { useState } from 'react';

export default function Home() {
  const [teacherName, setTeacherName] = useState('');

  return (
    <div className='w-[380px] max-w-[380px] h-full max-h-[500px] bg-[#FFF4EE] relative overflow-hidden'>
      <main className='py-[25px] px-[22px]'>
        <section>
          <TeacherNameInput value={teacherName} setValue={setTeacherName} />
        </section>
      </main>

      <img
        src='/images/carnation1.png'
        alt='Carnation 1'
        width={180}
        height={180}
        className='absolute bottom-[-10px] left-[-48px] -rotate-12'
      />

      <img
        src='/images/carnation2.png'
        alt='Carnation 2'
        width={200}
        height={200}
        className='absolute bottom-[-30px] right-[-52px] rotate-12'
      />
    </div>
  );
}
