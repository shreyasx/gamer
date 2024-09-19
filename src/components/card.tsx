import { Prisma } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

type Game = Prisma.GameGetPayload<{
  include: { tags: true };
}>;

const Card = ({ game, className }: { game: Game; className?: string }) => {
  const { title, thumbnail, tags, id } = game;
  return (
    <Link
      href={`/games/${id}`}
      className={`flex flex-col w-full border-[4px] border-light3 p-4 rounded-3xl ${className}`}
    >
      <div className="rounded-3xl aspect-video relative">
        <Image
          src={thumbnail}
          alt={title}
          fill
          className="rounded-3xl h-[200px] md:h-[300px] 2xl:h-[350px] object-cover border-[2px] border-light2"
        />
      </div>
      <div className="flex flex-row rounded-b-3xl w-full">
        <div className="w-full flex flex-col">
          <p className="text-light2 text-center flex justify-center items-center text-lg md:text-xl px-2">
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
