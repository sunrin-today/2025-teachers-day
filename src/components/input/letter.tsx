interface LetterInputProps extends React.ComponentProps<'textarea'> {
  value:    string;
  setValue: (value: string) => void;
}

export default function LetterInput(props: LetterInputProps) {
  const { value, setValue } = props;

  const handleLetterInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (e.target.scrollHeight !== e.target.clientHeight) return;

    setValue(e.target.value);
  };

  return (
    <div className='w-full h-full relative'>
      <textarea
        className='w-full h-full outline-none font-(family-name:--font-leeseoyun) resize-none z-30 text-[14px] overflow-hidden leading-[22px] placeholder-[#ccc]'
        value={value}
        placeholder='안녕하세요 선생님? 저는...'
        onChange={handleLetterInputChange}
        onDrop={e => {
          e.preventDefault();

          e.stopPropagation();
        }}
        onDragOver={e => {
          e.preventDefault();

          e.stopPropagation();
        }}
        onPaste={e => {
          const items = e.clipboardData?.items;

          if (items) {
            for (const item of items) {
              if (item.kind === 'file') {
                e.preventDefault();
              }
            }
          }
        }}
      />

      <div className='absolute w-full h-full top-[24px] flex flex-col gap-[21px] z-0 pointer-events-none'>
        {Array.from({ length: 12 }).map((_, i) => <LetterLine key={i} />)}
      </div>
    </div>
  );
}

function LetterLine() {
  return (
    <div className='w-full h-[1px] bg-[#AEADAD]' />
  );
}
