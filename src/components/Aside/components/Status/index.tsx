type StatusType = 'red' | 'yellow' | 'green';

interface StatusProps {
  variant: StatusType;
}

export default function Status({ variant }: StatusProps) {
  return (
    <div
      className={`w-3 h-3 rounded-full ${
        variant === 'red'
          ? 'bg-red-500'
          : variant === 'yellow'
          ? 'bg-yellow-500'
          : 'bg-green-500'
      }`}
    ></div>
  );
}
