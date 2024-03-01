-- CreateTable
CREATE TABLE "UsersOnTasks" (
    "authorId" INTEGER NOT NULL,
    "taskId" INTEGER NOT NULL,

    CONSTRAINT "UsersOnTasks_pkey" PRIMARY KEY ("taskId","authorId")
);

-- AddForeignKey
ALTER TABLE "UsersOnTasks" ADD CONSTRAINT "UsersOnTasks_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UsersOnTasks" ADD CONSTRAINT "UsersOnTasks_taskId_fkey" FOREIGN KEY ("taskId") REFERENCES "Task"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
