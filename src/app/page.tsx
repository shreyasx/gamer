import * as React from "react";

import Card from "@/components/card";
import Navbar from "@/components/navbar";

import { allGames } from "@/app/actions";

export default async function HomePage() {
  const games = await allGames();

  return (
    <>
      <Navbar />
      <section className="flex justify-center items-center mt-64 py-20 px-12">
        <ul className="grid grid-cols-2 gap-12 p-14 w-full">
          {games.map((game) => (
            <li
              key={game.id}
              className="flex justify-center items-center w-full"
            >
              <Card game={game} />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
