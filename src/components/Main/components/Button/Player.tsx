import { Play } from 'lucide-react';

type variants = 'album' | 'control';

interface PlayerProps {
  variant: variants;
}

export default function Player({ variant }: PlayerProps) {
  return (
    <button
      className={`flex items-center justify-center rounded-full text-black ${
        variant === 'album'
          ? 'w-12 h-12 pl-1 bg-green-400 ml-auto mr-8 invisible group-hover:visible max-sm:mr-2 max-sm:w-16'
          : 'w-10 h-10 pl-1 bg-white'
      } `}
    >
      <Play className="fill-black" />
    </button>
  );
}
