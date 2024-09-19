"use server";

import prisma from "@/lib/prisma";

type Content = { images: string[]; description: string };

export const newContent = async (ct: Content) => {
  const content = await prisma.content.create({
    data: { images: ct.images, description: ct.description, gameId: 1 },
    select: { id: true, images: true, description: true },
  });
  return content;
};
