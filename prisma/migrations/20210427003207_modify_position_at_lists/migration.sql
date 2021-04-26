/*
  Warnings:

  - You are about to alter the column `position` on the `lists` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Double`.

*/
-- AlterTable
ALTER TABLE `lists` MODIFY `position` DOUBLE NOT NULL DEFAULT 65536;
