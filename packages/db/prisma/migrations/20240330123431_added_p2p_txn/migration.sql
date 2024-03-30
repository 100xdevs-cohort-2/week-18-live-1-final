/*
  Warnings:

  - You are about to drop the column `provider` on the `p2pTransfer` table. All the data in the column will be lost.
  - You are about to drop the column `startTime` on the `p2pTransfer` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `p2pTransfer` table. All the data in the column will be lost.
  - You are about to drop the column `token` on the `p2pTransfer` table. All the data in the column will be lost.
  - Added the required column `timestamp` to the `p2pTransfer` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "p2pTransfer_token_key";

-- AlterTable
ALTER TABLE "p2pTransfer" DROP COLUMN "provider",
DROP COLUMN "startTime",
DROP COLUMN "status",
DROP COLUMN "token",
ADD COLUMN     "timestamp" TIMESTAMP(3) NOT NULL;
