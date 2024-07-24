import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

type Tag = { title: string; percentage: number };
type ObjectType = { text: string };

type Content = {
  image: string;
  description: string;
};

type Game = {
  title: string;
  description: string;
  thumbnail: string;
  logo: string;
  contributions: Content[];
  tags: Tag[];
  objects: ObjectType[];
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function isGame(obj: any): obj is Game {
  return (
    typeof obj === "object" &&
    typeof obj.title === "string" &&
    typeof obj.description === "string" &&
    typeof obj.thumbnail === "string" &&
    typeof obj.logo === "string" &&
    Array.isArray(obj.contributions) &&
    Array.isArray(obj.tags) &&
    Array.isArray(obj.objects)
  );
}

export async function POST(Request: NextRequest) {
  const data = await Request.json();
  const { game }: { game: Game } = data;

  if (!isGame(game)) {
    return NextResponse.json({
      error: true,
      message: `Invalid game object`,
    });
  }

  const prisma = new PrismaClient({
    log: ["query", "info", "warn", "error"],
  });

  try {
    const obj = await prisma.game.create({
      data: {
        title: game.title,
        description: game.description,
        thumbnail: game.thumbnail,
        logo: game.logo,
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
