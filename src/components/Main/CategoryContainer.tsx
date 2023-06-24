import { ReactNode } from 'react';

interface CategoryContainerProps {
  children: ReactNode;
}

export default function CategoryContainer({
  children,
}: CategoryContainerProps) {
  return <div className="grid grid-cols-8 gap-4 mt-4">{children}</div>;
}
