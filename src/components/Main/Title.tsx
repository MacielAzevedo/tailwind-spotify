interface TitleProps {
  text: string;
}

export default function Title({ text }: TitleProps) {
  return (
    <h1 className="font-semibold text-3xl mt-10 max-sm:text-center">{text}</h1>
  );
}
