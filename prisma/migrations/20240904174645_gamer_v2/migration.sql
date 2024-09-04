/*
  Warnings:

  - You are about to drop the column `color_code` on the `Game` table. All the data in the column will be lost.
  - You are about to drop the column `logo` on the `Game` table. All the data in the column will be lost.
  - You are about to drop the column `color_code` on the `Tag` table. All the data in the column will be lost.
  - You are about to drop the column `percentage_width` on the `Tag` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Game" DROP COLUMN "color_code",
DROP COLUMN "logo";

-- AlterTable
ALTER TABLE "Tag" DROP COLUMN "color_code",
DROP COLUMN "percentage_width";
