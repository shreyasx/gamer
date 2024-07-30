import Image from "next/image";
import { notFound } from "next/navigation";

import Navbar from "@/components/navbar";

import { getGameById } from "@/app/actions";

type Props = { params: { id: string } };

export default async function GameDetails({ params }: Props) {
  const { id } = params;
  const game = await getGameById(parseInt(id, 10));
  if (!game) return notFound();
  const { thumbnail, objects, contributions } = game;

  return (
    <>
      <Navbar />
      <section className="flex justify-center items-center mt-80 flex-col px-12">
        <h1 className="pt-5">{`OVERVIEW`}</h1>
        <div className="py-8 flex justify-start w-full">
          <div className="relative w-[40%] min-h-[300px]">
            <Image src={thumbnail} alt="lol" fill className="object-contain" />
          </div>
          <div className="w-[60%] px-16">
            <div className="flex flex-wrap justify-start h-fit w-full py-3">
              {objects.map((object) => (
                <div
                  key={object.id}
                  style={{ background: game.color_code }}
                  className="px-3 py-1.5 m-1 rounded-md h-fit w-fit"
                >
                  <p className="text-black text-base">{object.text}</p>
                </div>
              ))}
            </div>
            <div className="text-base text-justify py-3">
              {game.description}
            </div>
          </div>
        </div>
        <h2 className="pt-5 text-left w-full">{`CONTRIBUTIONS:`}</h2>
        <div className="grid grid-cols-2 gap-y-12 gap-x-20 w-full">
          {contributions.map((contribution) => (
            <div
              key={contribution.id}
              className="p-4 border-2 border-white rounded-md"
            >
              <div className="relative w-full h-[250px]">
                <Image
                  src={contribution.image}
                  alt="lol"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-base">{contribution.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
