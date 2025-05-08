import React from 'react';
import Divider from '../divider';

interface TeacherNameInputProps extends React.ComponentProps<'input'> {
  value:    string;
  setValue: (value: string) => void;
}

export default function TeacherNameInput(props: TeacherNameInputProps) {
  const {
    value,
    setValue,
    ...rest
  } = props;

  const handleTeacherNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 4 || e.target.value.includes(' ')) return;

    setValue(e.target.value);
  };

  const lineLength = value.length === 4 ? 280 : 246;

  return (
    <div>
      <Divider
        double
        length={lineLength}
      />

      <div className='flex flex-row text-[18px] gap-[12px] relative items-center'>
        <p className='font-(family-name:--font-dongguk-university) ml-[8px]'>To.</p>

        <div className='flex flex-row h-[32px] items-center z-10'>
          <input
            spellCheck='false'
            autoComplete='off'
            className='outline-none font-(family-name:--font-dongguk-university) tracking-[16px] decoration-none h-full placeholder-[#ccc]'
            value={value}
            style={{ width: value.length === 4 ? '136px' : '100px' }}
            placeholder='홍길동'
            onChange={handleTeacherNameChange}
            {...rest}
          />

          <p className='font-(family-name:--font-dongguk-university) tracking-[15px]'>선생님</p>
        </div>

        <div className='absolute flex flex-row left-[42px] gap-[32px]'>
          {
            Array.from({ length: value.length === 4 ? 8 : 7 }).map((_, i) => (
              <Divider
                key={i}
                length={32}
                direction='vertical'
              />
            ))
          }
        </div>
      </div>

      <Divider
        double
        length={lineLength}
      />
    </div>
  );
}
