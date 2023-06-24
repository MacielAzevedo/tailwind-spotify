import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';

interface CategoryProps {
  path: string;
  img: StaticImageData;
  alt: string;
  artists: string;
}

export default function Category({ alt, artists, img, path }: CategoryProps) {
  return (
    <Link
      href={path}
      className=" bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10"
    >
      <Image className="w-full" src={img} width={120} height={120} alt={alt} />
      <strong className="font-semibold">Daily Mix 1</strong>
      <span className="text-sm text-zinc-400">{artists}</span>
    </Link>
  );
}
