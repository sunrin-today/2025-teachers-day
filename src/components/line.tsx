interface LineProps {
  length?:    number;
  direction?: 'vertical' | 'horizontal';
  double?:    boolean;
}

export default function Line(props: LineProps) {
  const {
    length = 246,
    direction = 'horizontal',
    double = false,
  } = props;

  const line = (
    <div
      className='bg-[#C46C6B]'
      style={{
        width:  direction === 'horizontal' ? length : 1,
        height: direction === 'horizontal' ? 1 : length,
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
