/*
  Warnings:

  - You are about to drop the column `percentage` on the `Tag` table. All the data in the column will be lost.
  - Added the required column `color_code` to the `Game` table without a default value. This is not possible if the table is not empty.
  - Added the required column `color_code` to the `Tag` table without a default value. This is not possible if the table is not empty.
  - Added the required column `percentage_width` to the `Tag` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Game" ADD COLUMN     "color_code" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Tag" DROP COLUMN "percentage",
ADD COLUMN     "color_code" TEXT NOT NULL,
ADD COLUMN     "percentage_width" INTEGER NOT NULL;
