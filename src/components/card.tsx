import { Prisma } from "@prisma/client";
import Image from "next/image";

type Game = Prisma.GameGetPayload<{
  include: { tags: true };
}>;

const Card = ({ game }: { game: Game }) => {
  const { title, thumbnail, logo, tags, color_code } = game;
  return (
    <div className="flex flex-col w-fit">
      <li
        style={{ background: color_code }}
        className="rounded-3xl pr-3 mx-auto rounded-b-none"
      >
        <Image
          // https://picsum.photos/500/300
          src={thumbnail}
          alt="lol"
          width={500}
          height={250}
          className="rounded-3xl rounded-bl-none"
        />
      </li>
      <div
        style={{ background: color_code }}
        className="flex flex-row h-[75px] rounded-b-3xl w-full"
      >
        <div className="w-1/3">
          <Image
            src={logo}
            alt="lol"
            width={150}
            height={75}
            className="rounded-bl-3xl h-full"
          />
        </div>
        <div className="w-2/3">
          <p className="text-black text-base font-bold text-center pt-1 flex justify-center items-center">
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
    </div>
  );
};

export default Card;
