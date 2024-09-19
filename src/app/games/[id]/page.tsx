import { Prisma } from "@prisma/client";
import Image from "next/image";
import { notFound } from "next/navigation";

import { getGameById } from "@/app/actions";

type Props = { params: { id: string } };

type Game = Prisma.GameGetPayload<{
  include: { tags: true; contributions: true; objects: true };
}>;

export default async function GameDetails({ params }: Props) {
  const { id } = params;
  const game: Game | null = await getGameById(parseInt(id, 10));

  if (!game) return notFound();
  const { thumbnail, objects, contributions, title } = game;

  return (
    <section className="flex justify-center items-center flex-col mr-0 md:mr-8 2xl:px-48 mx-4">
      <div className="py-8 flex flex-col items-center w-full rounded-br-3xl md:mr-24">
        <h2 className="text-lg md:text-xl pb-6 text-light2 text-center w-full">{`OVERVIEW`}</h2>
        <div className="flex flex-col md:flex-row justify-start w-full">
          <div className="relative w-full md:w-[50%] md:ml-16 mb-8 md:mb-0 aspect-video">
            <Image
              src={thumbnail}
              alt={title}
              fill
              className="object-contain object-center"
            />
          </div>
          <div className="w-full md:w-[50%] px-4 md:px-16 flex flex-col">
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
      </div>
      <h2 className="text-lg md:text-xl pt-10 text-left w-full pb-8 md:pb-12 ml-4 md:ml-24 text-light2">{`CONTRIBUTIONS:`}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12 w-full justify-center">
        {contributions.map((contribution) => (
          <div
            key={contribution.id}
            className="p-4 rounded-3xl max-w-[750px] mx-auto w-full"
          >
            <div className="relative w-full aspect-video">
              <Image
                src={contribution.image}
                alt="lol"
                fill
                className="object-cover"
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
