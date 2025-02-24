-- CreateEnum
CREATE TYPE "Plan" AS ENUM ('FREE', 'VIRTUAL', 'PRESENCIAL', 'HYBRID');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "plan" "Plan" NOT NULL DEFAULT 'FREE';
