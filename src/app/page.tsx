/* eslint-disable no-alert */
'use client';

import { useEffect, useState, useTransition } from 'react';
import LetterInput from '@/components/input/letter';
import NameInput from '@/components/input/name';
import TeacherNameInput from '@/components/input/teacher-name';
import { save } from './action';

const STORAGE_KEY = 'letterDraft';

export default function Home() {
  const [teacherName, setTeacherName] = useState('');
  const [name, setName] = useState('');
  const [content, setContent] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showImages, setShowImages] = useState(true);
  const [pending, startTransition] = useTransition();

  const handleSubmit = async () => {
    if (teacherName.trim().length === 0) {
      alert('선생님 성함을 입력해주세요.');

      return;
    }

    if (name.trim().length === 0) {
      alert('이름을 입력해주세요.');

      return;
    }

    if (content.trim().length === 0) {
      alert('내용을 입력해주세요.');

      return;
    }

    const isConfirmed = confirm('전송하시겠습니까?');

    if (isConfirmed) {
      startTransition(async () => {
        const result = await save({
          name, teacherName, content,
        });

        if (result.success) {
          alert('전송되었습니다.');

          localStorage.setItem('submitted', 'true');

          setIsSubmitted(true);
        } else {
          alert('전송에 실패했습니다.');
        }
      });
    }
  };

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    const submitted = Boolean(localStorage.getItem('submitted'));

    if (submitted) {
      setIsSubmitted(true);
    }

    if (saved) {
      const data = JSON.parse(saved);

      setName(data.name || '');

      setTeacherName(data.teacherName || '');

      setContent(data.content || '');
    }
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const data = {
        name,
        teacherName,
        content,
      };

      if (!isSubmitted) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
      }
    }, 500);

    return () => clearTimeout(timeout);
  }, [
    name, teacherName, content,
  ]);

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
    <div className='w-[380px] max-w-[380px] h-full max-h-[500px] bg-[#FFF4EE] relative overflow-hidden rounded-md'>
      <main className='py-[25px] px-[22px] flex flex-col gap-[27px] h-full z-10'>
        <section className='relative'>

          <TeacherNameInput
            value={teacherName}
            setValue={setTeacherName}
          />

          <NameInput
            value={name}
            setValue={setName}
          />

          <button
            className='py-[4px] bg-[#C46C6B] text-white px-[8px] font-(family-name:--font-dongguk-university) not-disabled:hover:brightness-90 rounded-sm not-disabled:active:scale-95 transition-transform text-[12px] outline-none absolute top-[60px] right-[4px] disabled:brightness-90 cursor-pointer disabled:cursor-not-allowed'
            disabled={isSubmitted || pending}
            onClick={handleSubmit}
          >{isSubmitted ? '제출됨' : pending ? '전송 중' : '보내기'}
          </button>
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
