/*
  Warnings:

  - Added the required column `user_id` to the `boards` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `boards` ADD COLUMN     `user_id` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `boards` ADD FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
