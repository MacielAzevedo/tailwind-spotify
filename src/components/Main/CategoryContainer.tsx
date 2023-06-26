import { ReactNode } from 'react';

interface CategoryContainerProps {
  children: ReactNode;
}

export default function CategoryContainer({
  children,
}: CategoryContainerProps) {
  return (
    <div className="grid gap-4 mt-4 max-sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-8">
      {children}
    </div>
  );
}
