"use server";

import prisma from "@/lib/prisma";

export const getGameById = async (id: number) => {
  await new Promise((resolve) => setTimeout(resolve, 4500));
  if (!id) return null;
  try {
    const game = prisma.game.findUnique({
      where: { id },
      include: { tags: true, contributions: true, objects: true },
    });
    return game;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
    return null;
  }
};
