import { Prisma } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

type Game = Prisma.GameGetPayload<{
  include: { tags: true };
}>;

const Card = ({ game }: { game: Game }) => {
  const { title, thumbnail, logo, tags, color_code, id } = game;
  return (
    <Link
      href={`/games/${id}`}
      className="flex flex-col w-fit max-w-[610px] border-[2px] border-light p-4 rounded-3xl"
    >
      <div className="rounded-3xl w-full">
        <Image
          src={thumbnail}
          alt="lol"
          width={600}
          height={300}
          className="rounded-3xl h-[300px] object-cover border-[1px] border-white"
        />
      </div>
      <div className="flex flex-row rounded-b-3xl w-full">
        <div className="w-full flex flex-col">
          <p className="text-light2 text-center flex justify-center items-center text-5xl px-2 py-1">
            {title}
          </p>
          <div className="flex flex-row w-full h-full justify-center">
            {tags.map((tag) => (
              <span
                key={tag.id}
                className={`text-navy bg-light2 text-center flex justify-center items-center text-3xl rounded-full mx-1 px-3 py-1`}
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
