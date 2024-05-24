-- CreateEnum
CREATE TYPE "Privacy" AS ENUM ('PRIVATE', 'PUBLIC');

-- AlterTable
ALTER TABLE "Board" ADD COLUMN     "privacy" "Privacy" NOT NULL DEFAULT 'PUBLIC';
