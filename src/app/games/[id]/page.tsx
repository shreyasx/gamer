"use client";

import { Prisma } from "@prisma/client";
import Image from "next/image";
import { notFound } from "next/navigation";
import { useEffect, useState } from "react";

import { getGameById } from "@/app/actions";

type Props = { params: { id: string } };

type Game = Prisma.GameGetPayload<{
  include: { tags: true; contributions: true; objects: true };
}>;

export default function GameDetails({ params }: Props) {
  const [game, setGame] = useState<Game | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGame = async () => {
      const { id } = params;
      const fetchedGame = await getGameById(parseInt(id, 10));
      if (fetchedGame) setGame(fetchedGame);
      setLoading(false);
    };

    fetchGame();
  }, [params]);

  if (loading) return <GameSkeleton />;
  if (!game) return notFound();
  const { thumbnail, objects, contributions } = game;

  return (
    <section className="flex justify-center items-center flex-col">
      <div className="py-8 flex flex-col md:flex-row justify-start w-full bg-navy2 rounded-br-3xl md:mr-24 border-2 border-light2 border-l-0 border-t-0">
        <div className="relative w-full md:w-[40%] h-[300px] md:h-auto md:ml-16 mb-8 md:mb-0">
          <Image
            src={thumbnail}
            alt={game.title}
            fill
            className="object-contain object-center"
          />
        </div>
        <div className="w-full md:w-[60%] px-4 md:px-16">
          <h1 className="text-4xl md:text-6xl pb-3">{`OVERVIEW`}</h1>
          <div className="flex flex-wrap justify-start h-fit w-full py-3">
            {objects.map((object) => (
              <div
                key={object.id}
                className="px-4 md:px-6 py-0.5 m-1 rounded-full h-fit w-fit bg-light2"
              >
                <p className="text-black text-base md:text-lg">{object.text}</p>
              </div>
            ))}
          </div>
          <div className="text-lg md:text-xl leading-8 md:leading-10 text-justify py-3">
            {game.description}
          </div>
        </div>
      </div>
      <h2 className="text-4xl md:text-6xl pt-5 text-left w-full pb-8 md:pb-12 ml-4 md:ml-24">{`CONTRIBUTIONS:`}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12 w-full justify-center">
        {contributions.map((contribution) => (
          <div
            key={contribution.id}
            className="p-4 max-w-[750px] mx-auto rounded-md w-full"
          >
            <div className="relative w-full aspect-video">
              <Image
                src={contribution.image}
                alt="lol"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-lg text-justify w-full mt-4">
              {contribution.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function GameSkeleton() {
  return (
    <section className="flex justify-center items-center flex-col animate-pulse">
      <div className="py-8 flex flex-col md:flex-row justify-start w-full bg-navy2 rounded-br-3xl md:mr-24 border-2 border-light2 border-l-0 border-t-0">
        <div className="relative w-full md:w-[40%] h-[300px] md:ml-16 bg-gray-300 mb-8 md:mb-0" />
        <div className="w-full md:w-[60%] px-4 md:px-16">
          <div className="h-8 md:h-12 bg-gray-300 mb-3" />
          <div className="flex flex-wrap justify-start h-fit w-full py-3">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="px-4 md:px-6 py-0.5 m-1 rounded-full h-6 md:h-8 w-20 md:w-24 bg-gray-300"
              />
            ))}
          </div>
          <div className="h-32 md:h-40 bg-gray-300 mt-3" />
        </div>
      </div>
      <div className="h-8 md:h-12 bg-gray-300 w-3/4 md:w-1/2 mt-5 mb-8 md:mb-12 ml-4 md:ml-24" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 w-full justify-center">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="p-4 max-w-[750px] mx-auto rounded-md">
            <div className="relative w-full aspect-video bg-gray-300" />
            <div className="h-16 md:h-20 bg-gray-300 mt-4" />
          </div>
        ))}
      </div>
    </section>
  );
}
