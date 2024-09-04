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
    <aside className="w-64 h-full bg-navy text-white flex flex-col justify-between items-center fixed right-0">
      <div className="absolute top-0 right-0 w-64 h-80">
        <Image
          src="/images/rohan.png"
          alt="Rohan"
          layout="fill"
          objectFit="cover"
          className="rounded-b-full z-50"
        />
      </div>
      <div className="flex flex-col justify-center items-center flex-grow w-full">
        <nav className="space-y-4 flex flex-col items-center mt-64 w-full">
          <Link
            className="text-2xl text-light2 bg-navy2 px-10 py-1 rounded-full hover:bg-light3 transition-all duration-300 tracking-wider"
            href="/"
          >{`Games`}</Link>
          {gameName && (
            <div className="flex flex-col items-end w-full space-y-2">
              <Link
                className="text-xl text-light2 bg-navy2 px-4 py-0.5 rounded-full hover:bg-light3 transition-all duration-300 truncate max-w-[200px] rounded-r-none"
                href={`/games/${gameId}`}
              >
                {gameName}
              </Link>
              <Link
                className="text-xl text-light2 bg-navy2 px-4 py-0.5 rounded-full hover:bg-light3 transition-all duration-300 truncate max-w-[200px] rounded-r-none"
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
      <div className="mt-auto mb-4 text-light2 text-center border-t-4 border-light2 pt-4">
        <p>{`rohangwrl@gmail.com`}</p>
        <p>{`+91 9920054070`}</p>
      </div>
    </aside>
  );
};

export default Sidebar;
