import GameOverview, { Contribution } from "@/app/about/game-overview";

const About = () => {
  const titleImage =
    "https://res.cloudinary.com/dvq1nzprw/image/upload/v1726767719/Overivew_About_i26qfc.png";
  const description =
    "I’ve trained in game-design, philosophy and psychology. I like to build joy for players through design!";
  const contributions: [Contribution, Contribution] = [
    {
      image:
        "https://res.cloudinary.com/dvq1nzprw/image/upload/v1726767719/Hobbies_-_2_m1ks61.png",
      description: "GAMES:\nMOBA, Roguelike, Shooters, Strategy.",
    },
    {
      image:
        "https://res.cloudinary.com/dvq1nzprw/image/upload/v1726767718/Games_-_1_hswxte.png",
      description:
        "HOBBIES:\nJamming to Music, Talking to Animals, Films and Shows, Comedy, Reading.",
    },
  ];

  return (
    <GameOverview
      titleImage={titleImage}
      description={description}
      contributions={contributions}
    />
  );
};

export default About;
