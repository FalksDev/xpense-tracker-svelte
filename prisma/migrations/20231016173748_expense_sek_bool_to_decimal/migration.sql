/*
  Warnings:

  - Changed the type of `sek` on the `Expense` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Expense" DROP COLUMN "sek",
ADD COLUMN     "sek" DECIMAL(65,30) NOT NULL;
