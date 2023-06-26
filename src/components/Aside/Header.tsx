import Status from './components/Status';

export default function Header() {
  return (
    <header className="flex items-center gap-2 max-sm:justify-center">
      <Status variant="red" />
      <Status variant="yellow" />
      <Status variant="green" />
    </header>
  );
}
