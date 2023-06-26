import Image, { StaticImageData } from 'next/image';

interface AlbumMusicProps {
  path: StaticImageData;
  alt: string;
  title: string;
  artist: string;
}

export default function AlbumMusic({
  alt,
  artist,
  path,
  title,
}: AlbumMusicProps) {
  return (
    <div className="flex items-center gap-3">
      <Image src={path} width={56} height={56} alt={alt} />
      <div className="flex flex-col">
        <strong className="font-normal">{title}</strong>
        <span className="text-xs text-zinc-400">{artist}</span>
      </div>
    </div>
  );
}
