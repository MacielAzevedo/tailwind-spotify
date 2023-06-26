import { Aside } from '@/components/Aside';
import { Main } from '@/components/Main';
import { Button } from '@/components/Main/components/Button';
import { NavLink } from '@/components/_UI/NavLink';
import { Laptop2, LayoutList, Maximize2, Mic2, Volume } from 'lucide-react';

import albumImage from '../../public/album.jpg';

import { Home as HomeIcon, Search, Library, Play } from 'lucide-react';

import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1 max-sm:flex-col">
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

        <Main.Root>
          <Main.Header>
            <Button.Top variant="left" />
            <Button.Top variant="right" />
          </Main.Header>

          <Main.Title text="Good Afternoon" />

          <Main.AlbumContainer>
            <Main.AlbumCard img={albumImage} title="Instinto Superior" />
            <Main.AlbumCard img={albumImage} title="Instinto Superior" />
            <Main.AlbumCard img={albumImage} title="Instinto Superior" />
            <Main.AlbumCard img={albumImage} title="Instinto Superior" />
            <Main.AlbumCard img={albumImage} title="Instinto Superior" />
            <Main.AlbumCard img={albumImage} title="Instinto Superior" />
          </Main.AlbumContainer>

          <Main.Subtitle text="Made for Maciel Azevedo" />

          <Main.CategoryContainer>
            <NavLink.Category
              artists="Wallows, COIN, girl in red and more"
              alt=""
              img={albumImage}
              path="#"
            />
            <NavLink.Category
              artists="Wallows, COIN, girl in red and more"
              alt=""
              img={albumImage}
              path="#"
            />
            <NavLink.Category
              artists="Wallows, COIN, girl in red and more"
              alt=""
              img={albumImage}
              path="#"
            />
            <NavLink.Category
              artists="Wallows, COIN, girl in red and more"
              alt=""
              img={albumImage}
              path="#"
            />
            <NavLink.Category
              artists="Wallows, COIN, girl in red and more"
              alt=""
              img={albumImage}
              path="#"
            />
          </Main.CategoryContainer>
        </Main.Root>
      </div>

      <Footer.Root>
        <Footer.AlbumMusic
          path={albumImage}
          artist="VG Beats"
          title="Instinto Superior"
          alt="VG Beats Music"
        />
        <Footer.PlayerController />
        <Footer.OtherControls />
      </Footer.Root>
    </div>
  );
}
