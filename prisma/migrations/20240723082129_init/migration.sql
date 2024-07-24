-- CreateTable
CREATE TABLE "Tag" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "percentage" INTEGER NOT NULL,

    CONSTRAINT "Tag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ObjectTyp" (
    "id" SERIAL NOT NULL,
    "text" TEXT NOT NULL,

    CONSTRAINT "ObjectTyp_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Content" (
    "id" SERIAL NOT NULL,
    "image" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "gameId" INTEGER,

    CONSTRAINT "Content_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Game" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "logo" TEXT NOT NULL,
    "thumbnail" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Game_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_GameTags" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_GameObjects" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_GameTags_AB_unique" ON "_GameTags"("A", "B");

-- CreateIndex
CREATE INDEX "_GameTags_B_index" ON "_GameTags"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_GameObjects_AB_unique" ON "_GameObjects"("A", "B");

-- CreateIndex
CREATE INDEX "_GameObjects_B_index" ON "_GameObjects"("B");

-- AddForeignKey
ALTER TABLE "Content" ADD CONSTRAINT "Content_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "Game"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_GameTags" ADD CONSTRAINT "_GameTags_A_fkey" FOREIGN KEY ("A") REFERENCES "Game"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_GameTags" ADD CONSTRAINT "_GameTags_B_fkey" FOREIGN KEY ("B") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_GameObjects" ADD CONSTRAINT "_GameObjects_A_fkey" FOREIGN KEY ("A") REFERENCES "Game"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_GameObjects" ADD CONSTRAINT "_GameObjects_B_fkey" FOREIGN KEY ("B") REFERENCES "ObjectTyp"("id") ON DELETE CASCADE ON UPDATE CASCADE;
