'use client';

import { useEffect, useState } from 'react';
import LetterInput from '@/components/input/letter';
import NameInput from '@/components/input/name';
import TeacherNameInput from '@/components/input/teacher-name';

export default function Home() {
  const [teacherName, setTeacherName] = useState('');
  const [name, setName] = useState('');
  const [content, setContent] = useState('');
  const [showImages, setShowImages] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setShowImages(window.innerHeight > 350);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='w-[380px] max-w-[380px] h-full max-h-[500px] bg-[#FFF4EE] relative overflow-hidden'>
      <main className='py-[25px] px-[22px] flex flex-col gap-[27px] h-full z-10'>
        <section>
          <TeacherNameInput
            value={teacherName}
            setValue={setTeacherName}
          />

          <NameInput
            value={name}
            setValue={setName}
          />
        </section>

        <section className='w-full h-[273px] max-h-[273px]'>
          <LetterInput
            value={content}
            setValue={setContent}
          />
        </section>
      </main>

      {
        showImages && (
          <>
            <img
              src='/images/carnation1.png'
              alt='Carnation 1'
              width={180}
              height={180}
              className='absolute bottom-[-40px] left-[-36px] -rotate-12 z-0'
              draggable={false}
            />

            <img
              src='/images/carnation2.png'
              alt='Carnation 2'
              width={200}
              height={200}
              className='absolute bottom-[-60px] right-[-52px] rotate-12 z-0'
              draggable={false}
            />
          </>
        )
      }
    </div>
  );
}
