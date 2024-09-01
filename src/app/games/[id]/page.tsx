import Image from "next/image";
import { notFound } from "next/navigation";

import { getGameById } from "@/app/actions";

type Props = { params: { id: string } };

export default async function GameDetails({ params }: Props) {
  const { id } = params;
  const game = await getGameById(parseInt(id, 10));
  if (!game) return notFound();
  const { thumbnail, objects, contributions } = game;

  return (
    <section className="flex justify-center items-center flex-col">
      <div className="py-8 flex justify-start w-full bg-navy2 rounded-br-3xl mr-24 border-2 border-light2 border-l-0 border-t-0">
        <div className="relative w-[40%] min-h-[300px] ml-16">
          <Image
            src={thumbnail}
            alt="lol"
            fill
            className="object-contain object-top"
          />
        </div>
        <div className="w-[60%] px-16">
          <h1 className="text-6xl pb-3">{`OVERVIEW`}</h1>
          <div className="flex flex-wrap justify-start h-fit w-full py-3">
            {objects.map((object) => (
              <div
                key={object.id}
                className="px-6 py-0.5 m-1 rounded-full h-fit w-fit bg-light2"
              >
                <p className="text-black text-lg">{object.text}</p>
              </div>
            ))}
          </div>
          <div className="text-xl leading-10 text-justify py-3">
            {game.description}
          </div>
        </div>
      </div>
      <h2 className="text-6xl pt-5 text-left w-full pb-12">{`CONTRIBUTIONS:`}</h2>
      <div className="grid grid-cols-2 gap-12 w-full justify-center">
        {contributions.map((contribution) => (
          <div
            key={contribution.id}
            className="p-4 max-w-[750px] mx-auto rounded-md"
          >
            <div className="relative w-full h-[400px] ">
              <Image
                src={contribution.image}
                alt="lol"
                layout="fill"
                className="object-cover"
              />
            </div>
            <p className="text-lg text-justify w-full">
              {contribution.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
