import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const prisma = new PrismaClient({
      log: ["query", "info", "warn", "error"],
    });
    const games = await prisma.game.findMany({
      include: { contributions: true, tags: true, objects: true },
    });
    return NextResponse.json({ error: false, games });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log("Failed to load games");
    return NextResponse.json(
      {
        error: true,
        message: `Failed to load games`,
      },
      { status: 400 },
    );
  }
}
