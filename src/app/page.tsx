import { Aside } from '@/components/Aside';
import { NavLink } from '@/components/_UI/NavLink';
import {
  Laptop2,
  LayoutList,
  Maximize2,
  Mic2,
  Repeat,
  Shuffle,
  SkipBack,
  SkipForward,
  Volume,
} from 'lucide-react';
import {
  Home as HomeIcon,
  Search,
  Library,
  ChevronLeft,
  ChevronRight,
  Play,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <Aside.Root>
          <Aside.Header />
          <Aside.Menu variant="top">
            <NavLink.Menu
              variant="top"
              path="#"
              icon={<HomeIcon />}
              text="Home"
            />
            <NavLink.Menu
              variant="top"
              path="#"
              icon={<Search />}
              text="Search"
            />
            <NavLink.Menu
              variant="top"
              path="#"
              icon={<Library />}
              text="Your Library"
            />
          </Aside.Menu>

          <Aside.Menu variant="bottom">
            <NavLink.Menu variant="bottom" path="#" text="Hot Hits Brasil" />
            <NavLink.Menu variant="bottom" path="#" text="Hits da Internet" />
            <NavLink.Menu variant="bottom" path="#" text="My Playlist #10" />
            <NavLink.Menu variant="bottom" path="#" text="Top Internacionais" />
          </Aside.Menu>
        </Aside.Root>

        <main className="flex-1 p-6">
          <div className="flex items-center gap-4 ">
            <button className="flex rounded-full bg-black/40 p-1 hover:bg-zinc-600">
              <ChevronLeft />
            </button>
            <button className="flex rounded-full bg-black/40 p-1 hover:bg-zinc-600">
              <ChevronRight />
            </button>
          </div>

          <h1 className="font-semibold text-3xl mt-10">Good Afternoon</h1>

          <div className="grid grid-cols-3 gap-4 mt-4">
            <Link
              href=""
              className="bg-white/5 group rounded-md flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors "
            >
              <Image
                src="/album.jpg"
                width={104}
                height={104}
                alt="Capa do album do VGBeats"
              />
              <strong>Instinto Superior</strong>

              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play className="fill-black" />
              </button>
            </Link>
            <Link
              href=""
              className="bg-white/5 group rounded-md flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors "
            >
              <Image
                src="/album.jpg"
                width={104}
                height={104}
                alt="Capa do album do VGBeats"
              />
              <strong>Instinto Superior</strong>

              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play className="fill-black" />
              </button>
            </Link>
            <Link
              href=""
              className="bg-white/5 group rounded-md flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors "
            >
              <Image
                src="/album.jpg"
                width={104}
                height={104}
                alt="Capa do album do VGBeats"
              />
              <strong>Instinto Superior</strong>

              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play className="fill-black" />
              </button>
            </Link>
            <Link
              href=""
              className="bg-white/5 group rounded-md flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors "
            >
              <Image
                src="/album.jpg"
                width={104}
                height={104}
                alt="Capa do album do VGBeats"
              />
              <strong>Instinto Superior</strong>

              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play className="fill-black" />
              </button>
            </Link>
            <Link
              href=""
              className="bg-white/5 group rounded-md flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors "
            >
              <Image
                src="/album.jpg"
                width={104}
                height={104}
                alt="Capa do album do VGBeats"
              />
              <strong>Instinto Superior</strong>

              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play className="fill-black" />
              </button>
            </Link>
            <Link
              href=""
              className="bg-white/5 group rounded-md flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors "
            >
              <Image
                src="/album.jpg"
                width={104}
                height={104}
                alt="Capa do album do VGBeats"
              />
              <strong>Instinto Superior</strong>

              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play className="fill-black" />
              </button>
            </Link>
          </div>

          <h2 className="font-semibold text-2xl mt-10">
            Made for Maciel Azevedo
          </h2>

          <div className="grid grid-cols-8 gap-4 mt-4">
            <Link
              href="#"
              className=" bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10"
            >
              <Image
                className="w-full"
                src="/album.jpg"
                width={120}
                height={120}
                alt="Capa do album do VGBeats"
              />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-400">
                Wallows, COIN, girl in red and more
              </span>
            </Link>
          </div>
        </main>
      </div>
      <footer className="bg-zinc-800 border-t border-zinc-700 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image
            src="/album.jpg"
            width={56}
            height={56}
            alt="Capa do album do VGBeats"
          />
          <div className="flex flex-col">
            <strong className="font-normal">Instinto Superio</strong>
            <span className="text-xs text-zinc-400">VG Beats</span>
          </div>
        </div>
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
            <div className="h-1 rounded-full w-96 bg-zinc-600">
              <div className="bg-zinc-200 w-40 h-1 rounded-full"></div>
            </div>
            <span className="text-xs text-zinc-400">2:14</span>
          </div>
        </div>
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
      </footer>
    </div>
  );
}
