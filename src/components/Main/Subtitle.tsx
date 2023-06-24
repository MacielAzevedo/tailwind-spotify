interface SubtitleProps {
  text: string;
}

export default function Subtitle({ text }: SubtitleProps) {
  return <h2 className="font-semibold text-2xl mt-10">{text}</h2>;
}
