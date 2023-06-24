import { ReactNode } from 'react';

interface RootProps {
  children: ReactNode;
}

export default function Root({ children }: RootProps) {
  return <main className="flex-1 p-6">{children}</main>;
}
