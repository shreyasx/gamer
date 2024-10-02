import { Prisma } from "@prisma/client";
import Image from "next/image";
import { notFound } from "next/navigation";

import EmblaCarousel from "@/components/embla-carousel";

import { allGames, getGameById } from "@/app/actions";

type Props = { params: { id: string } };

type Game = Prisma.GameGetPayload<{
  include: { tags: true; contributions: true; objects: true };
}>;

function formatDescription(description: string): string {
  const lines = description.split("\n");
  if (lines.length <= 1) return description;

  const title = lines[0];
  const bulletPoints = lines.slice(1).map((line) => `• ${line.trim()}`);

  return [title, ...bulletPoints].join("\n");
}

export const revalidate = 60;

export async function generateStaticParams() {
  const games = await allGames();
  return games.map((game: { id: number }) => ({
    id: game.id.toString(),
  }));
}

export default async function GameDetails({ params }: Props) {
  const { id } = params;
  const game: Game | null = await getGameById(parseInt(id, 10));

  if (!game) return notFound();
  const { thumbnail, objects, contributions } = game;

  return (
    <section className="flex justify-center items-center flex-col mr-0 md:mr-8 2xl:px-36 mx-4">
      <div className="pt-8 flex flex-col items-center w-full rounded-br-3xl lg:mr-24">
        <h2 className="text-lg md:text-xl pb-6 text-light2 text-center w-full">{`OVERVIEW`}</h2>
        <div className="flex flex-col lg:flex-row justify-start w-full">
          <div className="relative w-full lg:w-[50%] lg:ml-16 mb-8 md:mb-0 aspect-video">
            <Image
              src={thumbnail}
              alt="Game title image"
              fill
              className="object-contain p-6"
            />
          </div>
          <div className="w-full lg:w-[50%] flex flex-col">
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
            <div className="text-base py-3 text-light2 break-words">
              {game.description}
            </div>
          </div>
        </div>
      </div>
      <h2 className="text-lg md:text-xl pt-10 text-left w-full pb-8 md:pb-4 ml-4 md:ml-24 text-light2">{`CONTRIBUTIONS:`}</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-12 w-full justify-center mb-20 overflow-y-auto">
        {contributions.map((contribution) => (
          <div
            key={contribution.id}
            className="p-4 rounded-3xl max-w-[750px] mx-auto w-full overflow-y-auto"
          >
            <div className="relative w-full aspect-video">
              <EmblaCarousel slides={contribution.images} />
            </div>
            <p className="text-base w-full mt-4 text-light2 whitespace-pre-wrap">
              {formatDescription(contribution.description)}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
