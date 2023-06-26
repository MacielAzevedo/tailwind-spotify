import Link from 'next/link';
import { ReactNode } from 'react';

interface MenuTopProps {
  icon?: ReactNode;
  text: string;
  path: string;
  variant: 'top' | 'bottom';
}

export default function Menu({ icon, text, path, variant }: MenuTopProps) {
  return (
    <Link
      href={path}
      className={`${
        variant === 'top'
          ? 'flex items-center gap-3 text-sm font-semibold text-zinc-200 hover:text-zinc-400 max-sm:justify-center'
          : 'text-sm text-zinc-400 hover:text-zinc-100 max-sm:text-center'
      }`}
    >
      {icon}
      {text}
    </Link>
  );
}
