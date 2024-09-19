"use client";

import { Prisma } from "@prisma/client";
import Link from "next/link";

import EmblaCarousel from "@/components/embla-carousel";

type Game = Prisma.GameGetPayload<{
  include: { tags: true };
}>;

const Card = ({ game, className }: { game: Game; className?: string }) => {
  const { title, thumbnails, tags, id } = game;

  return (
    <Link
      href={`/games/${id}`}
      className={`flex flex-col w-full border-[4px] border-light3 p-4 rounded-3xl ${className}`}
    >
      <EmblaCarousel slides={thumbnails} />
      <div className="flex flex-row rounded-b-3xl w-full">
        <div className="w-full flex flex-col">
          <p className="text-light2 text-center flex justify-center items-center text-lg md:text-xl px-2 leading-10 py-3">
            {title}
          </p>
          <div className="flex flex-row w-full h-full justify-center items-center flex-wrap gap-3">
            {tags.map((tag) => (
              <span
                key={tag.id}
                className={`text-base text-navy bg-light2 text-center flex justify-center items-center rounded-full mx-0.5 px-3 py-1`}
              >
                {tag.title}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
