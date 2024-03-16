/*
  Warnings:

  - You are about to drop the column `boardId` on the `UsersOnTasks` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "UsersOnTasks" DROP COLUMN "boardId",
ADD COLUMN     "boardIndex" INTEGER;
