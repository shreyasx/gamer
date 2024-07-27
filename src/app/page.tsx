"use client";

import { Prisma } from "@prisma/client";
import * as React from "react";

import Card from "@/components/card";
import Navbar from "@/components/navbar";

type Game = Prisma.GameGetPayload<{
  include: { contributions: true; tags: true; objects: true };
}>;

export default function HomePage() {
  const [games, setGames] = React.useState<Game[]>([]);

  React.useEffect(() => {
    (async () => {
      const res = await fetch("/api/games");
      const data = await res.json();
      setGames(data.games);
    })();
  }, []);

  return (
    <>
      <Navbar />
      <section className="flex justify-center items-center mt-80">
        <ul className="grid grid-cols-2 gap-x-16 gap-y-4 p-14 w-full">
          {games.length
            ? games.map((game) => <Card key={game.id} game={game} />)
            : null}
        </ul>
      </section>
    </>
  );
}
