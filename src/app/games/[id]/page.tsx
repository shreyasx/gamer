import { notFound } from "next/navigation";

import Navbar from "@/components/navbar";

import { getGameById } from "@/app/actions";

type Props = { params: { id: string } };

export default async function GameDetails({ params }: Props) {
  const { id } = params;
  const game = await getGameById(parseInt(id, 10));
  if (!game) return notFound();

  return (
    <>
      <Navbar />
      <section className="flex justify-center items-center mt-80">
        {JSON.stringify(game, null, 2)}
      </section>
    </>
  );
}
