/*
  Warnings:

  - Added the required column `title` to the `boards` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `boards` ADD COLUMN     `title` VARCHAR(191) NOT NULL,
    ADD COLUMN     `color` ENUM('red', 'green', 'blue'),
    ADD COLUMN     `image` VARCHAR(191);
