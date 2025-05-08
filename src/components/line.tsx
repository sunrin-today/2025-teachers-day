interface LineProps {
  length?:    number;
  direction?: 'vertical' | 'horizontal';
  double?:    boolean;
  full?: boolean;
}

export default function Line(props: LineProps) {
  const {
    length = 246,
    direction = 'horizontal',
    double = false,
    full = false
  } = props;

  const line = (
    <div
      className='bg-[#C46C6B]'
      style={{
        width:  direction === 'horizontal' ? full ? '100%' : length : 1,
        height: direction === 'horizontal' ? 1 : full ? '100%' : length,
      }}
    />
  );

  if (!double) {
    return line;
  } else {
    return (
      <div
        className='flex gap-[4px]'
        style={{ flexDirection: direction === 'horizontal' ? 'column' : 'row' }}
      >
        {line}
        {line}
      </div>
    );
  }
}
