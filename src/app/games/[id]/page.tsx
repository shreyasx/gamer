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
      await new Promise((resolve) => setTimeout(resolve, 10000));
      setLoading(false);
    };

    fetchGame();
  }, [params]);

  if (loading) return <GameSkeleton />;
  if (!game) return notFound();
  const { thumbnail, objects, contributions, title } = game;

  return (
    <section className="flex justify-center items-center flex-col mr-0 md:mr-8 2xl:px-48 mx-4">
      <div className="py-8 flex flex-col md:flex-row justify-start w-full rounded-br-3xl md:mr-24">
        <div className="relative w-full md:w-[40%] md:ml-16 mb-8 md:mb-0 aspect-video">
          <Image
            src={thumbnail}
            alt={title}
            fill
            className="object-contain object-center"
          />
        </div>
        <div className="w-full md:w-[60%] px-4 md:px-16">
          <h1 className="text-lg md:text-xl pb-3 text-light2">{`OVERVIEW`}</h1>
          <div className="flex flex-wrap justify-start h-fit w-full py-3">
            {objects.map((object) => (
              <div
                key={object.id}
                className="m-2 px-4 py-1.5 rounded-full h-fit w-fit bg-light2"
              >
                <p className="text-black text-base">{object.text}</p>
              </div>
            ))}
          </div>
          <div className="text-base py-3 text-light2">{game.description}</div>
        </div>
      </div>
      <h2 className="text-lg md:text-xl pt-10 text-left w-full pb-8 md:pb-12 ml-4 md:ml-24 text-light2">{`CONTRIBUTIONS:`}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12 w-full justify-center">
        {contributions.map((contribution) => (
          <div
            key={contribution.id}
            className="border-light3 border-4 p-4 rounded-3xl max-w-[750px] mx-auto w-full"
          >
            <div className="relative w-full aspect-video">
              <Image
                src={contribution.image}
                alt="lol"
                fill
                className="object-cover rounded-3xl"
              />
            </div>
            <p className="text-base w-full mt-4 text-light2">
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
    <section className="flex justify-center items-center flex-col animate-pulse mr-0 md:mr-4 2xl:px-48">
      <div className="py-8 flex flex-col md:flex-row justify-start w-full rounded-br-3xl md:mr-24">
        <div className="relative w-full md:w-[40%] h-[300px] md:h-auto md:ml-16 mb-8 md:mb-0 aspect-video bg-gray-300" />
        <div className="w-full md:w-[60%] px-4 md:px-16">
          <div className="h-6 md:h-8 bg-gray-300 mb-3 w-1/4" />
          <div className="flex flex-wrap justify-start h-fit w-full py-3">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="m-2 px-4 py-1.5 rounded-full h-6 md:h-8 w-20 md:w-24 bg-gray-300"
              />
            ))}
          </div>
          <div className="h-32 md:h-40 bg-gray-300 mt-3" />
        </div>
      </div>
      <div className="h-6 md:h-8 bg-gray-300 w-1/3 mt-10 mb-8 md:mb-12 ml-4 md:ml-24" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12 w-full justify-center">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="p-4 max-w-[750px] mx-auto rounded-md w-full">
            <div className="relative w-full aspect-video bg-gray-300" />
            <div className="h-16 md:h-20 bg-gray-300 mt-4" />
          </div>
        ))}
      </div>
    </section>
  );
}
