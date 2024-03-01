/*
  Warnings:

  - You are about to drop the column `imageUrl` on the `Label` table. All the data in the column will be lost.
  - Added the required column `imageUrl` to the `Task` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Label" DROP COLUMN "imageUrl";

-- AlterTable
ALTER TABLE "Task" ADD COLUMN     "imageUrl" TEXT NOT NULL;
