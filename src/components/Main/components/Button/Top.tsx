import { ChevronLeft, ChevronRight } from 'lucide-react';

type variants = 'left' | 'right';

interface ButtonProps {
  variant: variants;
}

export default function Top({ variant }: ButtonProps) {
  return (
    <button className="flex rounded-full bg-black/40 p-1 hover:bg-zinc-600">
      {variant === 'left' ? <ChevronLeft /> : <ChevronRight />}
    </button>
  );
}
