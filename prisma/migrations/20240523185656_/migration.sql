/*
  Warnings:

  - You are about to drop the column `Adress` on the `Order` table. All the data in the column will be lost.
  - Added the required column `user_adress` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_email` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_name` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_telephone` to the `Order` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Order" DROP COLUMN "Adress",
ADD COLUMN     "user_adress" TEXT NOT NULL,
ADD COLUMN     "user_email" TEXT NOT NULL,
ADD COLUMN     "user_name" TEXT NOT NULL,
ADD COLUMN     "user_telephone" TEXT NOT NULL;
