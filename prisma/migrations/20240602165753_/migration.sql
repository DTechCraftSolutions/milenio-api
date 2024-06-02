/*
  Warnings:

  - You are about to drop the column `observation` on the `Product` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "CartItem" ADD COLUMN     "observation" TEXT;

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "observation";
