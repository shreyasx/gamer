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

  const showGoBack = gameName || pathname === "/about";

  return (
    <aside className="bg-navy text-white flex flex-col fixed bottom-0 left-0 w-full h-auto md:h-full md:w-64 2xl:w-96 md:right-0 md:left-auto">
      <div className="hidden md:block w-64 h-80 relative ml-auto">
        <Image
          src="/images/rohan.png"
          alt="Rohan"
          layout="fill"
          objectFit="cover"
          className="rounded-b-full z-50 border-[10px] border-photoBG border-t-0"
        />
      </div>
      <div className="flex-grow flex flex-col justify-center w-full">
        <nav
          className={`${showGoBack ? `md:space-y-3` : `md:space-y-20`} flex flex-row md:flex-col items-center w-full py-4 justify-evenly`}
        >
          <Link
            className="w-full text-lg text-light2 bg-navy2 py-4 justify-center items-center flex rounded-full hover:bg-light3 transition-all duration-300 tracking-wider max-w-60"
            href="/about"
          >{`About`}</Link>
          {gameName && (
            <Link
              className="justify-center items-center flex w-full text-lg text-light2 bg-navy2 py-4 rounded-full hover:bg-light3 transition-all duration-300 max-w-60"
              href={`/games/${gameId}`}
            >
              <span className="truncate max-w-[90%]">{gameName}</span>
            </Link>
          )}
          {showGoBack && (
            <Link
              className="w-full text-base text-light2 bg-navy2 justify-center items-center flex py-2 rounded-full hover:bg-light3 transition-all duration-300 truncate max-w-60"
              href={`/`}
            >
              {`Go back`}
            </Link>
          )}
        </nav>
      </div>
      <div className="text-sm w-full text-light2 text-center border-t-4 border-light2 py-4 flex flex-col items-center">
        <p>{`rohangwrl@gmail.com`}</p>
        <p>{`+91 9920054070`}</p>
      </div>
    </aside>
  );
};

export default Sidebar;
