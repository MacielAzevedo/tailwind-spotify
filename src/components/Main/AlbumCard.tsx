import Image, { StaticImageData } from 'next/image';
import { Button } from './components/Button';
import Link from 'next/link';

interface AlbumCardProps {
  img: StaticImageData;
  title: string;
}

export default function AlbumCard({ img, title }: AlbumCardProps) {
  return (
    <Link
      href="#"
      className="bg-white/5 group rounded-md flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors max-sm:flex-col max-sm:h-40 max-sm:pt-3"
    >
      <Image
        src={img}
        width={104}
        height={104}
        alt="Capa do album do VGBeats"
        priority
      />
      <strong className="max-sm:text-xs">{title}</strong>

      <Button.Player variant="album" />
    </Link>
  );
}
