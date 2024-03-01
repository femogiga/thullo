/*
  Warnings:

  - You are about to drop the column `boardId` on the `Task` table. All the data in the column will be lost.
  - Added the required column `panelId` to the `Task` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Task" DROP CONSTRAINT "Task_boardId_fkey";

-- AlterTable
ALTER TABLE "Task" DROP COLUMN "boardId",
ADD COLUMN     "panelId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "Panel" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "boardId" INTEGER NOT NULL,

    CONSTRAINT "Panel_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Panel" ADD CONSTRAINT "Panel_boardId_fkey" FOREIGN KEY ("boardId") REFERENCES "Board"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Task" ADD CONSTRAINT "Task_panelId_fkey" FOREIGN KEY ("panelId") REFERENCES "Panel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
