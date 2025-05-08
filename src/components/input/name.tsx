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
    <div className='text-[#C46C6B] w-fit'>
      <div className='flex flex-row w-fit h-[22px]'>
        <div className='flex flex-row gap-[4px] w-fit ml-[4px]'>
          <p className='font-(family-name:--font-leeseoyun)'>from.</p>

          <input
            className='h-full outline-none font-(family-name:--font-leeseoyun)'
            size={Math.max(value.length * 1.3, 10)}
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
