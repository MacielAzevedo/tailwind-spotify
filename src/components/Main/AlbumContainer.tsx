import { ReactNode } from 'react';

interface HeaderProps {
  children: ReactNode;
}

export default function Header({ children }: HeaderProps) {
  return (
    <div className="grid gap-4 mt-4 max-sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
      {children}
    </div>
  );
}
