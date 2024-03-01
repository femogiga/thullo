/*
  Warnings:

  - You are about to drop the column `imageUrl` on the `Task` table. All the data in the column will be lost.
  - You are about to drop the column `label` on the `Task` table. All the data in the column will be lost.
  - You are about to drop the column `labelColor` on the `Task` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Task" DROP COLUMN "imageUrl",
DROP COLUMN "label",
DROP COLUMN "labelColor";

-- CreateTable
CREATE TABLE "Label" (
    "id" SERIAL NOT NULL,
    "label" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "labelColor" TEXT NOT NULL,

    CONSTRAINT "Label_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TasksOnLabels" (
    "taskId" INTEGER NOT NULL,
    "labelId" INTEGER NOT NULL,

    CONSTRAINT "TasksOnLabels_pkey" PRIMARY KEY ("taskId","labelId")
);

-- AddForeignKey
ALTER TABLE "TasksOnLabels" ADD CONSTRAINT "TasksOnLabels_taskId_fkey" FOREIGN KEY ("taskId") REFERENCES "Task"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TasksOnLabels" ADD CONSTRAINT "TasksOnLabels_labelId_fkey" FOREIGN KEY ("labelId") REFERENCES "Label"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
