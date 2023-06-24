import { ReactNode } from 'react';

interface MenuProps {
  children: ReactNode;
  variant: 'top' | 'bottom';
}

export default function Menu({ children, variant }: MenuProps) {
  return (
    <nav
      className={`${
        variant === 'top'
          ? 'space-y-5 mt-10'
          : 'mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-3'
      } `}
    >
      {children}
    </nav>
  );
}
