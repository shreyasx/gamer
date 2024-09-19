import Image from "next/image";

export type Contribution = {
  image: string;
  description: string;
};

type GameOverviewProps = {
  titleImage: string;
  description: string;
  contributions: [Contribution, Contribution];
};

function formatDescription(description: string): string {
  const lines = description.split("\n");
  if (lines.length <= 1) return description;

  const title = lines[0];
  const bulletPoints = lines.slice(1).map((line) => `• ${line.trim()}`);

  return [title, ...bulletPoints].join("\n");
}

export default function GameOverview({
  titleImage,
  description,
  contributions,
}: GameOverviewProps) {
  return (
    <section className="flex justify-center items-center flex-col mx-4 md:mx-24">
      <div className="pt-8 flex flex-col items-center w-full rounded-br-3xl">
        <h2 className="text-lg md:text-xl pb-6 text-light2 text-center w-full">
          OVERVIEW
        </h2>
        <div className="flex flex-col md:flex-row justify-start w-full px-4 md:px-24">
          <div className="relative w-full md:w-[50%] mb-8 md:mb-0 aspect-video">
            <Image
              src={titleImage}
              alt="Game title image"
              fill
              className="object-cover object-center"
            />
          </div>
          <div className="w-full md:w-[50%] flex flex-col md:pl-6 justify-center">
            <div className="text-lg py-3 text-light2 px-4">{description}</div>
          </div>
        </div>
      </div>
      <h2 className="text-lg md:text-xl pt-10 text-left w-full pb-8 md:pb-4 text-light2 px-4 md:px-24">
        CONTRIBUTIONS:
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12 w-full justify-center mb-20 px-4 md:px-24">
        {contributions.map((contribution, index) => (
          <div
            key={index}
            className="p-4 rounded-3xl max-w-[750px] mx-auto w-full"
          >
            <div className="relative w-full aspect-video">
              <Image
                src={contribution.image}
                alt={`Contribution ${index + 1}`}
                fill
                className="object-cover object-center"
              />
            </div>
            <p className="text-lg w-full mt-4 text-light2 whitespace-pre-wrap">
              {formatDescription(contribution.description)}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
