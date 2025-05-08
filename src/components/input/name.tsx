import React from 'react';
import Line from '../line';

interface TeacherNameInputProps extends React.ComponentProps<'input'> {
  value:    string;
  setValue: (value: string) => void;
}

export default function NameInput(props: TeacherNameInputProps) {
  const {
    value,
    setValue,
    ...rest
  } = props;

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 14) return;

    setValue(e.target.value);
  };

  return (
    <div className='text-[#C46C6B] w-fit text-[12px]'>
      <div className='flex flex-row w-fit h-[22px] items-center'>
        <div className='flex flex-row gap-[4px] w-fit ml-[4px] items-center'>
          <p className='font-(family-name:--font-leeseoyun)'>from.</p>

          <input
            className='h-full outline-none font-(family-name:--font-leeseoyun)'
            style={{ width: value.length > 9 ? value.length * 8 : '80px' }}
            value={value}
            onChange={handleNameChange}
            {...rest}
          />
        </div>

        <Line
          full
          direction='vertical'
        />
      </div>

      <Line full />
    </div>
  );
}
