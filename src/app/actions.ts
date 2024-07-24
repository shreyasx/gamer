"use server";

import { PrismaClient } from "@prisma/client";
import "@/lib/env";

type Content = { image: string; description: string };

export const newContent = async (ct: Content) => {
  const prisma = new PrismaClient({
    log: ["query", "info", "warn", "error"],
  });
  try {
    const content = await prisma.content.create({
      data: { image: ct.image, description: ct.description } as any,
      select: { id: true, image: true, description: true },
    });
    return content;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error("Failed to create new content:", error);
    throw error;
  }
};
