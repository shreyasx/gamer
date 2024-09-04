import { Prisma } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

import prisma from "@/lib/prisma";

type Game = Prisma.GameGetPayload<{
  include: { tags: true; contributions: true; objects: true };
}>;

export async function POST(Request: NextRequest) {
  let data;
  try {
    data = await Request.json();
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log("Invalid JSON in request body", error);
    return NextResponse.json(
      {
        error: true,
        message: `Invalid JSON in request body`,
      },
      { status: 400 },
    );
  }

  const { games, passkey }: { games: Game[]; passkey: string } = data;
  if (passkey !== process.env.PASSKEY) {
    return NextResponse.json(
      {
        error: true,
        message: `Invalid passkey`,
      },
      { status: 400 },
    );
  }

  if (games && games.length) {
    try {
      const Gs = [];
      for (const g of games) {
        const obj = await prisma.game.create({
          data: {
            title: g.title,
            description: g.description,
            thumbnail: g.thumbnail,
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
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log("Failed to create new games", error);
      return NextResponse.json(
        {
          error: true,
          message: `Failed to create new games. check ur data`,
        },
        { status: 400 },
      );
    }
  } else {
    return NextResponse.json(
      {
        error: true,
        message: `No games to create`,
      },
      { status: 400 },
    );
  }
}
