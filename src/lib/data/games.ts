"use server";

import { PrismaClient } from "@prisma/client";

type Content = { image: string; description: string };

export const newContent = async (ct: Content) => {
  const prisma = new PrismaClient();
  const content = await prisma.content.create({
    data: { image: ct.image, description: ct.description, gameId: 1 },
    select: { id: true, image: true, description: true },
  });
  console.log(content);
  return content;
};
