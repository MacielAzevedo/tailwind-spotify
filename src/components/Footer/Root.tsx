import { ReactNode } from 'react';

interface RootProps {
  children: ReactNode;
}

export default function Root({ children }: RootProps) {
  return (
    <footer className="bg-zinc-800 border-t border-zinc-700 px-6 py-4 flex items-center justify-between max-sm:flex-col max-sm:gap-4">
      {children}
    </footer>
  );
}
