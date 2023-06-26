import { Mic2, LayoutList, Laptop2, Volume, Maximize2 } from 'lucide-react';

export default function OtherControls() {
  return (
    <div className="flex items-center gap-4">
      <Mic2 size={20} />
      <LayoutList size={20} />
      <Laptop2 size={20} />
      <div className="flex items-center gap-2">
        <div className="h-1 rounded-full w-24 bg-zinc-600">
          <div className="bg-zinc-200 w-10 h-1 rounded-full"></div>
        </div>
        <Volume size={20} />
      </div>
      <Maximize2 size={20} />
    </div>
  );
}
