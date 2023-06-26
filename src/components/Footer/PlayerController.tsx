import { Shuffle, SkipBack, Play, SkipForward, Repeat } from 'lucide-react';

export default function PlayerController() {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="flex items-center gap-6">
        <Shuffle size={20} className="text-zinc-200" />
        <SkipBack size={20} className="text-zinc-200 fill-white" />

        <button className="w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-white text-black">
          <Play className="fill-black" />
        </button>

        <SkipForward size={20} className="text-zinc-200 fill-white" />
        <Repeat size={20} className="text-zinc-200" />
      </div>
      <div className="flex items-center gap-2">
        <span className="text-xs text-zinc-400">0:31</span>
        <div className="h-1 rounded-full w-96 bg-zinc-600 max-sm:w-60 md:w-60 lg:w-96">
          <div className="bg-zinc-200 w-40 h-1 rounded-full"></div>
        </div>
        <span className="text-xs text-zinc-400">2:14</span>
      </div>
    </div>
  );
}
