import { ReactNode } from 'react';

interface RootProps {
  children: ReactNode;
}

export default function Root({ children }: RootProps) {
  return (
    <aside className="w-72 bg-zinc-950 p-6 max-sm:w-full">{children}</aside>
  );
}
