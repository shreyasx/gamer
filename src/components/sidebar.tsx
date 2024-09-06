"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { getGameById } from "@/app/actions";

const Sidebar = () => {
  const pathname = usePathname();
  const [gameId, setGameId] = useState<string | null>(null);
  const [gameName, setGameName] = useState<string | null>(null);

  useEffect(() => {
    const path = window.location.pathname;
    const match = path.match(/\/games\/(\d+)/);
    if (match) {
      setGameId(match[1]);
    } else {
      setGameId(null);
    }
  }, [pathname]);

  useEffect(() => {
    (async () => {
      if (gameId) {
        const game = await getGameById(parseInt(gameId));
        if (game) setGameName(game.title);
        else setGameName(null);
      } else setGameName(null);
    })();
  }, [gameId]);

  return (
    <aside className="bg-navy text-white flex flex-col fixed bottom-0 left-0 w-full h-auto md:h-full md:w-80 md:right-0 md:left-auto">
      <div className="hidden md:block w-64 h-80 relative ml-auto">
        <Image
          src="/images/rohan.png"
          alt="Rohan"
          layout="fill"
          objectFit="cover"
          className="rounded-b-full z-50 border-[10px] border-photoBG border-t-0"
        />
      </div>
      <div className="flex-grow flex flex-col justify-center">
        <nav className="md:space-y-20 flex flex-row md:flex-col items-center w-full py-4 justify-evenly">
          <Link
            className="text-2xl text-light2 bg-navy2 px-10 py-1 rounded-full hover:bg-light3 transition-all duration-300 tracking-wider"
            href="/"
          >{`Games`}</Link>
          {gameName && (
            <div className="flex-col items-end w-full space-y-2 hidden md:flex">
              <Link
                className="text-xl text-light2 bg-navy2 px-4 py-0.5 rounded-full hover:bg-light3 transition-all duration-300 truncate max-w-[200px] md:rounded-r-none"
                href={`/games/${gameId}`}
              >
                {gameName}
              </Link>
              <Link
                className="text-xl text-light2 bg-navy2 px-4 py-0.5 rounded-full hover:bg-light3 transition-all duration-300 truncate max-w-[200px] md:rounded-r-none"
                href={`/`}
              >
                {`Go back`}
              </Link>
            </div>
          )}
          <Link
            className="text-2xl text-light2 bg-navy2 px-10 py-1 rounded-full hover:bg-light3 transition-all duration-300 tracking-wider"
            href="/about"
          >{`About`}</Link>
        </nav>
      </div>
      <div className="text-base text-light2 text-center border-t-4 border-light2 pt-4 flex flex-col items-center">
        <p>{`rohangwrl@gmail.com`}</p>
        <p>{`+91 9920054070`}</p>
      </div>
    </aside>
  );
};

export default Sidebar;
