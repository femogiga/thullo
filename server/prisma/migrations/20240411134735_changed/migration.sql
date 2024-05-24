/*
  Warnings:

  - You are about to drop the column `assetId` on the `Asset` table. All the data in the column will be lost.
  - Added the required column `taskId` to the `Asset` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Asset" DROP CONSTRAINT "Asset_assetId_fkey";

-- AlterTable
ALTER TABLE "Asset" DROP COLUMN "assetId",
ADD COLUMN     "taskId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Asset" ADD CONSTRAINT "Asset_taskId_fkey" FOREIGN KEY ("taskId") REFERENCES "Task"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
