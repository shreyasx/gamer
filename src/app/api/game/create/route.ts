import { Prisma } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

import prisma from "@/lib/prisma";

type Game = Prisma.GameGetPayload<{
  include: { tags: true; contributions: true; objects: true };
}>;

export async function POST(Request: NextRequest) {
  const data = await Request.json();
  const { game, games }: { game: Game; games: Game[] } = data;

  if (games && games.length) {
    const Gs = [];
    for (const g of games) {
      const obj = await prisma.game.create({
        data: {
          title: g.title,
          description: g.description,
          thumbnail: g.thumbnail,
          logo: g.logo,
          color_code: g.color_code,
          contributions: {
            create: g.contributions,
          },
          tags: {
            create: g.tags,
          },
          objects: {
            create: g.objects,
          },
        },
        include: { tags: true, contributions: true, objects: true },
      });
      Gs.push(obj);
    }
    return NextResponse.json({ error: false, games: Gs });
  }

  try {
    const obj = await prisma.game.create({
      data: {
        title: game.title,
        description: game.description,
        thumbnail: game.thumbnail,
        logo: game.logo,
        color_code: game.color_code,
        contributions: {
          create: game.contributions,
        },
        tags: {
          create: game.tags,
        },
        objects: {
          create: game.objects,
        },
      },
    });
    return NextResponse.json({ error: false, game: obj });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log("Failed to create new game");
    return NextResponse.json(
      {
        error: true,
        message: `Failed to create new game. check ur data`,
      },
      { status: 400 },
    );
  }
}
