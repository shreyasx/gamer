import { Prisma } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

type Game = Prisma.GameGetPayload<{
  include: { tags: true };
}>;

const Card = ({ game }: { game: Game }) => {
  const { title, thumbnail, logo, tags, color_code, id } = game;
  return (
    <Link href={`/games/${id}`} className="flex flex-col w-fit">
      <li
        style={{ background: color_code }}
        className="rounded-3xl pr-3 mx-auto rounded-b-none"
      >
        <Image
          // https://picsum.photos/500/300
          src={thumbnail}
          alt="lol"
          width={600}
          height={300}
          className="rounded-3xl rounded-bl-none h-[300px] object-cover"
        />
      </li>
      <div
        style={{ background: color_code }}
        className="flex flex-row h-[100px] rounded-b-3xl w-full"
      >
        <div className="w-1/3">
          <Image
            src={logo}
            alt="lol"
            width={200}
            height={100}
            className="rounded-bl-3xl h-full w-full object-cover"
          />
        </div>
        <div className="w-2/3 flex flex-col">
          <p className="text-black text-base font-bold text-center flex justify-center items-center text-lg px-2 py-4 h-full">
            {title}
          </p>
          <div className="flex flex-row w-full">
            {tags.map((tag) => (
              <span
                key={tag.id}
                style={{
                  background: tag.color_code,
                  width: `${tag.percentage_width}%`,
                }}
                className={`text-black text-base font-bold text-center flex justify-center items-center last:rounded-br-3xl`}
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
