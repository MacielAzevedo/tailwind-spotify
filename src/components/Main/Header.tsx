import { ReactNode } from 'react';

interface HeaderProps {
  children: ReactNode;
}

export default function Header({ children }: HeaderProps) {
  return (
    <div className="flex items-center gap-4 max-sm:justify-center">
      {children}
    </div>
  );
}
