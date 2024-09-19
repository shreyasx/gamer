import * as React from "react";

import Card from "@/components/card";
import Navbar from "@/components/navbar";

import { allGames } from "@/app/actions";

export default async function HomePage() {
  const games = await allGames();

  return (
    <>
      <Navbar />
      <section className="flex justify-center items-center mt-1 px-4 sm:px-8 md:px-12 pb-60 md:pb-0 2xl:px-48">
        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-12 p-4 md:px-14 w-full mb-12">
          {games.map((game) => (
            <li key={game.id} className="flex justify-center">
              <Card game={game} className="w-full h-full" />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
