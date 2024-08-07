"use server";

import prisma from "@/lib/prisma";

type Content = { image: string; description: string };

export const newContent = async (ct: Content) => {
  const content = await prisma.content.create({
    data: { image: ct.image, description: ct.description, gameId: 1 },
    select: { id: true, image: true, description: true },
  });
  return content;
};
