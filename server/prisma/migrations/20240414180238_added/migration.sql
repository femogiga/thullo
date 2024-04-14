-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'MODERATOR', 'USER');

-- CreateTable
CREATE TABLE "BoardsOnUsers" (
    "boardId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'USER',

    CONSTRAINT "BoardsOnUsers_pkey" PRIMARY KEY ("boardId","userId")
);

-- AddForeignKey
ALTER TABLE "BoardsOnUsers" ADD CONSTRAINT "BoardsOnUsers_boardId_fkey" FOREIGN KEY ("boardId") REFERENCES "Board"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BoardsOnUsers" ADD CONSTRAINT "BoardsOnUsers_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
