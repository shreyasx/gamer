"use server";

import prisma from "@/lib/prisma";

export const allGames = async () => {
  try {
    const games = await prisma.game.findMany({
      include: { contributions: true, tags: true, objects: true },
    });
    return games;
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e);
    return [];
  }
};
