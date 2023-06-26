import { ReactNode } from 'react';

interface HeaderProps {
  children: ReactNode;
}

export default function Header({ children }: HeaderProps) {
  return (
    <div className="grid grid-cols-3 gap-4 mt-4 max-sm:grid-cols-2">
      {children}
    </div>
  );
}
