import React from 'react';
import Divider from '../divider';

interface NameInputProps extends React.ComponentProps<'input'> {
  value:    string;
  setValue: (value: string) => void;
}

export default function NameInput(props: NameInputProps) {
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
    <div className='text-[#C46C6B] w-fit text-[12px] font-(family-name:--font-leeseoyun)'>
      <div className='flex flex-row w-fit h-[22px] items-center'>
        <div className='flex flex-row gap-[4px] w-fit ml-[4px] items-center'>
          <p>from.</p>

          <input
            className='h-full outline-none placeholder-[#e2b8b8]'
            style={{ width: value.length > 9 ? value.length * 8 : '80px' }}
            value={value}
            placeholder='20432 홍길동'
            onChange={handleNameChange}
            {...rest}
          />
        </div>

        <Divider
          full
          direction='vertical'
        />
      </div>

      <Divider full />
    </div>
  );
}
